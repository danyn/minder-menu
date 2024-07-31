import { authenticate } from "../../shopify.server";

import { json } from "@remix-run/node";

import Feature from './Feature/Feature';

import {
  GET_METAOBJECT_DEFINITION_BY_TYPE,
  CREATE_METAOBJECT_DEFINITION,
  GET_METAOBJECT_ROLE,
  CREATE_METAOBJECT_ROLE,
  MegaMenuCustomDataHandle,
  MegaMenuCustomDataDefinition,
  MegaMenuInitialData,
  videoUrl,
  Video,
} from './Feature/FEATURE_INDEX.js';


export const loader = async ({ request }) => {
  /* 1. Authenticate */
  const { admin } = await authenticate.admin(request);

  /* 2. Try to get an existing megamenu metaobject by its handle and proceed conditionall based on whether it exists yet */
  const customDataRequest = await admin.graphql(GET_METAOBJECT_ROLE, { variables: MegaMenuCustomDataHandle });
  const customDataJson = await customDataRequest.json();
  const customData = customDataJson?.data?.metaobjectByHandle

  /* 3. if there is custom data present for the megamenu return it right away so it can by put into the local state to start editing from */
  /* RETURN EXISTING DATA */
  if (customData !== null) return json({ payload: customData, dataSource: 'user data' });

  /* if the custom data is not present check for the basic requirements of this data */
  if (customData === null) {
    /* a. check if the metaobject definition exists */
    const _hasMetaobjectDefinition = await admin.graphql(GET_METAOBJECT_DEFINITION_BY_TYPE, {
      variables: { type: MegaMenuCustomDataHandle.handle.type }
    });

    const hasMetaobjectDefinition = await _hasMetaobjectDefinition.json()
    /* If the definition does not exist yet this should be the firts time the user came here -> create the definition */
    if (hasMetaobjectDefinition.data.metaobjectDefinitionByType === null) {

      const _createdNewMetaobjectDefinition = await admin.graphql(CREATE_METAOBJECT_DEFINITION, {
        variables: MegaMenuCustomDataDefinition,
      });
      const createdNewMetaobjectDefinition = await _createdNewMetaobjectDefinition.json();
      /* Check the response status */
      // TODO

      /* then check for this prop value: duck type it for one last check */
      if (!createdNewMetaobjectDefinition?.data?.metaobjectDefinitionCreate?.metaobjectDefinition?.name === "Mega Menu") {
        // TODO handle this error or return something to the UI instead of crashing the app.
        throw new Error('did not create the megamenu definition')
      } else {
        console.log('CREATED MEGAMENU DEFINITION')
      }

    }

    /* Create the metaobject for this definintion using default data for the UI to render */
    const defaultDataResponse = await admin.graphql(CREATE_METAOBJECT_ROLE, {
      variables: MegaMenuInitialData(),
    })


    const defaultDataJson = await defaultDataResponse.json();
    const defaultData = defaultDataJson.data.metaobjectCreate.metaobject
    /* RETURN DEFAULT DATA */
    return json({ payload: defaultData, dataSource: 'default data' })
  }
};


export default function MegaMenu() {

  return (

<div className="SingleLanding">
  <Feature />
</div>

  );
}