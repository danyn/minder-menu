import {
  defaultState,
  C,
} from '../DefaultState.js';


export function modals(state, subPayload) {
  const { type, payload } = subPayload;

  switch (type) {

    case 'open': {
      return {
        ...state,
        modals: {
          ...state.modals,
          ...payload,
        }
      }
    }


    case 'close' : {
      const {modal} = payload;
      return {
        ...state,
        modals: {
          ...state.modals,
          [modal]: {
            isOpen: false,
          }
        }
      }
    }

      /****  Don't crash the app *****/
    default: {
      console.info('%c ls::subMenu::NO CASE FOUND ', C, payload)
      return {...state}
    }
  }//switch

}
