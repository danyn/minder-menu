
import {
  /* State */
  // useLocalState,
  useDerivedState,
  /* Feature Components */
  ToggleGroupSection,
  SubMenuSpacing,
  LinkItemCurrentSubMenuStyle,
  DropDownType,
    /* Icons */
  // GlobeMajor,
  MeasurementMinor,
  Columns2Major,
  ColumnWithTextMajor,
  ThreeColumns,
} from '../../../FEATURE_INDEX.js';

export function SubmenuSettings() {
  const derivedState = useDerivedState();
  
  if(!derivedState?.v?.subMenu) return null;

  return (
<div className="MegaMenu-SubmenuSettings">
  <ToggleGroupSection
    title='Submenu'
    Icon={ThreeColumns}
    background={true}
    border={true}
  >
    <DropDownType/>
    <SubMenuSpacing/>
    <LinkItemCurrentSubMenuStyle />
  </ToggleGroupSection>
</div>   
  )
}