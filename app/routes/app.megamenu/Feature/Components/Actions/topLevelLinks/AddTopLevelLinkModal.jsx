import { useState } from 'react';
import {
  Modal,
  useLocalState,

} from '../../__index.js';




export function AddTopLevelLinkModal() {
  
  const [state, dispatch] = useLocalState()
  const {isOpen, mode} = state?.modals?.AddTopLevelLinkModal
  return (

<Modal
  open={isOpen}
  onClose={() => {
    dispatch({
      type: 'modals',
      payload:{
        type: 'close',
        payload:{
          modal: 'AddTopLevelLinkModal',
        }
      }
    })
  }}
  title={`${mode === 'new' ? 'add link': 'edit link'}`}
>

  <Action mode={mode} dispatch={dispatch} />

</Modal>
  );
}

function Action({mode, dispatch}) {
  return (
<>
{
mode === 'new' && 
<button
  onClick={ () => {
    dispatch({
      type:'topLevelLink',
      payload: {
        type:'addNewTopLevelLinkItem',
        data: {}
      }
    })
  }}
>
  Add 
</button>
}
{
mode === 'editing' && 
<button
  onClick={ () => {
    dispatch({
      type:'topLevelLink',
      payload: {
        type:'updateTopLevelLinkItem',
        data: {}
      }
    })
  }}
>
  Update
</button>
}
</>

  )
}