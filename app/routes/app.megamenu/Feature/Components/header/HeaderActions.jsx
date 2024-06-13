import {
  useLocalState,
  TopLevelLinks,
  DeleteMajor,
  LinkMinor,
  ViewMajor,
  AddNoteMajor,
} from '../../FEATURE_INDEX.js';


export function HeaderActions() {
  /* Hooks */ 
  const [state, dispatch] = useLocalState()
  const b = {
    showPreview: true,
    showAddTopLevelLinkItem: true,
    showAddColumn: state.currentTopLevelLinkItem?.id,
    // showPreview: Boolean(state?.currentColumn?.id),
    // showAddTopLevelLinkItem: !Boolean(state?.currentColumn?.id),
  }
  /* End Hooks */ 
  return (
<div className='MegaMenu-HeaderActions'>

  <TopLevelLinks/>

</div> 
  );
}





