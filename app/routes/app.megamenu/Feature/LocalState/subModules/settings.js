import {
  C
} from './__defaultState';

// import {
//   getTopLevelLinkItem,
// } from './utils'

import {
  getTopLevelLinkItem,
} from '../__index'



export function settings(state, payload) {
  const { type, data } = payload;

  switch (type) {

    case 'styleGlobal': {
      console.info('%cls::settings::styleGlobal', C)
      const {selector, declaration} = data;
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

    case 'styleTopLevelLinkItem': {
      console.info('%cls::settings::styleWithin', C)
      const {selector, declaration, hasDependent} = data;
      const { topLevelLinkItems, topLevelLinkItem } = getTopLevelLinkItem(state)
      topLevelLinkItem.style[selector] = {...topLevelLinkItem.style[selector],...declaration}

      /* Update dependent styles */
      // if(hasDependent) updateDependant(hasDependent, topLevelLinkItem, declaration )


      return {
        ...state,
        topLevelLinkItems,
      }
    }

    case 'styleOptionTopLevelLinkItem': {
      console.info('%cls::settings::styleWithin', C)
      const {selector, option} = data;
      const { topLevelLinkItems, topLevelLinkItem } = getTopLevelLinkItem(state)

      if( selector === 'linkItem' && option.useCustomStyle ) {
        if(!topLevelLinkItem?.style?.linkItem?.fontSize) {
          topLevelLinkItem.style.linkItem = {...state.style.linkItem}
        }
      }
  
      topLevelLinkItem.styleOptions[selector] = {...topLevelLinkItem.styleOptions[selector],...option}

      return {
        ...state,
        topLevelLinkItems,
      }
    }

    case 'topLevelLinkItemMeta': {
      console.info('%cls::settings::topLevelLinkItemMeta', C)
      const {key, value} = data
      const { topLevelLinkItems, topLevelLinkItem } = getTopLevelLinkItem(state)

  
      topLevelLinkItem.meta[key] = {...topLevelLinkItem.meta[key],...value}

      return {
        ...state,
        topLevelLinkItems,
      }
    }
    // case 'columnStyle' : {
    //   console.info('%cls::settings::ColumnStyle', C)

    //   return {
    //     ...state,
    //     style: {
    //       ...state.style,
    //       column: {
    //         ...state.style.column,
    //         ...data,
    //       }
    //     }
    //   }
    // }

    // case 'linkStyle' : {
    //   console.info('%cls::settings::ColumnStyle', C)

    //   return {
    //     ...state,
    //     style: {
    //       ...state.style,
    //       linkItem: {
    //         ...state.style.linkItem,
    //         ...data,
    //       }
    //     }
    //   }
    // }
    /****  Don't crash the app *****/
    default: {
      console.info('%c ls::settings::NO CASE FOUND ', C, payload)
      return {...state}
    }

  }

}

// keep? TODO redo in subMenu
// function updateDependant(hasDependent, topLevelLinkItem, declaration){
//   console.log('hasDependent', hasDependent)
//   if(hasDependent==='joinLeft') {
//     topLevelLinkItem.list.items.forEach(item => {
//       if(item.styleOptions.joinLeft.enabled) {
//         // item.style.column = {};
//         item.style.Column.marginLeft = `-${declaration.columnGap}`;
//       }
//     })
//   }
// }