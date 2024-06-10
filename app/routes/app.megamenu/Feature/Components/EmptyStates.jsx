import {
  useDerivedState,
  imageUrl,
} from '../FEATURE_INDEX.js'

export function EmptyStates() {
  const derivedState = useDerivedState();
  return (
    <>
      {/* derivedState.b.topLevelLinksEmpty */}
      <FirstEmptyState isEmpty={true}/>
    </>
  )
}

function FirstEmptyState({isEmpty}) {

  if(!isEmpty) return <></>

  return (
    <div className="MegaMenu-FirstEmptyState flex-center-column">
      <div className="MegaMenu-FirstEmptyState-Text">
        {/* Start by adding links */}
      </div>
      <div className="MegaMenu-FirstEmptyState-Image flex-center"  > 
        <img src={imageUrl.appIcon} /> 
      </div> 
    </div>
  )
}

function SecondEmptyState({topLevelLinksHasItems, currentTopLevelLinkItemHasColumns}) {

  if(topLevelLinksHasItems && !currentTopLevelLinkItemHasColumns) return (

    <div className="MegaMenu-FirstEmptyState flex-center-column">
      <div className="MegaMenu-FirstEmptyState-Text">
        Do you need a dropdown menu?
      </div>
      <div 
        className=" flex-center Icon"
        style={{
          maxWidth:'400px'
          // width: '400px',
          // background: 'green',
          // color: 'white',
          // borderRadius: '5%',
          // padding: '15px',
        }}  
      > 
        <img src='/dropdown.png' style={{width: '100%'}}/>
      </div> 
    </div>
  );
  return <></>
}


function ThirdEmptyState({ derivedState }) {

  const showEmptyState = derivedState.v.columnCount === 1 
  && derivedState.b.currentColumn === false 
  && derivedState.v.currentTopLevelLinkItem?.list?.items[0]?.list?.items?.length === 0;
  //TODO check safety of .length for this
  if(showEmptyState) return (

    <div className="MegaMenu-ThirdEmptyState flex-center-column">
      <div className="MegaMenu-ThirdEmptyState-Text">

        <div className="text-blue-500">
          <span className="tick Icon"><TickMinor/></span>
          Continue adding columns  <br/>
          
          <div className="flex flex-center ">
            <div>
              <span className="tick Icon"><TickMinor/></span>
              When you're done select a column by clicking its edit icon
              <span
              className="Action-Icon Icon AppIcon"
              style={{backgroundColor:'grey', 
                display: 'inline-flex', 
                width: '22px', 
                height: '22px',
                marginLeft:'6px',
                marginRight: '6px',
                }}
            >
              <EditMajor />
            </span>
              to add links, images, and adjust the column layout using the left sidebar
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
  return <></>
}


/*

  <FirstEmptyState isEmpty={derivedState.b.topLevelLinksEmpty}/>
  <SecondEmptyState 
    topLevelLinksHasItems={derivedState.b.topLevelLinksHasItems}
    currentTopLevelLinkItemHasColumns={derivedState.b.currentTopLevelLinkItemHasColumns}
  />
  <ThirdEmptyState derivedState={derivedState}/>

*/ 