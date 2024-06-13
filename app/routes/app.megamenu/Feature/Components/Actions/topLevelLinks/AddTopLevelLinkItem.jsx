import {
  /* State */
  useLocalState,

  /* Global UI components */
  Action,
  /* Icons */
  LinkMinor,
} from '../../__index.js'

export function AddTopLevelLinkItem({emptyState}) {
  const dispatch = useLocalState('dispatch')
  return (
<div className="MegaMenu-AddTopLevelLinkItem">

  <Action 
    Icon={LinkMinor}
    // text='Add link'
    onClick={(e) => {
      e.stopPropagation()
      dispatch({
        type: 'modals',
        payload: {
          type: 'open',
          payload: {
            AddTopLevelLinkModal: {
              isOpen: true,
              mode: 'new',
            }
          }
        }
      });

    }}
  />
{
emptyState &&
<div className="MegaMenu-AddTopLevelLinkItem-EmptyState">
  <img className="MegaMenu-AddTopLevelLinkItem-EmptyState-Image" src='/curved-arrow.svg' width='80px' height='80px'/>
  <div className="MegaMenu-AddTopLevelLinkItem-EmptyState-Text">Start by adding links</div>
</div>
  
}
</div>


  );
}