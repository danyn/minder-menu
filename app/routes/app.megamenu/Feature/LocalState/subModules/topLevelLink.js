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


export function topLevelLink(state, payload) {
  const { type, data } = payload;

  switch (type) {

    case 'addNewTopLevelLinkItem': {
      console.info('%c ls::topLevelLink::addNewTopLevelLinkItem', C)

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

    case 'selectTopLevelAnchor': {
      console.info('%c ls::topLevelLink::selectTopLevelAnchor', C)
      return {
        ...state,
        currentLinkItem: defaultState.currentLinkItem,
        currentColumn: defaultState.currentColumn,
        currentTopLevelLinkItem: {...data},
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
      console.info('%c ls::topLevelLink:: NO CASE FOUND ', C, payload)
      return {...state}
    }

  } //switch
}