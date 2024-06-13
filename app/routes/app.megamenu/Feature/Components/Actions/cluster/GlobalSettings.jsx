import {
  useLocalState,
  Action,
  /* Icons */
  SettingsMajor,
} from  '../../__index';

export function GlobalSettingsToggle() {
  const [state, dispatch] = useLocalState()
  return (
<Action
  Icon={SettingsMajor}
  iconStyle={{
    background: 'none', 
    color: state.modals.RightSideBar.isOpen ? '#3783c5' : 'black',
  }}
  onClick={()=>{
    // console.log('open global settings')
    dispatch({
      type:'toggleSettings',
    })
  }}
/>
  )
}
