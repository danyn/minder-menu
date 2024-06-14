import {
  C
} from './__defaultState';

import {
  parseStyleObjects,
  // traverseNestedStyles,
  traverseJsonTree
} from './utils'



export function clusterActions(state, payload) {
  const { type, data } = payload;

  switch (type) {

    case 'save': {
      const styleLevel1 = parseStyleObjects(state.style)
      const styleLevel2 = traverseJsonTree(state.data)
      // const styleLevel2 = traverseNestedStyles(state.topLevelLinkItems)

      console.info('%cls::clusterActions::save', C, {styleLevel1, styleLevel2})

      return {
        ...state,
      }

    }


    /****  Don't crash the app *****/
    default: {
      console.info('%c ls::clusterActions::NO CASE FOUND ', C, payload)
      return {...state}
    }

  }

}