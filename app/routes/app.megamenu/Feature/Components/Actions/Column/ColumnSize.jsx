import { useState } from 'react';

import {

  /*  State */ 
  useLocalState,
  useDerivedState,
  classNames,
  /* Feature Components */
  JoinLeft,

  /* Global Components */ 
  Action,
  RangeSlider,
  Checkbox,
  ToggleGroup,

  /* Icons */
  MeasurementMinor,

  /* Utils */
  getPercentFromNumber,
  getNumberFromPercent,
  
} from  '../../__index.js';


export function ColumnSize() {
  const derivedState = useDerivedState()

  if(!derivedState.b.currentColumn) return <></>

  return (
<div className="MegaMenu-ColumSize">
  <ToggleGroup text='Layout' icon={MeasurementMinor} isOpened={true} shouldToggle={false} >
  <div className='sidebar-input-group'>
    <ColumnSizeSlider/>
  </div>
  <div  className='sidebar-input-group'>
    <JoinLeft/>
  </div>
  </ToggleGroup>
</div>
  )
}

export function ColumnSizeSlider() {
  const dispatch = useLocalState('dispatch');
  const derivedState = useDerivedState()
  const column = derivedState.v.currentColumn
  return (
<>
<Checkbox
  labelClassName='sidebar-input'
  label='Column width'
  checked={column.styleOptions?.customWidth?.enabled}
  onChange={(bool) => {
    dispatch({
      type: 'subMenu',
      payload: {
        type: 'toggleColumnWidth',
        data: {enabled:  bool}
      }
    })
  }}
/>
{
column.styleOptions?.customWidth?.enabled &&
<div className='sidebar-input'>
  <RangeSlider
    output
    label='Width'
    min={5}
    max={100}
    value={getNumberFromPercent(column.style[classNames.column.item].flexBasis)}
    onChange={(value)=>{
      dispatch({
        type: 'subMenu',
        payload: {
          type: 'columnStyle',
          data: {
            selector: classNames.column.item,
            declaration: {flexBasis: getPercentFromNumber(value)},
          },
        },
      })
    }}
  />
</div>
}
</>    
  );
}






