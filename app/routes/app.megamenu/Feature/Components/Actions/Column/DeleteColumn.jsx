import {
  useLocalState,
  DeleteMajor,
  Action,
} from '../../__index.js'

export function DeleteColumn({show}) {
  const [state, dispatch] = useLocalState()

  return (
<div 
  className="MegaMenu-Column-Delete"
  style={{ display: show ? 'block': 'none' }}  
>
  <Action 
    Icon={DeleteMajor}
    text='Delete column'
    padded={true}
    onClick={ (e) => {
      e.stopPropagation()
      dispatch({
        type: 'subMenu',
        payload: {
          type: 'deleteColumn',
        },
      })
    }}
  />
</div>
  );
}