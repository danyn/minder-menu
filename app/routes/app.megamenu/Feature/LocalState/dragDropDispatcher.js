/**
 * Dispatch drag end results to the local state reducer
 * @param {*} param0 
 */
export function dragDropDispatcher({
  dragEndResult,
  dispatch,
}) {

  switch (dragEndResult.type) {
    
    case dropTypes.column: {
      dispatch({
        type: 'dragEvent',
        payload: {
          type: 'moveLinkItem',
          data: {dragEndResult}
        }
      });
      break;
    }

    case dropTypes.columnGroup: {
      // console.log('COLUMN_GROUP', dragEndResult)
      dispatch({
        type: 'dragEvent',
        payload:{
          type: 'moveColumn',
          data: {dragEndResult},
        }
      });
      break;
    }


    case dropTypes.topLevelLinks: {
      // console.log('dropTypes.topLevelLinks', dragEndResult)
      dispatch({
        type: 'dragEvent',
        payload:{
          type: 'moveTopLevelLink',
          data: {dragEndResult},
        }
      });
      break;
    }

    default: {
      console.warn('DNDreducer: no set type on the the droppable')
    }

  }

}

export const dropTypes = {
  /* The columns belonging to the top level link item */
  columnGroup: 'COLUMN_GROUP',
  /* A column in a column group */
  column: 'COLUMN',
  /* The top level header link dropdown parents */
  topLevelLinks: 'TOP_LEVEL_LINKS',
  /* Image block content */
  imageBlock: 'IMAGE_BLOCK',
}