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
} from '../__index.js'


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
