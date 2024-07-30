import {
  useLocalState,
  ImageBlockStyle,
  ActionTitle,
  EditMajor,
  classNames
} from '../../../FEATURE_INDEX.js';

import _ from 'lodash';

export function EditColumnItem({linkItem: item}) {
  const dispatch = useLocalState('dispatch');
  if(!Boolean(item)) return null;
  let text, role;
  if(item?.role === 'imageBlock') {
    text = _.find(item?.items, {className:classNames.imageBlock.title})?.text?.slice(0,11)?.concat('...');
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
          type: 'imageBlock',
          payload: {
            type: 'openModal',
            payload: { mode:'update' }
            }
          }
        );
      } else {
        console.log("EditColumnItem:: todo :: add dispatch for plain link item edit modal ")
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