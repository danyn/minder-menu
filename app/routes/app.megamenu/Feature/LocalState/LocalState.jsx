import React, { useReducer, useContext } from "react";
import { defaultState, C } from './DefaultState.js';
import { newMegaMenu } from './InitialState.js';

/*sub modules*/
// import { dragEvent } from "./dragEvent.js";

// import { subMenu } from './subMenu.js'
// import { settings } from './settings.js'

// import {errorMessaging} from './errorMessaging.js'
// import {imageBlock} from './imageBlock.js'
// import {global} from './global.js'
// import { columnItems } from "./columnItems.js";

import {clusterActions} from './subModules/clusterActions.js';
import {topLevelLink} from './subModules/topLevelLink.js';
import {modals} from './subModules/modals.js';


// import{
//   newMegaMenu,
// }  from  '../__index.js'


/**
 * Local State is a React context and a reducer that
 * is used to manage the local client state for this feature
 */


/* 
  Create the Contexts outside component
*/
const LocalStateContext = React.createContext();
const LocalDispatchContext = React.createContext();


/*
  Logic for events is handled by a reducer outside component
*/

function reducer(state, action) {
  const {type, payload} = action;

  switch(type) {


    case 'initialData': {
      console.log('initialData::fired')
      const { dataId, data, dataSource } = payload;
      return {
        ...state,
        dataId, 
        data,
        dataSource,
        modals: {
          ...state.modals,
          FeatureModal: {
            isOpen: true,
          },
        }
      }
    }


    // case 'removeFocus': {
    //    /* Deselection for esc key and events */
    //   if(state.currentLinkItem.id !== null){
    //     return {
    //       ...state,
    //       currentLinkItem: {id: null},
    //     }
    //   }
    //   if(state.currentColumn.id !== null){
    //     return {
    //       ...state,
    //       currentColumn: {id: null},
    //     }
    //   }

    //   if(state.currentTopLevelLinkItem.id !== null){
    //     return {
    //       ...state,
    //       currentTopLevelLinkItem: {id: null},
    //     }
    //   }
    //   return {...state}
    // }
    

    /* Sub Modules */
    // case 'global': return global(state, payload)
    // case 'errorMessaging': return errorMessaging(state, payload)
    // case 'imageBlock': return imageBlock(state, payload)
    // case 'settings': return settings(state, payload)
    
    // case 'subMenu': return subMenu(state, payload)
    // case 'dragEvent': return dragEvent(state, payload)
 
    // case 'columnItems': return columnItems(state, payload)
    case 'modals': return modals(state, payload)
    case 'topLevelLink': return topLevelLink(state, payload)
    case 'clusterAction': return clusterActions(state, payload)

    /* Don't crash the reducer just warn */
    default: {
      console.info('%c ls:: NO ACTION DEFINED ', C,  {type, payload});
      return {...state}
    }
      

  
  }//switch

}// end reducer 

/*
  Component - Export a component to use the logic
*/

export function LocalState ({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  console.info("%c ls::<> ", C, {state});

  return (
    <LocalDispatchContext.Provider value={dispatch}>
      <LocalStateContext.Provider value={state}>
        {children}
      </LocalStateContext.Provider>
    </LocalDispatchContext.Provider>
  );
}

/*
  Export a hook to use the above contexts in other components
*/

/**
 * 
 * @param {*} give string 'state' or 'dispatch' defaults to 'both'
 * @returns  state or dispatch or [state, dispatch]
 */

export function useLocalState(give) {
  const state = useContext(LocalStateContext);
  const dispatch = useContext(LocalDispatchContext);
  if (!give)  return [state, dispatch];
  if (give === 'state')  return state
  if (give === 'dispatch') return dispatch
}
