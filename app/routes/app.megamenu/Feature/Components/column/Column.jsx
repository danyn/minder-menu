import {
  /* State */
  useLocalState,
  useDerivedState,
  classNames,
    /* D&D library */
  Droppable,
  Draggable,
  dropTypes,
  /* Feature Components */
  DraggableLinkItem,
  DragHandle,
  EditColumn,
  // AddLinkItem,
  // DeleteColumn,
  DragHandleMinor,
  /* Global UI Components */

} from '../../FEATURE_INDEX.js';


export function Column({column, index}) {
  const id = column.id
  // console.log('Column::', {id, column, index})
  /* Hooks */ 
  const [state, dispatch] = useLocalState()
  const derivedState = useDerivedState()
  /* End Hooks */
  // const tll = derivedState.v.currentTopLevelLinkItem;

  const b = {
    isSelected: id === state.currentColumn.id && state.currentColumn.selected === true,
    containsCurrentLink: id === state.currentColumn.id && state.currentColumn.selected === false,
  }

  let columnClass = 'flex-column MegaMenu-Column '
  if (b.isSelected ) columnClass += ' MegaMenu-Column-Selected ' 
  if(b.containsCurrentLink) columnClass +=  ' MegaMenu-Column-hasLink '

  // let joinLeft = {}
  // if(column.styleOptions.joinLeft.enabled) {
  //   joinLeft.marginLeft = `-${tll.style.columnContainer.columnGap}`
  // }
  // console.log({joinLeft, v: column.styleOptions.joinLeft.enabled, column, tll})

  return (
<Draggable 
  draggableId={`ColumnGroupItem${id}`} 
  index={index}
>
  {(provided, snapshot) => (
  <div
    className={columnClass}
    ref={provided.innerRef}
    {...provided.draggableProps}
    style={{
      boxShadow: snapshot.isDragging ? '0px 10px 13px -7px #000000' : 'none',
      ...provided.draggableProps.style,
      ...column.style[classNames.column.item],
      // ...joinLeft
    }} 
  >

    <DragHandle selected={b.isSelected} provided={provided}/>

    <ColumnDroppable id={id} column={column}/>
    
    <EditColumn columnId={id} selected={b.isSelected} index={index}/>

  </div>

  )}

</Draggable>
  );
}

/*

style={ column.styleOptions.hasCustomSizing ? 
      {
        boxShadow: snapshot.isDragging ? '0px 10px 13px -7px #000000' : 'none',
        ...provided.draggableProps.style,
        ...column.style
      }
      :
      {
        boxShadow: snapshot.isDragging ? '0px 10px 13px -7px #000000' : 'none',
        ...provided.draggableProps.style,
        ...state.style.column
      }
    } 

*/


function ColumnDroppable({id, column}) {
  const [state, dispatch] = useLocalState();


  return (
<Droppable 
  droppableId={id}
  type={dropTypes.column}
>
  {
    (provided, snapshot) => {
      return (
// TODO use px in the column style easier because the style is consumed in more places than it gets set.
<div
  className='MegaMenu-Column-Droppable'
  {...provided.droppableProps}
  ref={provided.innerRef}
  style={{
    background: snapshot.isDraggingOver ? '#d4e5eb' : 'white',
  }}
>

  {
    column.items.map((item, index) => {

      return <DraggableLinkItem
        className='MegaMenu-Column-Droppable-Item'
        key={item.id} 
        item={item} 
        index={index} 
        isLinkActive={item.id === state.currentLinkItem.id}
        onClickLink={() => {
          // console.log('!!!!!!!!!!!!')
          dispatch({
            // type: 'subMenu',
            type: 'columnItems',
            payload: {
              type: 'selectCurrentLinkItem',
              payload: {id: item.id, columnId: id},
            }
          }
          )
        }}
        onClickEdit={()=>{
          // console.log('on click edit.....')
        }}
      />
    })
  }

  {provided.placeholder}
</div>

      )
    }
  }
</Droppable>

  );
  
}