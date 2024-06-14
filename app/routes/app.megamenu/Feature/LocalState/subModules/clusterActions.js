import {
  C
} from '../DefaultState.js';

import {
  parseStyleObjects,
  // traverseNestedStyles,
  traverseJsonTree
} from './utils'



export function clusterActions(state, subPayload) {
  const { type, payload } = subPayload;

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

    case 'exit': {
      // TODO check for unsaved changes... create dialog for that
      console.info('%cls::clusterActions::exit', C,);
      return {
        ...state,
        modals: {
          ...state.modals,
          FeatureModal: {
            isOpen: false,
          }
        }
      }
    }


    /****  Don't crash the app *****/
    default: {
      console.info('%c ls::clusterActions::NO CASE FOUND ', C, payload)
      return {...state}
    }

  }

}