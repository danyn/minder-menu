import {
  useLocalState,
  Action,
  /*Icons*/ 
  SaveIcon,
} from  '../../../FEATURE_INDEX.js';


export function Save() {
  const dispatch = useLocalState('dispatch')
  return (
<div className="MegaMenu-Save-Container" >
  <Action
    Icon={SaveIcon}
    text='Save'
    outlined={true}
    small={true}
    inverted={true}
  />
</div>
  )
}