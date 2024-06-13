
import {
  /* State */
  useLocalState,
  useDerivedState,
  /* Global Components */
  RadioButton,
  ToggleGroup,

  /* Icons */
  MeasurementMinor,
  
} from '../../__index';

export function DropDownType() {
  const dispatch = useLocalState('dispatch')
  const derivedState = useDerivedState()

  const target = derivedState?.v?.currentTopLevelLinkItem?.meta?.subMenuType?.shape
 

  if(!target) return null;

  return (
<div className="DropDownType sidebar-input NestedGroup">
  <h2 className="flex flex-center ToggleGroupSection-Item-Title ">Dropdown type</h2>
  <RadioButton
      label="Full screen"
      helpText="Use the full width of the screen for the dropdown"
      name="DropDownType"
      checked={target === 'fullwidth'}
      onChange={()=>{
        dispatch({
          type: 'settings',
          payload: {
            type: 'topLevelLinkItemMeta',
            data: {
              key: 'subMenuType',
              value: {shape: 'fullwidth'}
            }
          }
        })
      }}
    />
    <RadioButton
      label="Bubble"
      helpText="Align the dropdown under its main menu item within a bubble"
      name="DropDownType"
      checked={target === 'bubble'}
      onChange={()=>{
        dispatch({
          type: 'settings',
          payload: {
            type: 'topLevelLinkItemMeta',
            data: {
              key: 'subMenuType',
              value: {
                shape: 'bubble', 
                hasPointer: true,
              }
            }
          }
        })
      }}
    />
</div>
  )
}