
import {
  /* State */
  useLocalState,
  useDerivedState,
  classNames,
  /* Global Components */
  RangeSlider,
  /* Icons */
  MeasurementMinor,
  /* Utils */
  getPxFromNumber,
  getNumberFromPx,
} from '../../../FEATURE_INDEX.js';

export function ColumnGap() {
  const [state, dispatch ]= useLocalState()
  const derivedState = useDerivedState()

  const target = derivedState.v.currentTopLevelLinkItem?.list?.style

  if(!target) return null;

  return (
<div className="MegaMenu-ColumnGap">
      <RangeSlider
        label='Gutter'
        min={0}
        max={50}
        // derivedState.currentTopLevelLinkItem.style.columnContainer.rules.columnGap
        value={getNumberFromPx(target[classNames.column.container].columnGap)}
        onChange={(v)=>{
          dispatch({
            type: 'subMenu',
            payload: {
              type: 'subMenuStyle',
              data: {
                selector: classNames.column.container,
                declaration: {columnGap: getPxFromNumber(v)},
                hasDependent: 'joinLeft',
              },
            },
          })
        }}
      />
    
</div>
  )
}

