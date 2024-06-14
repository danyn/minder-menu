import {

  /* State */

  useLocalState,
  useDerivedState,

  /* Components */
  TopLevelLinkItemStyle,
  // DropDownMenusSettings,
  DropDownMenuGlobalSettings,
  ImageBlockGlobalSettings,
  ToggleGroupSection,

  /* Icons */
  GlobeMajor,


} from '../../../FEATURE_INDEX.js';



/**
 * A mix of controls for global styles
 * @returns JSX
 */
export function GlobalSettings() {
  const state = useLocalState('state');
  const derivedState = useDerivedState();
 

  return (
<div  className="MegaMenu-GlobalSettings" >
  <ToggleGroupSection 
    Icon={GlobeMajor}
    background={true}
    title='Styles'
    border={true}
  >
    <TopLevelLinkItemStyle/>
    <DropDownMenuGlobalSettings/>
    <ImageBlockGlobalSettings/>
  </ToggleGroupSection>
</div>
  );
}


