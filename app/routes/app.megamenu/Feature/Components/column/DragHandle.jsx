import {
  DragHandleMinor,
} from '../../FEATURE_INDEX.js';


export function DragHandle({provided, selected}) {
  return (
<div 
  {...provided.dragHandleProps}
  className={`MegaMenu-Column-DragHandle Icon ${!selected ? ' hide ' : ' '}`}
  style={{zIndex:'2'}}
>
  <DragHandleMinor/>
</div>
  )
}