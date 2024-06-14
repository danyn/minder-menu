import {
  useLocalState,
  ActionTitle,
  Columns2Major,
  
} from '../../../FEATURE_INDEX.js';

// import _ from 'lodash';


export function SidebarColumnTitle() {
  const [state, dispatch] = useLocalState()
  let n = false;
  if(typeof state.currentColumn.index === 'number') {
    n = state.currentColumn.index + 1
  }
  
// Boolean(state?.currentColumn?.selected)
  return (
    <div className="MegaMenu-LeftSideBar-Title SidebarColumnTitle ">
      Column {n && n}
    </div>
  );

}