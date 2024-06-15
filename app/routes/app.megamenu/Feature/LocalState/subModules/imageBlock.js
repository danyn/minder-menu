import {
  newImageBlock,
  getLinkItem,
  getColumn,
  classNames,
  defaultState,
  C,
} from '../../FEATURE_INDEX';

import _ from 'lodash';

export function imageBlock(state, subPayload) {
  const { type, payload } = subPayload;

  switch (type) {

    case 'addNew': {
      const {mode, id} = payload;
      console.info(`%c ls::imageBlock::addNew -> mode:${mode} id:${id}`,C)
      
      const  {
        data,
        column,
      } = getColumn(state);

      if(!Array.isArray(column?.items )) {
        console.warn('! colum.items is not an array', {column,})
        return {...state}
      }
      const block = newImageBlock(payload);

      if(mode === 'new') {
        column.items.push(block);
      } else if (mode === 'update') {
        column.items.forEach((item, i) => {if(item.id === id){column.items[i] = block}});
      }
      return {
        ...state,
        data,
        currentLinkItem: {
          id: block.id,
        },
        currentColumn: {
          ...state.currentColumn,
          selected: false,
        }
      }
    }


    case 'style' : {
      const {selector, declaration} = payload;
      const { 
        data,
        linkItem,
      } = getLinkItem(state);

      const items = linkItem?.items;
      const blocksItems = getBlockItems(items, classNames, state);

      blocksItems[selector].style = {
        ...blocksItems[selector].style,
        ...declaration,
      }
      // blocksItems
      return {
        ...state,
        data,
      }
    }

    case 'hasStyleRules' : {
      // console.log('hasStyleRules');
      const { 
        data, 
        linkItem,
      } = getLinkItem(state);

      // console.log({
      //   linkItem,
      // })
      linkItem.hasStyleRules = !linkItem.hasStyleRules
       /* when there is no style props (on first interaction) copy the ones from global */
      if(linkItem.hasStyleRules ) {
        const items = linkItem?.items;
        const blocksItems = getBlockItems(items, classNames, state);
        console.warn(blocksItems)
        if(!blocksItems[classNames.imageBlock.title].style?.fontSize) {
          // console.log('initialize them all!!!')
          blocksItems[classNames.imageBlock.title].style = state.style[classNames.imageBlock.title];
          blocksItems[classNames.imageBlock.description].style = state.style[classNames.imageBlock.description]
          blocksItems[classNames.imageBlock.Cta].style = state.style[classNames.imageBlock.Cta]
        }
      }


      return {
        ...state,
        data,
      }
    }

    /****  Don't crash the app *****/
    default: {
      console.info('%c ls::subMenu::NO CASE FOUND ', C, payload)
      return {...state}
    }
  
  }//switch
}

function getBlockItems(items, classNames, state) {
  return {
    [classNames.imageBlock.title]: _.find(items, {className: classNames.imageBlock.title } ),
    [classNames.imageBlock.description]: _.find(items, {className: classNames.imageBlock.description } ) ,
    [classNames.imageBlock.Cta]: _.find(items, {className: classNames.imageBlock.Cta } ) ,
  }
}





