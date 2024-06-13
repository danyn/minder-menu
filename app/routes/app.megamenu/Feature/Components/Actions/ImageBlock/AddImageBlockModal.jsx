import {
  /*state*/
  useLocalState,
  /* Components */ 
  AddImageBlockSettings,
  Modal,
  /* data structures */
  structures,
} from '../../../FEATURE_INDEX.js';


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
  
    <AddImageBlockSettings/>
  </Modal>
  )
}
