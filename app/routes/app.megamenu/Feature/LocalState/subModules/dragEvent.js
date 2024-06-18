import {
  C,
  getTopLevelLinks,
} from '../../FEATURE_INDEX.js';

import _ from 'lodash';



export function dragEvent (state, payload) {
  const { type, data } = payload;
  const { dragEndResult } = data;

  /* Don't move anything  */
  if(!dragEndResult.destination) return {...state};

  /* Make a copy to allow pass by reference and mutating same array */
  const topLevelLinkItems = _.cloneDeep(getTopLevelLinks(state));


  // console.log('topLevelLinkItems', topLevelLinkItems);

  switch (type) {

    case 'moveLinkItem': {
      console.info('%c ls::dragEvent::moveLinkItem' , C);

      /* Use pass by reference */
      const topLevelLinkItem = getTopLevelLink(topLevelLinkItems, state.currentTopLevelLinkItem.id)
      
      handleMovingNestedItems({
        dragEndResult: data.dragEndResult,
        arrayOfDroppables: topLevelLinkItem.list.items, /* The array of columns under a top level link */
      });

      return {
        ...state,
        currentColumn: {id: data.dragEndResult.destination.droppableId, selected: false},
        data: newData(state, topLevelLinkItems),
      }
    }


    case 'moveColumn': {
      console.info('%c ls::dragEvent::moveColumn', C);

      /* Get a reference to a top level link that owned the columns*/
  
      const topLevelLinkItem = getTopLevelLink(topLevelLinkItems, state.currentTopLevelLinkItem.id)

      handleMovingUnNestedItems({
        dragEndResult: data.dragEndResult,
        droppable: topLevelLinkItem.list.items, /* The array of columns under a top level link */
      });

      return {
        ...state,
        currentColumn: {
          ...state.currentColumn,
          index: dragEndResult.destination.index,
        },
        data: newData(state, topLevelLinkItems)
      }

    }

    case 'moveTopLevelLink': {
      console.info('%c ls::dragEvent::moveTopLevelLink', C);

      handleMovingUnNestedItems({
        dragEndResult,
        droppable: topLevelLinkItems,
      });

      return {
        ...state,
        data: newData(state, topLevelLinkItems)
      }

    }

    case 'moveImageBlockUserInput' : {
      console.info('%c ls::dragEvent::moveImageBlockUserInput', C);
      const items = [...state.modals.AddImageBlockModal.items];
      handleMovingUnNestedItems({
        dragEndResult,
        droppable: items,
      })

      return {
        ...state,
        modals: {
          ...state.modals,
          AddImageBlockModal: {
            ...state.modals.AddImageBlockModal,
            items,
          },
        },
      }
    }

    /* Don't crash the app */
    default: {
      console.info('%c ls::NO CASE FOUND ', C, payload)
      return {...state}
    }

  }
}


/**
 * Mutate array in place move items from one nested array to another
 * @param {*} param0 
 */
function handleMovingNestedItems({arrayOfDroppables, dragEndResult}) {
  
  const {source, destination} = dragEndResult; //draggableId

  /* Leverage pass by reference */
  
  const _sourceDroppable = _.find(arrayOfDroppables, function(o){ 
    return o.list.id === source.droppableId
  });
  const _destinationDroppable = _.find(arrayOfDroppables, function(o)  { 
    return o.list.id === destination.droppableId
  });
  
  // console.log('_sourceDroppable: ', _sourceDroppable)
  // console.log('_destinationDroppable: ', _destinationDroppable)

  // console.log(
  //   'arrayOfDroppables: ', arrayOfDroppables, 
  //   'source: ', source,
  //   'destination: ', destination,
  //   '_sourceDroppable: ', _sourceDroppable,
  //   '_destinationDroppable: ', _destinationDroppable,

  // )

  moveItemBetweenArrays({ 
    arr1: _sourceDroppable.list.items, 
    arr2: _destinationDroppable.list.items, 
    fromIndex: source.index, 
    toIndex: destination.index,
  });


}



/**
  droppable:
  [
    {
      xyz,
      ...
    }
  ]
 */
/**
 * Mutates the droppable array using pass by reference to reorder the array
 * @param {*} param0 
 * @returns 
 */
function handleMovingUnNestedItems({droppable, dragEndResult}) {
  
  const {source, destination} = dragEndResult; //draggableId

  /* Leverage pass by reference */
  moveItemBetweenArrays({ 
    arr1: droppable,
    arr2: droppable,
    fromIndex: source.index, 
    toIndex: destination.index,
  });

}



/**
 * move item from one array to another - Mutates both input arrays in place
 * @param {*} param0 
 */
function moveItemBetweenArrays({
  arr1,
  arr2,
  fromIndex,
  toIndex,
}) {
  /* Remove from arr1 */
  const [movedItem] = arr1.splice(fromIndex, 1);
  /* Place on arr2  */
  arr2.splice(toIndex, 0, movedItem)
}

/**
 * Return the same state.data with replaced list items for topLevelLinkItems
 * @param {*} state 
 * @param {*} topLevelLinkItems 
 * @returns 
 */
function newData(state,topLevelLinkItems){
  return {
    ...state.data, 
      list: {
        ...state.data.list,
        items: topLevelLinkItems,
      },
  }
}

function getTopLevelLink(topLevelLinkItems, id) {
  return _.find(topLevelLinkItems , ['id', id]);
}
