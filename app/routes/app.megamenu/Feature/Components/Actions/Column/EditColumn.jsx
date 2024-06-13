import {
  useLocalState,
  Action,
  EditMajor,
  AddMajor,
} from '../../../FEATURE_INDEX.js';


/**
 * Select a column for edit and add column items modal open action  
 * @param {*} param0 
 * @returns 
 */
export function EditColumn({columnId, selected, index}) {
  const [state, dispatch ]= useLocalState()


  return (
<div 
  className="MegaMenu-Column-Edit"
>

  <Action 
    Icon={EditMajor}
    iconStyle={{
      backgroundColor: 'grey',
    }}
    onClick={(e)=>{
      e.stopPropagation()
      dispatch({
        type: 'subMenu',
        payload: {
          type: 'selectColumn',
          data: {
            columnId,
            index,
          }
        }
      })
    }}
  />
  {
    selected &&
    <Action 
      Icon={AddMajor}
      // text='Add link'
      // outlined={true}
      onClick={ (e) => {
        e.stopPropagation();
        dispatch({
          type: 'modals',
          payload: {
            type: 'open',
            payload: {
              AddColumnItemModal: {
                isOpen: true,
              }
            }
          }
        });
      }}
    />
  }


</div>
  );
}
