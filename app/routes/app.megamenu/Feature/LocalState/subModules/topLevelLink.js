import {
  defaultState,
  C,
} from '../DefaultState.js';

import {
  newTopLevelLinkItem,
} from '../InitialState.js';

import {
  getTopLevelLinkItems,
}  from  '../../FEATURE_INDEX.js';

import {v4 as uuid} from 'uuid';


export function topLevelLink(state, subPayload) {
  const { type, payload } = subPayload;

  switch (type) {

    case 'addNew': {
      console.info('%c ls::topLevelLink::addNew', C)

      const {data, topLevelLinkItems} = getTopLevelLinkItems(state);
      const id = uuid();
      topLevelLinkItems.push(newTopLevelLinkItem({id}))
      return {
        ...state,
        currentLinkItem: defaultState.currentLinkItem,
        currentColumn: defaultState.currentColumn,
        modals: {
          ...state.modals,
          AddTopLevelLinkModal: {
            isOpen: false,
          }
        },
        currentTopLevelLinkItem: {id,}, 
        data,
      }
    }

    case 'select': {
      console.info('%c ls::topLevelLink::select', C);
      return {
        ...state,
        currentLinkItem: defaultState.currentLinkItem,
        currentColumn: defaultState.currentColumn,
        currentTopLevelLinkItem: {...payload},
      }
    }

    case 'updateTopLevelLinkItem': {
      console.info('%c ls::topLevelLink::updateTopLevelLinkItem', C);
      return {
        ...state,
        modals: {
          ...state.modals,
          // TODO currently just close modal proceed
            AddLinkItemModal: defaultState.modals.AddLinkItemModal,
          }
        }
    }

    /* Don't crash the app */
    default: {
      console.info('%c ls::topLevelLink:: NO CASE FOUND ', C, subPayload)
      return {...state}
    }

  } //switch
}