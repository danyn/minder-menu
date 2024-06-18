
import {
  /* D&D library */
  Draggable,
  DragHandleMinor,
} from  '../../../FEATURE_INDEX.js';

import styles from  './style.module.css';

export function DraggableItem({
  // itemData,
  children,
  index,
  id,
  // renderComponent,
  // isLinkActive,
  // onClickLink,
  // onClickEdit,
  className,
  // state, 
  // dispatch,
}) {
  return (
<div>
<Draggable
  // key={item.id}
  draggableId={id}
  index={index}
>
  {
    (provided, snapshot) => {
      return (
    <div
      className={styles.dragable}
      ref={provided.innerRef}
      {...provided.draggableProps}
      style={{
        userSelect: 'none',
        // backgroundColor: snapshot.isDragging ? '#ffffff78' : 'transparent',
        // padding: snapshot.isDragging ? '6px' : '0',
        ...provided.draggableProps.style,


      }}
    >    
      <div className="item">
        <DragHandle className={styles.dragHandle} provided={provided} />
        {children}
        {/* {renderComponent} */}
        {/* itemData={itemData} */}
      </div>
    </div>
    );
  }
}
</Draggable>
</div>
  );
}

function DragHandle({provided, selected=true, className}) {
  return (
<div 
  {...provided.dragHandleProps}
  className={className}
  style={{zIndex:'2'}}
>
  <DragHandleMinor/>
</div>
  )
}
