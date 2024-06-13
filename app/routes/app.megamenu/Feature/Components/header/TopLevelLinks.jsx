import {
  /* State */
  useLocalState,
  useDerivedState,
  /* D&D */
  Droppable,
  dropTypes,
  DraggableLinkItem,
  /* Feature Components */
  AddTopLevelLinkItem,
  /* Global Components */

  DragHandleMinor,
  EditMajor,
  // LinkItem,
  
} from '../__index'

export function TopLevelLinks() {
  const [state, dispatch] = useLocalState()
  const derivedState = useDerivedState()

  // const b = {
  //   hasTopLevelLinkItemsArray: Array.isArray(state?.topLevelLinkItems?.items),
  //   hasTopLevelLinks: state?.topLevelLinkItems?.items?.length !== 0,
  // }

  return (
<div className="MegaMenu-TopLevelLinks-Container flex-center-y">
<Droppable
  droppableId='TopLevelLinksDropable'
  type={dropTypes.topLevelLinks}
  direction='horizontal'
>
{
  (provided, snapshot) => {
    return (

  <div 
    className="MegaMenu-TopLevelLinks"
    ref={provided.innerRef}
    {...provided.droppableProps}
    style={{
      background: snapshot.isDraggingOver ? '#eafaff' : 'transparent',
    }}
  >

  {

// b.hasTopLevelLinkItemsArray && b.hasTopLevelLinks &&
derivedState.b.topLevelLinksArray &&
// state.topLevelLinkItems.items
  derivedState.v.topLevelLinks.map((item, index) => {

    return <DraggableLinkItem 
    key={item.id} 
    item={item} 
    index={index} 
    isLinkActive={item.id === state.currentTopLevelLinkItem.id}
    className='MegaMenu-TopLevelLinks-Item'
    onClickLink={() => {
      dispatch({ 
        type: 'topLevelLink', 
        payload: {
          type:'selectTopLevelAnchor',
          data:{id: item.id, text: item.text}},
        })
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
<AddTopLevelLinkItem emptyState={derivedState.b.topLevelLinksEmpty}/>
</div>
  );
}
