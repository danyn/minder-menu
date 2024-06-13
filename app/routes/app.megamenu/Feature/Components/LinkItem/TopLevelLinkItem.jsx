import { defaultState } from '../__LocalState/__defaultState.js';
import {
  useLocalState,
  useDerivedState,
  classNames,

  AddColumn,

  /* Icons */
  DragHandleMinor,
  AddMajor,
  EditMajor,
  AddNoteMajor,

} from '../__index.js';


export function TopLevelLinkItem ({
  item, 
  isLinkActive, 
  onClickLink, 
  dragHandleProps,
}) {

  const state = useLocalState('state');
  const derivedState = useDerivedState()

  const linkItemStyle = state.style[classNames.topLevelLink.item]

  return (
<div 
  className={`MegaMenu-TopLevelLinkItem MegaMenu-LinkItem  ${isLinkActive ? ' MegaMenu-LinkItem-Active ' : ' '}`}
>

  <a
    className={`MegaMenu-LinkItem-Anchor ${ isLinkActive ? 'MegaMenu-LinkItem-Anchor-Active' : ' ' } `}
    onClick={(e) =>{
      e.stopPropagation()
      onClickLink()
    }}
    style={item.styleOptions.hasCustomSizing ? item.style : linkItemStyle }
  >
    {item.child.text}
  </a>

  <div className='MegaMenu-LinkItem-DragHandle'>
    <div
      className="Icon"
      {...dragHandleProps}
    >
      <DragHandleMinor/>
    </div>
  </div>

</div>
  );
}
