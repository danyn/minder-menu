export const CREATE_METAOBJECT_DEFINITION = `#graphql
mutation CreateMetaobjectDefinition($definition: MetaobjectDefinitionCreateInput!) {
  metaobjectDefinitionCreate(definition: $definition) {
    metaobjectDefinition {
      name
      type
      access {
        admin
        storefront
      }
      fieldDefinitions {
        name
        key
      }
    }
    userErrors {
      field
      message
      code
    }
  }
}`;

export const GET_METAOBJECT_BY_HANDLE = `#graphql
  query MetaobjectByHandle($handle: MetaobjectHandleInput!){
    metaobjectByHandle(handle: $handle) {
      handle
      id
      fields {
        key
        value
      } 
    }
  }`

export const GET_METAOBJECT_DEFINITION_BY_TYPE = `#graphql
query getMetaobjectDefinitionByType($type: String!) {

  metaobjectDefinitionByType(type:$type) {
    id
    type
    fieldDefinitions{
      name
      key
      type {
        name
        category
      }
      description
    }
  }

}`;


/**
 * Get A metaobject that has at least two keys 
 * 'data' json data
 * 'role' what the data is for
 */
export const GET_METAOBJECT_ROLE = `#graphql
query GetMetaobjectRole($handle: MetaobjectHandleInput!) {
  metaobjectByHandle(handle: $handle) {
    id
    handle
    type
    role: field(key: "role") {
      value
    }
    data: field(key: "data") {
      value
    }
  }
}`

/**
 * Create A metaobject that has at least two keys 
 * 'data' json data
 * 'role' what the data is for
 * and return those two keys after creation
 */
export const CREATE_METAOBJECT_ROLE = `#graphql
mutation CreateMetaobjectRole($metaobject: MetaobjectCreateInput!) {
  metaobjectCreate(metaobject: $metaobject) {
    metaobject {
      id
      handle
      type
      role: field(key: "role") {
        value
      }
      data: field(key: "data") {
        value
      }
    }
    userErrors {
      field
      message
      code
    }
  }
}
`;


export const UPDATE_METAOBJECT_ROLE = `#graphql
mutation UpdateMetaobjectRole($id: ID!, $metaobject: MetaobjectUpdateInput!) {
  metaobjectUpdate(id: $id, metaobject: $metaobject) {
    metaobject {
    id
    handle
    type
    role: field(key: "role") {
      value
    }
    data: field(key: "data") {
      value
    }
  }
  userErrors {
    field
    message
    code
  }
  }
}`;
