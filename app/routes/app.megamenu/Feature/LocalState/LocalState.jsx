import React, { useReducer, useContext } from "react";
import { useLoaderData } from "@remix-run/react";
import { defaultState, C, initializer } from './DefaultState.js';
import { newMegaMenu } from './InitialState.js';

/*sub modules*/



// import { settings } from './settings.js'

// import {errorMessaging} from './errorMessaging.js'

// import {global} from './global.js'


import { clusterActions } from './subModules/clusterActions.js';
import { topLevelLink } from './subModules/topLevelLink.js';
import { modals } from './subModules/modals.js';
import { subMenu } from './subModules/subMenu.js';
import { dragEvent } from "./subModules/dragEvent.js";
import { columnItems } from "./subModules/columnItems.js";

import { imageBlock } from './subModules/imageBlock.js';

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

    // remove this case
    /*
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
    */

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
    
    // case 'settings': return settings(state, payload)
    
    
    
 
    
    case 'modals': return modals(state, payload);
    case 'topLevelLink': return topLevelLink(state, payload);
    case 'clusterAction': return clusterActions(state, payload);
    case 'subMenu': return subMenu(state, payload);
    case 'dragEvent': return dragEvent(state, payload);
    case 'columnItems': return columnItems(state, payload);
    case 'imageBlock': return imageBlock(state, payload);

    /* Don't crash the reducer just warn */
    default: {
      console.info('%c ls:: NO ACTION DEFINED ', C,  {type, payload});
      return {...state}
    }
      

  
  }//switch

}// end reducer 

/*
  LocalState is a custom component that encapsulates the dispatch and state contexts for the reducer
*/

export function LocalState ({ children }) {
  const _data = useLoaderData();
  const data = JSON.parse(_data.payload.data.value);

  const payload = {
    data, 
    dataId: _data.payload.id,
    dataSource: _data.dataSource,
  };

  // const [state, dispatch] = useReducer(reducer, defaultState);

  const [state, dispatch] = useReducer(reducer, payload, initializer);
  console.info("%c ls::<> ", C, {state, data, _data});

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
