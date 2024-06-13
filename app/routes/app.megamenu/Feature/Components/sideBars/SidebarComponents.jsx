import {
  /* State */
  useLocalState,
  /* Feature Components */
  // GlobalSettingsToggle,
  
  SubMenuSpacing,


  LinkItemGlobalStyle,
  LinkItemCurrentSubMenuStyle,

  ImageBlockStyle,

  TopLevelLinkItemStyle,
  DropDownType,
  /* Global Components */
  // Action,
  ToggleGroup,
    /* Icons */
  // GlobeMajor,
  MeasurementMinor,
} from '../../FEATURE_INDEX.js';


export function ImageBlockSettings() {
  return (
<div className="MegaMenu-ImageBlockSettings">
<ToggleGroup
  text='Image blocks'
  icon={MeasurementMinor}
  contained={true}
>
  <ImageBlockStyle/> 
</ToggleGroup>
</div>   
  )
}
