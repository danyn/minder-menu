import { authenticate } from "../shopify.server";
import { json } from "@remix-run/node";
import {
  UPDATE_METAOBJECT_ROLE,
} from './app._index/APP/APP_INDEX.js'

/**
 * sdfsdf
 * @param {*} param0 
 */
export async function action({request}) {
  
  const {admin} = await authenticate.admin(request);
  const variables = await request.json();
  const response = await admin.graphql(UPDATE_METAOBJECT_ROLE, {variables});
  const data = await response.json();

  return json({response: data});
}

// https://github.com/remix-run/remix/releases/tag/remix%401.18.0

