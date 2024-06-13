import {
  useLocalState,
  ImageBlockStyle,
  ActionTitle,
  EditMajor,
  _find,
} from '../../../FEATURE_INDEX.js';



export function EditColumnItem({linkItem: item}) {
  const dispatch = useLocalState('dispatch');
  if(!Boolean(item)) return null;
  let text, role;
  if(item?.role === 'imageBlock') {
    text = _find(item?.items, {role:'title'})?.text?.slice(0,11)?.concat('...');
  } else {
    text = item?.child?.text?.slice(0,11)?.concat('...');
  }

  return (
<div className="EditColumnItem">
  <ActionTitle
    text={text}
    Icon={EditMajor}
    type='Sub'
    onClickIcon={() => {
      if(item?.role === 'imageBlock') {
        /* Open the addImageBlock modal with a role of edit */ 
        dispatch({
          type: 'modals',
          payload: {
            type: 'open',
            payload: {
              AddImageBlockModal: {
                isOpen: true,
                mode:'update',
              }
            }
          }
        });
      } else {
        // its a plain link
        // dispatch()
      }
    }}
  />
  {/* 
    Style Inputs 
    Should be global, and custom styles that are named and available 
    in a dropdown
  */}
  {
    item?.role === 'imageBlock' && <ImageBlockStyle subModule='imageBlock' />
  }
</div>
  );

}