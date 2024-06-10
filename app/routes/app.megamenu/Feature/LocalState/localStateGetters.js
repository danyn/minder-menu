import _ from 'lodash';

/*
  Shared find functions
  Find an item in state using its id
*/
function findTopLevelLinkItem(topLevelLinkItems, state) {
  return _.find(topLevelLinkItems , ['id', state.currentTopLevelLinkItem.id]);
}

function findColumn(topLevelLinkItem, state) {
  return _.find(topLevelLinkItem.list.items , (o)=>{ return o.list.id === state.currentColumn.id}).list
}

function findColumnIndex(topLevelLinkItem, state) {
  return _.findIndex(topLevelLinkItem.list.items , (o)=>{ return o.list.id === state.currentColumn.id})
}

function findLinkItem(column, state) {
  return _.find(column.items, ['id', state.currentLinkItem.id])
}


/*
  Get an element using find functions
  For JSX templates consume from state directly
  without modifying anything.
*/


export function getTopLevelLinks(state) {
  return state?.data?.list?.items;
}

export function getCurrentTopLevelLinkItem(state) {
  if(state.currentTopLevelLinkItem.id) {
    return findTopLevelLinkItem(state?.data?.list?.items, state)
  }
}

export function getCurrentColumn(state) {
  const currentTopLevelLink = getCurrentTopLevelLinkItem(state);
  if(currentTopLevelLink && state.currentColumn.id) {
    return findColumn(currentTopLevelLink, state)
  }
}

export function getCurrentColumnLink(state) {
  const column = getCurrentColumn(state);
  if(column && state.currentLinkItem.id) {
    return findLinkItem(column, state)
  }
}

/*
  Get an element using find functions
  Get it from a copy of state.data for use inside reducer functions
  This allows the object to be updated by reference
  and then placed back into state after being modified
*/

function cloneData(state) {
  return _.cloneDeep(state.data)
}

export function getTopLevelLinkItems(state) {
  const data = cloneData(state)
  // console.log({data})

  return {data, topLevelLinkItems: data.list.items}
}

export function getTopLevelLinkItem(state) {
  const {data, topLevelLinkItems} = getTopLevelLinkItems(state)
  const topLevelLinkItem = findTopLevelLinkItem(topLevelLinkItems, state)

  return { data, topLevelLinkItems, topLevelLinkItem }
}


export function getColumn(state) {
  const { data, topLevelLinkItems, topLevelLinkItem} = getTopLevelLinkItem(state)
  const column = findColumn(topLevelLinkItem, state);

  return { data, topLevelLinkItems, topLevelLinkItem, column }
}


export function getcolumnIndex(state) {
  const { data, topLevelLinkItems, topLevelLinkItem } = getTopLevelLinkItem(state)
  const columnIndex = findColumnIndex(topLevelLinkItem, state)

  return { data, topLevelLinkItems, topLevelLinkItem, columnIndex };
}


export function getLinkItem(state) {
  const { data, topLevelLinkItems, topLevelLinkItem, column } = getColumn(state)
  const linkItem = findLinkItem(column, state)

  return { data, topLevelLinkItems, topLevelLinkItem, column, linkItem }
}