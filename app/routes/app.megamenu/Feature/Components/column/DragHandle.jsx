import {
  DragHandleMinor,
} from '../__index'


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