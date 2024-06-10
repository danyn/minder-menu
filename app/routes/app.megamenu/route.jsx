import { 
  useFetcher,
  // useMatches

} from "@remix-run/react";

import { authenticate } from "../../shopify.server";

import { json } from "@remix-run/node";

import Feature from './Feature/Feature'

import {
  GET_METAOBJECT_DEFINITION_BY_TYPE,
  CREATE_METAOBJECT_DEFINITION,
  GET_METAOBJECT_ROLE,
  CREATE_METAOBJECT_ROLE,
  MegaMenuCustomDataHandle,
  MegaMenuCustomDataDefinition,
  MegaMenuInitialData,
} from './Feature/FEATURE_INDEX.js'


export async function action({request}) {
  const {admin} = await authenticate.admin(request);

  /* Get an existing megamenu metaobject by its handle */
  const customDataRequest = await admin.graphql(GET_METAOBJECT_ROLE, { variables: MegaMenuCustomDataHandle});
  const customDataJson = await customDataRequest.json();
  const customData = customDataJson?.data?.metaobjectByHandle

  if( customData !== null) return json({payload:customData, dataSource:'user data' });

  /* Provide default values create definitions if necessary */
  if ( customData === null ) {
      /* There is no metaobject yet -> check if the definition exists */
      const _hasMetaobjectDefinition = await admin.graphql(GET_METAOBJECT_DEFINITION_BY_TYPE, {
        variables: {type: MegaMenuCustomDataHandle.handle.type}
      });

      const hasMetaobjectDefinition = await _hasMetaobjectDefinition.json()

      if(hasMetaobjectDefinition.data.metaobjectDefinitionByType === null) {
        /* Create the definition */
        const _createdNewMetaobjectDefinition = await admin.graphql(CREATE_METAOBJECT_DEFINITION, {
          variables: MegaMenuCustomDataDefinition,
        })

        const createdNewMetaobjectDefinition = await _createdNewMetaobjectDefinition.json();

        /* Check the response status then check for this prop value */
        if(!createdNewMetaobjectDefinition?.data?.metaobjectDefinitionCreate?.metaobjectDefinition?.name === "Mega Menu" ) {
          // handle this error or return something to the UI
          throw new Error('did not create the megamenu definition')
        } else {
          console.log('CREATED MEGAMENU DEFINITION')
        }

      }
      /* Add initial default data to the metaobject */
      const defaultDataResponse = await admin.graphql(CREATE_METAOBJECT_ROLE, {
        variables:  MegaMenuInitialData(),
      })

      const defaultDataJson = await defaultDataResponse.json();
      const defaultData = defaultDataJson.data.metaobjectCreate.metaobject
      // DO ERROR HANDLING ON RESONSE
      return json({payload: defaultData , dataSource:'default data'})
    }
}


export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};


export default function MegaMenu() {

  // const matches = useMatches()
  // console.log({matches})

  return (

<div className="SingleLanding">
  <div className="content">
    <div className="video">
      Add a full feature megamenu to your site.
    </div>
    <div className="launch">
    <OpenButton/>
    </div>
  </div>
  
  <div className="featureModal">
    <Feature />
  </div>
</div>

  );
}

function OpenButton() {
  const fetcher = useFetcher({ key: "init-megamenu" });
  const isLoading = fetcher.state === 'loading' || fetcher.state === 'submitting'

  return (
<fetcher.Form method="post" >
  <div onClick={()=>{
    }}>
    <button >{isLoading ? 'loading': 'open'}</button>
  </div>
</fetcher.Form>
  )
}