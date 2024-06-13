
import {
  /* State */
  useLocalState,
  useDerivedState,
  classNames,
  /* Global Components */
  RangeSlider,
  ToggleGroup,
  ToggleGroupSection,
  Checkbox,
  /* Icons */
  MeasurementMinor,
  /* Utils */
  getPxFromNumber,
  getNumberFromPx,
} from '../../__index';




export function LinkItemGlobalStyle( ) {

  const [state, dispatch ]= useLocalState()
  const derivedState = useDerivedState()

  const target = state.style[classNames.link.item] 

  return (

<div className="MegaMenu-LinkItemStyle">
    <div className="ToggleGroupSection-Item">
      <h2 className="flex flex-center ToggleGroupSection-Item-Title ">Links</h2>
      <div className="sidebar-input">
        <InputSliders  subModule='settings' type='styleGlobal' target={target} dispatch={dispatch}/>
      </div>
    </div>
</div>

  );
}



export function LinkItemCurrentSubMenuStyle() {

  const [state, dispatch ]= useLocalState()
  const derivedState = useDerivedState()

  const target = derivedState.v.subMenu

  if(!target) return null;

  const hasCutomStyle = target.styleOptions[classNames.link.item].useCustomStyle;
  const _target = target.style[classNames.link.item];

  return (
<div className="MegaMenu-LinkItemStyle NestedGroup ">

  <h2 className="flex flex-center ToggleGroupSection-Item-Title ">Links</h2>
    <div className="sidebar-input">
      <Checkbox
        label={hasCutomStyle ? 'Style active': 'Apply Style'}
        checked={hasCutomStyle}
        onChange={(bool) => {
          dispatch({
            type: 'subMenu',
            payload: {
              type: 'subMenuStyleOptions',
              data: {
                selector: classNames.link.item,
                option: {useCustomStyle: bool},
              },
            },
          })
        }}
      />
    
    {
    ( hasCutomStyle ) &&
      <InputSliders  subModule='subMenu' type='subMenuStyle' target={_target} dispatch={dispatch}/>
    }
    </div>
</div>
  )
}



/* INPUTS */ 
function InputSliders ({subModule, type, target, dispatch}) {
  
  return (
<>
<RangeSlider
  label='Font size'
  min={9}
  max={32}
  value={getNumberFromPx(target.fontSize)}
  onChange={(v)=>{
    dispatch({
      type: subModule,
      payload: {
        type,
        data: {
          selector: classNames.link.item,
          declaration: {fontSize: getPxFromNumber(v)},
        },
      },
    })
  }}
/>

<RangeSlider
  label='Font weight'
  min={100}
  max={800}
  step={100}
  value={target.fontWeight}
  onChange={(v)=>{
    dispatch({
      type: subModule,
      payload: {
        type,
        data: {
          selector: classNames.link.item,
          declaration: {fontWeight: v},
        },
      },
    })
  }}
/>
<RangeSlider
  label='Margin bottom'
  min={0}
  max={50}
  // derivedState.currentTopLevelLinkItem.style.columnContainer.rules.columnGap
  value={getNumberFromPx(target.marginBottom)}
  onChange={(v)=>{
    dispatch({
      type: subModule,
      payload: {
        type,
        data: {
          selector: classNames.link.item,
          declaration: {marginBottom: getPxFromNumber(v)},
        },
      },
    })
  }}
/>
</>
  )
}


/*

 <RangeSlider
        label='Font size'
        min={9}
        max={32}
        value={getNumberFromPx(target.style.linkItem.fontSize)}
        onChange={(v)=>{
          dispatch({
            type: 'settings',
            payload: {
              type,
              data: {
                selector: 'linkItem',
                declaration: {fontSize: getPxFromNumber(v)},
              },
            },
          })
        }}
      />

      <RangeSlider
        label='Font weight'
        min={100}
        max={800}
        step={100}
        value={target.style.linkItem.fontWeight}
        onChange={(v)=>{
          dispatch({
            type: 'settings',
            payload: {
              type,
              data: {
                selector: 'linkItem',
                declaration: {fontWeight: v},
              },
            },
          })
        }}
      />
      <RangeSlider
        label='Margin bottom'
        min={0}
        max={50}
        // derivedState.currentTopLevelLinkItem.style.columnContainer.rules.columnGap
        value={getNumberFromPx(target.style.linkItem.marginBottom)}
        onChange={(v)=>{
          dispatch({
            type: 'settings',
            payload: {
              type,
              data: {
                selector: 'linkItem',
                declaration: {marginBottom: getPxFromNumber(v)},
              },
            },
          })
        }}
      />

*/