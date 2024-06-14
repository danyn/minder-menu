import {
  defaultState,
  C,
} from './__defaultState';


export function global(state, subPayload) {
  const { type, payload } = subPayload;

  switch (type) {

    case 'style': {
      console.info('%cls::global::style', C)
      const {selector, declaration} = payload;
      return {
        ...state,
        style: {
          ...state.style,
          [selector]: {
            ...state.style[selector],
            ...declaration,
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





