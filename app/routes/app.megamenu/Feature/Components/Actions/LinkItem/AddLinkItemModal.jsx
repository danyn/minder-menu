import {
  /*state*/
  useLocalState,
  /* Components */ 
  AddImageBlockSettings,
  Modal,
  /* data structures */
  structures,
} from '../../../FEATURE_INDEX.js';


export function AddLinkItemModal() {
    const [state, dispatch] = useLocalState()
    const {isOpen, mode} = state?.modals?.AddLinkItemModal

    return (
  <Modal
    open={isOpen}
    onClose={() => {
      dispatch({
        type: 'modals',
        payload:{
          type: 'close',
          payload:{
            modal: 'AddLinkItemModal',
          }
        }
      })
    }}
    title={`${mode === 'new' ? 'Add link' : 'Update link' }`}
  >
    <p>Text input</p>
    <p>
      Resource browser of some kind. All it grabs is the url of the resource. page, product, collection, blog, external, etc...
    </p>
    <div
      onClick={ (e) => {
        e.stopPropagation();
        dispatch({
            type: 'columnItems', 
            payload: {
              type: 'addLinkItem',
              payload: {},
            }
  
        }) 
      }}
      >
      Add Link
    </div>
  </Modal>
  )
}
