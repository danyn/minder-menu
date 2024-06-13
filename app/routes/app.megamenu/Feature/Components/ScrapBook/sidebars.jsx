import {
  /* State */
  useLocalState,
  /* Feature Components */
  GlobalSettingsToggle,
  SubMenuSpacing,


  LinkItemGlobalStyle,
  LinkItemCurrentSubMenuStyle,


  TopLevelLinkItemStyle,
  DropDownType,
  /* Global Components */
  Action,
  ToggleGroup,
    /* Icons */
  GlobeMajor,
  MeasurementMinor,
} from '../../FEATURE_INDEX.js';


export function RightSideBar(){

  const [state, dispatch] = useLocalState()
  
  return (
/* JSX template */ 
<div className="MegaMenu-RightSideBar">

  {/* Header */}

  <div className="MegaMenu-RightSideBar-Toggle">
    <GlobalSettingsToggle/>
  </div>
  <div 
    className="MegaMenu-RightSideBar-Content "
    style={ state.modals.RightSideBar.isOpen ?
      {
        display: 'block',
      } 
      :
      {
        display: 'none'
      }
    }
  >
    <div className="MegaMenu-RightSideBar-Content-Title">
      <span className="MegaMenu-RightSideBar-Content-Title-Icon Icon AppIcon">
        <GlobeMajor/>
      </span>
      <span className="MegaMenu-RightSideBar-Content-Title-Text flex-center-y">
        Settings
      </span>
    </div>

    {/* 
     * Inputs
    */}

    <div className="MegaMenu-RightSideBar-Content-Items">

      <MainMenuSettings/>
      <DropDownMenusSettings/>
      <CurrentDropdownMenuSettings/>

    </div>
    
  </div>
</div>

  )
}

function MainMenuSettings() {
  return (
<div className="MegaMenu-DropDownMenuSettings">
<ToggleGroup
  text='Main menu'
  icon={MeasurementMinor}
  contained={true}
>
    <TopLevelLinkItemStyle/>
    <p>spacing</p>
    
</ToggleGroup>
</div>   
  )
}



function DropDownMenusSettings() {
  return (
<div className="MegaMenu-DropDownMenusSettings">
  <ToggleGroup
    text='All dropdown menus'
    icon={MeasurementMinor}
    contained={true}
  >

    <LinkItemGlobalStyle />

  </ToggleGroup>
</div>   
  )
}


function CurrentDropdownMenuSettings() {
  return (
<div className="MegaMenu-DropDownMenuSettings">
  abc
<ToggleGroup
  text='A Current dropdown menu'
  icon={MeasurementMinor}
  contained={true}
>
    
  <SubMenuSpacing/>
  
  <LinkItemCurrentSubMenuStyle />
  
  <DropDownType/>
  

</ToggleGroup>
</div>   
  )
}





/*

Global settings
- Default Sizing: column, columnLinkItem,
- bg colors, borders, etc.

*/