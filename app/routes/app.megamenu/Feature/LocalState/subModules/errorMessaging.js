import {
  defaultState,
  C,
} from './__defaultState';

export function errorMessaging (state, sub_payload) {
  const { type, payload } = sub_payload;

  switch (type) {

    case 'open': {
      return {
        ...state,
        errorMessaging: {
          isOpen: true,
          message: payload.message
        }
      }
    }

    case 'close': {
      return {
        ...state,
        errorMessaging: defaultState.errorMessaging,
      }
    }

    /****  Don't crash the app *****/
    default: {
      console.info('%c ls::errorMessaging::NO CASE FOUND ', C, payload)
      return {...state}
    }

  }
}