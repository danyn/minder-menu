import {
  newMegaMenu,
} from '../LocalState/InitialState'
export const MegaMenuCustomDataHandle = {
  handle : {
    type: '$app:megaMenu_14',
    handle: 'menu',
  }
}

export const MegaMenuCustomDataDefinition = {
  definition: {
    name: 'Mega Menu Feature',
    type: MegaMenuCustomDataHandle.handle.type,
    access: {
      admin: "PUBLIC_READ_WRITE",
      storefront: "PUBLIC_READ",
    },
    fieldDefinitions:[
      {
        name: "Role",
        key: "role",
        type: "single_line_text_field",
      },
      {
        name: "JSON tree", 
        key: "data",
        type: "json"
      },
    ],
  }
}

export function MegaMenuInitialData() {
  const data = JSON.stringify(newMegaMenu())
  return {
    metaobject: {
      type: MegaMenuCustomDataHandle.handle.type, 
      handle: MegaMenuCustomDataHandle.handle.handle,
        fields: [
          {
            key: "role",
            value: "MegaMenuJsonData"
          },
          {
            key: "data",
            value: data,
          }
        ]
      }
  }
}


/*

"{\"id\":\"37d86ccb-b697-4bcb-91be-c6988193c9eb\",\"tagName\":\"nav\",\"className\":\"MainNav\",\"classList\":\"MainNav\",\"list\":{\"id\":\"ab72d704-abaf-4945-a0b3-046226acf6f1\",\"tagName\":\"ul\",\"className\":\"TopLevelLinkContainer\",\"classList\":\"TopLevelLinkContainer\",\"items\":[]}}"

*/


