
import {
  /* State */
  useLocalState,
  useDerivedState,
  classNames,
  /* Global Components */
  RangeSlider,
  ToggleGroup,
  Checkbox,
  ColumnSizeSlider,
  /* Icons */
  MeasurementMinor,
  /* Utils */
  getPxFromNumber,
  getNumberFromPx,
  _find,
} from '../../../FEATURE_INDEX.js';


/**
 * 
 * @param {subModule = {'global' | 'imageBlock'}}  
 * @returns 
 */
export function ImageBlockStyle({subModule='global'} ) {

  const [state, dispatch ]= useLocalState()
  const derivedState = useDerivedState()

  const classNameTitle = classNames.imageBlock.title
  const classNameDescription = classNames.imageBlock.description
  const classNameCTA = classNames.imageBlock.Cta
  const type = 'style';

  let targetTitle, targetDescription, targetCTA, target;

  /* Style to global or to a specific Image Block  */ 
  if (subModule === 'global') {
    targetTitle = state.style[classNameTitle]; 
    targetDescription = state.style[classNameDescription]; 
    targetCTA = state.style[classNameCTA];
  } else if (subModule === 'imageBlock') {
    target = derivedState.v.currentColumnLink
    /* a column link with a list array is an image block, block content */
    if(!Array.isArray(target?.items)) {
      return null
      console.warn('image blocks is not an array');
    } 
    const items = target?.items 

    targetTitle = _find(items, {className:classNameTitle })?.style
    targetDescription = _find(items, {className:classNameDescription })?.style
    targetCTA = _find(items, {className:classNameCTA })?.style

    // console.log({
    //   target,
    //   items,
    //   targetTitle,
    //   targetDescription,
    //   targetCTA})
    
  } else {
    return null
  }

  const props = {
    dispatch,
    subModule,
    type,
    targetTitle,
    classNameTitle,
    targetDescription,
    classNameDescription,
    targetCTA,
    classNameCTA,
  }

  return (

<div className="MegaMenu-LinkItemStyle">
{ subModule === 'global' && <Groups {...props} /> }
{
  subModule === 'imageBlock' &&
  <>
    {/* toggle and possibly init */}
    <ColumnSizeSlider/>
    <Checkbox
        label={target?.hasStyleRules ? 'applied styles' : 'enable style'}
        checked={target?.hasStyleRules}
        onChange={(bool) => {
          dispatch({
            type: subModule,
            payload: {
              type: 'hasStyleRules',
              payload: {},
            },
          })
        }}
      />

  {
    target?.hasStyleRules && <Groups {...props} /> 
  }
  </>

}
</div>

  );
}

function Groups({
  dispatch,
  subModule,
  type,
  targetTitle,
  classNameTitle,
  targetDescription,
  classNameDescription,
  targetCTA,
  classNameCTA,
}) {
  return (
    <>
  <ToggleGroup
    icon={MeasurementMinor}
    text='Title'
  >
    <div className="sidebar-input">
      <InputSliders  
        subModule={subModule} 
        type={type} 
        target={targetTitle} 
        selector={classNameTitle} 
        dispatch={dispatch}
      />
    </div>
  </ToggleGroup>
  <ToggleGroup
    icon={MeasurementMinor}
    text='Description'
  >
    <div className="sidebar-input">
      <InputSliders  
        subModule={subModule} 
        type={type} 
        target={targetDescription} 
        selector={classNameDescription} 
        dispatch={dispatch}
      />
    </div>
  </ToggleGroup>
  <ToggleGroup
    icon={MeasurementMinor}
    text='Action'
  >
    <div className="sidebar-input">
      <InputSliders  
        subModule={subModule} 
        type={type} 
        target={targetCTA} 
        selector={classNameCTA} 
        dispatch={dispatch}
      />
    </div>
  </ToggleGroup>
</>
  )
}


/* INPUTS */ 
function InputSliders ({subModule, type, target, dispatch, selector}) {
  
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
        payload: {
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
      type: subModule,
      payload: {
        type,
        payload: {
          selector,
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
        payload: {
          selector,
          declaration: {marginBottom: getPxFromNumber(v)},
        },
      },
    })
  }}
/>
</>
  )
}

