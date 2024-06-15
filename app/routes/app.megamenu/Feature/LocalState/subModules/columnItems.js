import {
  getColumn,
  newLinkItem,
  defaultState,
  C,
} from '../../FEATURE_INDEX';

import {v4 as uuid} from 'uuid';

export function columnItems (state, sub_payload) {
  const { type, payload } = sub_payload;

  switch (type) {

    case 'addLinkItem': {
      const  {
        data,
        column 
      } = getColumn(state)

      console.info('%c ls::columnItems::addLinkItem', C, {column})
  
      if(!Array.isArray(column?.items )) {
        console.warn('! colum.items is not an array', {column,})
        return {...state}
      }

      const id = uuid();

      // TODO result from resource picker
      column.items.push(newLinkItem({id, url: 'https://domain.com/collection/blue-shirts/'}));

      return {
        ...state,
        modals: {
          ...state.modals,
          AddLinkItemModal: {
            isOpen: false,
          }
        },
        data,
      }
    }


    case 'selectCurrentLinkItem': {
      console.info('%c ls::columnItems::selectCurrentLinkItem', C);
      const {id, columnId}  = payload
    return {
      ...state,
      currentLinkItem: {id,},
      currentColumn: {id: columnId, selected: false},
    }

  }

    /****  Don't crash the app *****/
    default: {
      console.info('%c ls::columnItems::NO CASE FOUND ', C, payload)
      return {...state}
    }

  }
}