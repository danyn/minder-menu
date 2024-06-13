import {
  /* State */
  useLocalState,
  useDerivedState,
  Droppable,
  dropTypes,
  /* Feature Components */
  Column,
  AddColumn,
  /* Utility */
  _find,
  classNames,
} from '../__index.js'

export function Columns() {

  const state = useLocalState('state')
  const derivedState = useDerivedState();

  const tll = derivedState.v.currentTopLevelLinkItem
  if(!tll) return null;

  const target = derivedState.v.subMenu
  const style = target?.style ? target.style[classNames.column.container] : { background: 'none'}
  // console.log('Columns', {target,})

  
  
  return (

<Droppable 
  droppableId="columnGroup" 
  type={dropTypes.columnGroup}
  direction = 'horizontal'
>
{ 
(provided, snapshot) => (
  <div 
    className='MegaMenu-Column-Container-Area'
    ref={provided.innerRef}
    {...provided.droppableProps} 
    // id='megaMenuColumns'
  >
    <div 
      className={`MegaMenu-Column-Container flex-columns flex-columns-${derivedState.v.columnCount}`}
      style={style}
    >
  
      {
        derivedState.b.currentTopLevelLinkItemHasColumns && derivedState.b.currentTopLevelLinkItemHasColumnsArray &&

        target.items
        .map((column, index) => <Column column={column.list} key={column.list.id} index={index}/>)
      }

      {provided.placeholder}

      <AddColumn emptyState={!derivedState.b.currentTopLevelLinkItemHasColumns }/>
  
    </div>
  </div>
  )}
</Droppable>
  )
}

/**

const currentTopLevelLinkItem =   _find(state.topLevelLinkItems.items , ['id', state.currentTopLevelLinkItem.id]);
  const b = {
    hasColumns: currentTopLevelLinkItem?.columns?.length > 0,
    hasColumnsArray: Array.isArray(currentTopLevelLinkItem?.columns),
    isFirstTopLevelLink: state?.topLevelLinkItems?.items?.length === 1,
  }

 */




