import {
  /*  State */
  useLocalState,
  /* Global Components */
  Action,
  AddMajor,
  LinkMinor,
} from '../../__index'


export function AddLinkItem() {
  /* Hooks */ 
  const [state, dispatch] = useLocalState();
  /* End Hooks */

  return (
<div className="MegaMenu-AddLinkItem">
  <Action 
    Icon={LinkMinor}
    text='Add link'
    // outlined={true}
    onClick={ (e) => {
  
      e.stopPropagation()
      dispatch({
        type: 'modals',
        payload: {
          type: 'open',
          payload: {
            AddLinkItemModal: {
              isOpen: true,
              mode:'new',
            },
            AddColumnItemModal: {
              isOpen: false,
            }
          }
        }
      });

    } }
  />
</div>
  );
}



