
import {
  /* D&D library */
  Draggable,
  LinkItem,
  TopLevelLinkItem,
  LinkItemImageBlock
} from  '../../FEATURE_INDEX.js';

export function DraggableLinkItem({
  item, 
  index,
  isLinkActive,
  onClickLink,
  onClickEdit,
  className,
  // state, 
  // dispatch,
}) {
  return (
<div>
<Draggable
  // key={item.id}
  draggableId={item.id}
  index={index}
>
  {
    (provided, snapshot) => {
      return (
        <div
          className={`MegaMenu-LinkItem-Draggable ${className} `}
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{
            userSelect: 'none',
            // backgroundColor: snapshot.isDragging ? '#ffffff78' : 'transparent',
            // padding: snapshot.isDragging ? '6px' : '0',
            ...provided.draggableProps.style,


          }}
        >
        {
        item.meta.type==='topLevel' &&
          <TopLevelLinkItem
            item={item}
            isLinkActive={isLinkActive}
            onClickLink={() => {onClickLink()}}
            dragHandleProps={provided.dragHandleProps}
          />
        }
        {
        (item.meta.type==='menuItem' && !item.meta.hasImageBlock ) &&
          <LinkItem
            item={item}
            isLinkActive={isLinkActive}
            onClickLink={() => {onClickLink()}}
            onClickEdit={() => {onClickEdit()}}
            dragHandleProps={provided.dragHandleProps}
          />
        }
        {
        (item.meta.type === 'imageBlock') &&
          <LinkItemImageBlock
            // blockContent={item.child.blockContent}
            isLinkActive={isLinkActive} // block content passing as link in state
            onClickLink={() => {onClickLink()}}
            blockContent={item}
            dragHandleProps={provided.dragHandleProps}
          />

        }
  
        </div>
      )
    }
  }
</Draggable>
</div>
  );
}