import {

  /* State */
  useLocalState,
  useDerivedState,

  /* Feature Components */
  EditTopLevelLink,
  SidebarColumnTitle,
  EditColumnItem,
  DeleteColumn,
  AddLinkItem,
  GlobalSettings,



  ColumnSize,
  
  SubmenuSettings,
  ImageBlockSettings,
  Save,
  SaveCluster,

  /* Utils */
  _find,

} from '../../FEATURE_INDEX.js';

export function LeftSideBar() {
  const state = useLocalState('state');
  const derivedState = useDerivedState();


  return (
<div 
  className="MegaMenu-LeftSideBar"
  style={{
    borderRight: '1px solid grey',
    // borderRight: derivedState.b.currentTopLevelLinkItem ? '1px solid grey' : 'none'
  }}
  >
  
  <SaveCluster/>
{/* 
  ********** TopLevelLinkActions *************
*/}
  
  <div
    className="MegaMenu-TopLevelLinkActions"
    style={{
      display: derivedState.b.currentTopLevelLinkItem ? 'block' : 'none',
      border: '2px solid #3785c5',
      borderRadius: '3px',
      // paddingBottom: '5px',
    }}
  >

    <EditTopLevelLink linkItem={derivedState.v.currentTopLevelLinkItem}/>




    {/* 
    ********** ColumnActions *************
    */}
    
    <div 
      className="MegaMenu-LeftSideBar-ColumnActions"
      style={{
        display: derivedState.b.currentColumnSelected ? 'block' : 'none'
      }}
    >

      <SidebarColumnTitle />

      <ColumnSize/>
      <DeleteColumn show={derivedState.b.currentColumnSelected}/>

      {/* <AddLinkItem/> */}
      

    </div>



    <div 
      className='MegaMenu-LinkActions' 
      style={{
        display: derivedState.b.currentColumnLink ? 'block' : 'none',
      }}
    >
      <EditColumnItem linkItem={derivedState.v.currentColumnLink} />
    </div>

  </div>
  <SubmenuSettings/>
  <GlobalSettings/>
</div>
  );
}


/**

  TODO double check that the derived state is applying the correct values

  const currentTopLevelLink = undefined;
  const currentColumn = undefined;
  const currentColumnLink = undefined;


  const b = {
    topLevelLinkActions: Boolean(currentTopLevelLink),
    columnLinkActions: Boolean(currentColumnLink),
    currentColumn: state.currentColumn.selected === true,
    noWrap: currentColumnLink?.style?.whiteSpace === 'nowrap',
  }

 */
