import {
  defaultState,
  C,
} from './__defaultState.js';

import {
  initialState,
  // newLinkItem,
  newColumn,
  classNames,
} from './initalState'

import{
  uuid,
  newColumnContainer,
  getTopLevelLinkItem,
  getColumn,
  getLinkItem,
  getcolumnIndex,
  newImageBlock,
}  from  '../__index.js';


export function subMenu(state, payload) {
  const { type, data } = payload;

  switch (type) {

    /* **************
     *              *
     *  Link Items  *
     *              *
     ************** */ 


    case 'linkStyle': {
      console.info('ls::subMenu::linkStyle')
      
      const { topLevelLinkItems, topLevelLinkItem, column, linkItem } = getLinkItem(state);
      linkItem.style = {...linkItem.style, ...data}

      return {
        ...state,
        topLevelLinkItems,
      }
    }




    case 'linkStyleOptions' : {
      const { topLevelLinkItems, topLevelLinkItem, column, linkItem } = getLinkItem(state)
      /* when there is no size props (on first interaction) copy the ones from global settings */
      if(data?.hasCustomSizing) {
        if(!linkItem.style?.marginTop) {
          linkItem.style = state.style.linkItem
        }
      }

      linkItem.styleOptions = {...linkItem.styleOptions, ...data }

      console.info('%c ls::subMenu::linkStyleOptions', C, data, column)
      return {
        ...state,
        topLevelLinkItems,
      }
    }

    /* ***************
     *               *
     *     Column    *
     *               *
     ***************** */

    case 'addColumn': {
      console.info('%c ls::subMenu::addColumn', C);
      
      const { data, topLevelLinkItems, topLevelLinkItem } = getTopLevelLinkItem(state);
      if(topLevelLinkItem.list === false) {
        topLevelLinkItem.list = newColumnContainer({id: topLevelLinkItem.id })
      }

      // console.log('topLevelLinkItem', topLevelLinkItem)
      if( topLevelLinkItem.list.items.length < 8) {
        const id = uuid();
        topLevelLinkItem.list.items.push(newColumn({id}))
        /* update the classlist with number of columns */
        const n = topLevelLinkItem.list.items.length
        topLevelLinkItem.list.classList = topLevelLinkItem.list.classList.replace(/flex-columns-\d/, `flex-columns-${n}`)

        return {
          ...state,
          data,
          currentColumn: {id: undefined},
          currentLinkItem: defaultState.currentLinkItem,
        }
      }
      /* Else */   
      return {
        ...state,
      }
    }

    case 'selectColumn': {

      console.info('%c ls::subMenu::selectColumn', C)
      const {columnId, index} = data;
      const selected = (columnId !== state.currentColumn.id) || ( columnId === state.currentColumn.id  && !state.currentColumn.selected )

      return {
        ...state,
        currentColumn: selected ? {id: columnId, selected: true, index} : defaultState.currentColumn,
        currentLinkItem: defaultState.currentLinkItem,
      }
    }

    case 'deleteColumn': {

      console.info('%c ls::subMenu::deleteColumn', C);

      const {
          data,
          // topLevelLinkItems, 
          topLevelLinkItem, 
          columnIndex 
        } = getcolumnIndex(state)

      /* Remove the column from the array of columns */
      topLevelLinkItem.list.items.splice(columnIndex, 1)

      return {
        ...state,
        currentColumn: defaultState.currentColumn,
        data,
      }
    }

    case 'columnStyle': {
      console.info('ls::subMenu::ColumnStyle')
      const {selector, declaration} = data;
      const  { 
        data: _data,
        column,
      } = getColumn(state)
      
      column.style = {
        ...column.style, 
        [selector]: {
          ...column.style[selector],
          ...declaration,
        }
      }

      return {
        ...state,
        data: _data,
      }
    }


    case  'toggleColumnWidth' : {
        const {enabled} = data
        const { 
          data: _data, 
          topLevelLinkItems, 
          topLevelLinkItem, 
          column 
        } = getColumn(state);

        if(enabled) {

        column.style = {
          ...column.style, 
          [classNames.column.item]: {
            // TODO what if this doesn't alread exist what does spreading undefined do?
            /*
              the value is stored in column.styleOptions.customWidth._style.flexBasis so you can toggle it on and off
              _style stores values that need to be toggled 
            */
            ...column.style[classNames.column.item],
            flexBasis: column.styleOptions.customWidth._style === false ? `${100/topLevelLinkItem.list.items.length}%` :  column.styleOptions.customWidth._style.flexBasis,
          }
        }

      } else {
        /* enabled === false 
          Store the value in _style so it can be toggled back on
        */
        column.styleOptions = {
          ...column.styleOptions, 
          customWidth: {
            _style: {
              flexBasis: column.style.Column.flexBasis, 
            },
          }
        }
        delete column.style.Column.flexBasis;
      }

      column.styleOptions.customWidth.enabled = enabled;
      

      console.info('%c ls::subMenu::columnWidth', C, data, column)
      return {
        ...state,
        data: _data,
      }
    }

    /*
      This is currently only being used to toggle: Join left
      Join left should just have its own reducer
      This abstarction is hard to read although it makes sense
      Join left should be able to reduce the space down to 0 using 
      a slider instead of just removing the entire gap (negative margin)
      It could be called tighten gap
    */
    case 'toggleStyleOption': {
      const {enabled, key, hasDependent} = data
      const {
        data: _data,
        topLevelLinkItem,
        column,
      } = getColumn(state);
      
      column.styleOptions[key] = {...column.styleOptions[key], enabled};

      if(hasDependent) {
        updateDependentStyle({
          enabled,
          key,
          column,
          topLevelLinkItem,
        })
      }

      console.info('%c ls::subMenu::toggleStyleOption', C, payload, column)
      return {
        ...state,
        data: _data,
      }
    }


    /* ********************
     *                    *
     *     Sub Menu       *
     *                    *
     ******************** */

    case 'subMenuStyleOptions' : {
      const {selector, option} = data
      const {data: _data, topLevelLinkItem} = getTopLevelLinkItem(state)
      const subMenu = topLevelLinkItem.list

      if(!subMenu) return {...state}

      if(selector === classNames.link.item) {
        if(!subMenu.style[classNames.link.item]) {
          subMenu.style[classNames.link.item] = state.style[classNames.link.item]
        }
      }

      subMenu.styleOptions = {
        ...subMenu.styleOptions,
        [selector]: {
          ...subMenu.styleOptions[selector],
          ...option,
        }
      }

      return {
        ...state,
        data: _data,
      }
    }

    case 'subMenuStyle' : {

      const {selector, declaration} = data;
      const {data: _data, topLevelLinkItem} = getTopLevelLinkItem(state)
      const subMenu = topLevelLinkItem.list

      if(!subMenu) return {...state}

      subMenu.style = {
        ...subMenu.style, 
        [selector]: {
          ...subMenu.style[selector],
          ...declaration,
        }
      }

      return {
        ...state,
        data: _data,
      }
    }

    /****  Don't crash the app *****/
    default: {
      console.info('%c ls::subMenu::NO CASE FOUND ', C, payload)
      return {...state}
    }
  
  }//switch
}

/* 
I think join left might as well have its own thing this is not really abstracting anything just making it hard to read 
youd just end up with if else of every new case.
*/
function updateDependentStyle({enabled, key, column, topLevelLinkItem}) {


  if(key==='joinLeft') {
    /* Put a negative margin equal to the the column gap */
    if(enabled) {
      if(!column?.style?.Column?.marginLeft) {

        if(!column?.style?.Column) column.style.Column = {};

        column.style.Column.marginLeft = `-${topLevelLinkItem.list.style.ColumnContainer.columnGap}`

      }
    } else {
      /* Remove the negative margin  */
      delete column.style.Column.marginLeft;
      column.styleOptions.joinLeft = {
        enabled: false,
      }
    }
  }

}




