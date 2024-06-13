import {
  
  ToggleGroupSection,
  LinkItemGlobalStyle,

} from '../../__index.js'
// DropDownMenusSettings
export function DropDownMenuGlobalSettings() {
  return (
<div className="MegaMenu-DropDownMenuGlobalSettings">
  <ToggleGroupSection
    title='All submenus'
  > 
    <LinkItemGlobalStyle />
  </ToggleGroupSection>
</div>   
  )
}