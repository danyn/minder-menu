import {
  /* State */
  useLocalState,
  useDerivedState,
  /* Global Components */
  Action,
  // RadioButton,
  // ToggleGroup,

  /* Icons */
  DockSideMajor,
  // MeasurementMinor,
  
} from '../../__index';

export function JoinLeft() {
  const dispatch = useLocalState('dispatch')
  const derivedState = useDerivedState()

  const target = derivedState.v.currentColumn;
  const enabled = target.styleOptions.joinLeft.enabled


  return (
<div className="MegaMenu-JoinLeft">
  <Action
    Icon={DockSideMajor}
    text='Join left'
    padded={true} 
    onClick={()=>{
      dispatch({
        type: 'subMenu',
        payload: {
          type: 'toggleStyleOption',
          data: {
            key: 'joinLeft',
            enabled: !enabled,
            hasDependent: true,
          }
        }
      })
    }}
    iconStyle={enabled ? {color: '#a2ff8b'} : {}}
    // textStyle
    // iconProps
    //padded
  />
</div>
  );
}