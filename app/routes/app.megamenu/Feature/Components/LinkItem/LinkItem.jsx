import { defaultState } from '../__LocalState/__defaultState.js';
import {
  useLocalState,
  useDerivedState,
  AddColumn,
  classNames,
  /* Icons */
  DragHandleMinor,
  AddMajor,
  EditMajor,
  AddNoteMajor,

} from '../../FEATURE_INDEX.js';


export function LinkItem ({
  item, 
  isLinkActive, 
  onClickLink, 
  onClickEdit, 
  dragHandleProps,
}) {

  const state = useLocalState('state');
  const derivedState = useDerivedState();


  let linkItemStyle = {}
  if(derivedState.v.subMenu?.styleOptions[classNames.link.item]?.useCustomStyle ) {
    linkItemStyle = derivedState.v.subMenu.style[classNames.link.item]
  } else {
    linkItemStyle = state.style[classNames.link.item] 
  }

  return (
<div 
  className={`MegaMenu-LinkItem MegaMenu-MenuItem ${isLinkActive ? ' MegaMenu-LinkItem-Active MegaMenu-MenuItem-Active ' : ' '}`}
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
