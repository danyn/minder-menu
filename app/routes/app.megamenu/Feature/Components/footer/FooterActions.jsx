import {
  /*State*/
  useLocalState,
  /* Feature Components */
  Preview,
  Save,
  
} from '../__index.js'

export function FooterActions() {
  /* Hooks */
  const [state, dispatch] = useLocalState()
  /* End Hooks */

  return (
<div
  className="MegaMenu-FooterActions"
  style={ state.modals.RightSideBar.isOpen ? {right: '230px'} : {} }
>

  <Preview />
  {/* <Save/> */}

</div>
  );
}


