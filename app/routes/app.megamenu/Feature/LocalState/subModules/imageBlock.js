import {
  newImageBlock,
  newImageBlockFromItems,
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

    /******  try new cases here **********/
    case 'upsert': {
      const {mode, id, items, currentValues} = payload;
      let _id;
      console.dir({items});
      console.info(`%c ls::imageBlock::insert -> mode:${mode} id:${id} }`,C)

      /* Populate the items with the current values */
      if(!Array.isArray(items)) {
        console.warn(`items is not an array ${items}`);
        return {...state}
      }
      items.forEach( item => {
        console.log({item, currentValues})
        switch (item.className) {
          case classNames.imageBlock.Cta:
            item.text = currentValues.CTA
            break;
          case classNames.imageBlock.description:
            item.text = currentValues.description
            break;
          case classNames.imageBlock.image:
            item.url = currentValues.imageFile
            break;
          case classNames.imageBlock.title:
            item.text = currentValues.title
            break;
          default:
            console.log('no matches!')
            break;
        }
      });
      
      const  {
        data,
        column,
      } = getColumn(state);

      if(!Array.isArray(column?.items )) {
        console.warn('! colum.items is not an array', {column,})
        return {...state}
      }
  

      if(mode === 'insert') {
        const imageBlock = newImageBlockFromItems(items);
        _id = imageBlock.id;
        column.items.push(imageBlock);

      } else if (mode === 'update') {
        _id = id;
        column.items.forEach((item, i) => {
          if(item.id === id) {
            item.items = items;
          }
        });
      }
      return {
        ...state,
        data,
        currentLinkItem: {
          id: _id,
        },
        currentColumn: {
          ...state.currentColumn,
          selected: false,
        },
        modals: {
          ...state.modals,
          AddImageBlockModal: {
            isOpen: false,
          },
        },
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





