import {
  /* State */
  useLocalState,
  useDerivedState,
  classNames,
  /* Global Components */
  RangeSlider,
  /* Icons */

  /* Utils */
  getPxFromNumber,
  getNumberFromPx,
} from '../../__index';


export function SubMenuPadding() {
  const dispatch = useLocalState('dispatch')
  const derivedState = useDerivedState()

  const dispatchSubModule = 'subMenu'
  const dispatchCase = 'subMenuStyle'
  const selector = classNames.column.container
  const target = derivedState?.v?.subMenu?.style?.[selector]

  if(!target) return null;

  

  return (
<div className="MegaMenu-SubMenuPadding">
  <RangeSlider
    output
    label='Padding top'
    min={0}
    max={100}
    value={getNumberFromPx(target.paddingTop)}
    onChange={(v) => {
      dispatch({
        //wrong
        type: dispatchSubModule,
        payload: {
          type: dispatchCase,
          data: {
            selector,
            declaration: {paddingTop: getPxFromNumber(v)}
          },
        },
      })
    }}
  />
  <RangeSlider
    output
    label='Padding bottom'
    min={0}
    max={100}
    value={getNumberFromPx(target.paddingBottom)}
    onChange={(v)=>{
      dispatch({
        type: dispatchSubModule,
        payload: {
          type: dispatchCase,
          data: {
            selector,
            declaration: {paddingBottom: getPxFromNumber(v)}
          },
        },
      })
    }}
  />
  <RangeSlider
    output
    label='Padding right'
    min={0}
    max={250}
    value={ getNumberFromPx(target.paddingRight) }
    onChange={(v)=>{
      dispatch({
        type: dispatchSubModule,
        payload: {
          type: dispatchCase,
          data: {
            selector,
            declaration: {paddingRight: getPxFromNumber(v)}
          },
        },
      })
    }}
  />
  <RangeSlider
    output
    label='Padding left'
    min={0}
    max={250}
    value={getNumberFromPx(target.paddingLeft)}
    onChange={(v)=>{
      dispatch({
        type: dispatchSubModule,
        payload: {
          type: dispatchCase,
          data: {
            selector,
            declaration: {paddingLeft: getPxFromNumber(v)}
          },
        },
      })
    }}
  />
</div>
  )
}