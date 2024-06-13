import { useState } from 'react';
import {
  Modal,
  useLocalState,

  AddImageBlock,
  AddLinkItem,

} from '../../../FEATURE_INDEX.js';




export function AddColumnItemModal() {
  
  const [state, dispatch] = useLocalState()
  const {isOpen, type, isEditing} = state?.modals?.AddColumnItemModal
  return (
    // state?.modals?.AddColumnItemModal?.isOpen
<Modal
  open={isOpen}
  onClose={() => {
    dispatch({
      type: 'modals',
      payload:{
        type: 'close',
        payload:{
          modal: 'AddColumnItemModal',
        }
      }
    })
  }}
  title='Add item to column'
>

  <Actions dispatch={dispatch} />

</Modal>
  );
}

function Actions({dispatch}) {
  return (
<div className="MegaMenu-AddColumnItemModal">
  <div className="MegaMenu-AddColumnItemModal-ImageBlock flex flex-center">
    <AddImageBlock mode="new"/>
  </div>
  <div className="MegaMenu-AddColumnItemModal-Link flex flex-center">
    <AddLinkItem />
  </div>
  <div className="MegaMenu-AddColumnItemModal-Title flex flex-center">
    T
  </div>
  <div className="MegaMenu-AddColumnItemModal-ImageBlock flex flex-center">
    IB
    <div>abc</div>
  </div>
  <div className="MegaMenu-AddColumnItemModal-Link flex flex-center">
    L
  </div>
  <div className="MegaMenu-AddColumnItemModal-Title flex flex-center">
    T
  </div>
</div>
  )
}


/*
add column item belongs in the modal.
dispatch({
  type: 'columnItems', 
  payload: {
    type: 'addLinkItem',
    payload: {},
  }
})
*/ 