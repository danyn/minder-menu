
import {
  /* State */
  useLocalState,
  useDerivedState,
  classNames,
  /* Global Components */
  ToggleGroupSection,
  RangeSlider,
  ToggleGroup,
  Checkbox,
  /* Icons */
  MeasurementMinor,
  /* Utils */
  getPxFromNumber,
  getNumberFromPx,
} from '../../__index';

/**
 * type is 'styleTopLevelLinkItem' | 'styleGlobal'
 * @param {*} param0 
 * @returns 
 */
export function TopLevelLinkItemStyle() {

  const [state, dispatch ]= useLocalState()
  
  const target = state.style[classNames.topLevelLink.item];

  return (
<div className="MegaMenu-TopLevelLinkItemStyle">
  <ToggleGroupSection 
    title='Top level links'
  >
    <div className="sidebar-input">
      <InputSliders dispatch={dispatch} target={target}/>
    </div>
  </ToggleGroupSection>
</div>
  )
}


const type = 'styleGlobal';
const selector = classNames.topLevelLink.item;

function InputSliders ({target, dispatch}) {
  // console.log('TopLevelLinkItemStyle::InputSliders', {target})
  return (
<>
<RangeSlider
  label='Font size'
  min={9}
  max={32}
  value={getNumberFromPx(target.fontSize)}
  onChange={(v) => {
    dispatch({
      type: 'settings',
      payload: {
        type,
        data: {
          selector,
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
      type: 'settings',
      payload: {
        type,
        data: {
          selector,
          declaration: {fontWeight: v},
        },
      },
    })
  }}
/>
<RangeSlider
  label='Margin right'
  min={0}
  max={50}
  // derivedState.currentTopLevelLinkItem.style.columnContainer.rules.columnGap
  value={getNumberFromPx(target.marginRight)}
  onChange={(v)=>{
    dispatch({
      type: 'settings',
      payload: {
        type,
        data: {
          selector,
          declaration: {marginRight: getPxFromNumber(v)},
        },
      },
    })
  }}
/>
</>
  )
}


