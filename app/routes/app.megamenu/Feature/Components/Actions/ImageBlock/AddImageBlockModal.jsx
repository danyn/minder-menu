import {
  /*state*/
  useLocalState,
  /* Components */ 
  Modal,
  /* data structures */
  structures,
} from '../../../FEATURE_INDEX.js';

import {
  ImageBlockUserInputs,
} from './ImageBlockUserInputs.jsx'


export function AddImageBlockModal() {
    const [state, dispatch] = useLocalState()
    const {isOpen, mode} = state?.modals?.AddImageBlockModal

    return (
  <Modal
    open={isOpen}
    onClose={() => {
      dispatch({
        type: 'modals',
        payload:{
          type: 'close',
          payload:{
            modal: 'AddImageBlockModal',
          }
        }
      })
    }}
    title={`${mode === 'new' ? 'Add image block' : 'Update image block' }`}
  >
    <ImageBlockUserInputs/>
  </Modal>
  )
}
