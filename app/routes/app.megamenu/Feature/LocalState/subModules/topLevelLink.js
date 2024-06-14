import {
  defaultState,
  C,
} from './__defaultState.js';

import {
  uuid,
  getTopLevelLinkItems,
}  from  '../__index.js';

import {
  // getTopLevelLinkItems,
  // getTopLevelLinkItem,
} from './utils.js'

import {
  newTopLevelLinkItem,
} from './initalState'


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