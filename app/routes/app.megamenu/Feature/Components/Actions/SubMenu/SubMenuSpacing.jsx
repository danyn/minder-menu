
import {
  /* State */
  /* Feture Components */
  ColumnGap,
  SubMenuPadding,
  /* Global Components */
  ToggleGroup,
  /* Icons */
  MeasurementMinor,
  /* Utils */

} from '../../../FEATURE_INDEX.js';

export function SubMenuSpacing() {
  return (
<div className="MegaMenu-SubMenuSpacing NestedGroup">
  <div className="MegaMenu-SubMenuSpacing">
  <h2 className="flex flex-center ToggleGroupSection-Item-Title">Spacing</h2>
    <div className='sidebar-input'>
      <ColumnGap/>
      <SubMenuPadding/>
    </div>
  </div>  
</div>  
  )
}

