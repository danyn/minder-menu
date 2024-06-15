
import { useState, useEffect, } from 'react';
import {

  TextField,
  Action,
  ImagePicker,

} from '../../../FEATURE_INDEX.js';




export function BlockContent({item, componentState}) {
  const Block = blocks[item.className]
  return <Block item={item} componentState={componentState} />
}

const blocks = {
  ImageBlockTitle,
  ImageBlockDescription,
  ImageBlockCta,
  ImageBlockImage,
}

function TextInput({
  label='',
  text,
  setText,
}) {

  return (
<div className="TextInput">
  <div className="TextInput-Header">
    <div className="TextInput-Label">
      {label}
    </div>
  </div>
  <div 
    className="TextInput-Text"
  >
    <TextField
      multiline={true}
      // label='Action call'
      value={text}
      autoComplete='off'
      onChange={(v)=>{setText(v)}}
    />
  </div>
</div>
  );
}


/* 
  * variable order and variable type from Array of items without if else if
*/ 





function ImageBlockImage({componentState, item}) {
  const {imageFile, setImageFile} = componentState;
 
  return (
<ImagePicker 
  imageFile={imageFile} 
  setImageFile={setImageFile} 
  className='MegaMenu-AddImageBlock-Input MegaMenu-AddImageBlock-ImagePicker' 
/>
  );

}

function ImageBlockTitle({componentState, item }) {
  const {title, setTitle} = componentState;

  return (
<div 
  className="MegaMenu-AddImageBlock-Title MegaMenu-AddImageBlock-Input">
  <TextInput
    label='Title'
    text={title}
    setText={setTitle}
  />
</div>
  );
}

function ImageBlockDescription({componentState,  item}) {
  const {description, setDescription} = componentState;
  return (
<div className="MegaMenu-AddImageBlock-Description MegaMenu-AddImageBlock-Input">
  <TextInput
    label='Description'
    text={description}
    setText={setDescription}
  />
</div>
  )
}

function ImageBlockCta({componentState, item }) {
  const {CTA, setCTA} =  componentState;
  return (
<div className="MegaMenu-AddImageBlock-CTA MegaMenu-AddImageBlock-Input">
  <TextInput
    label='Action'
    text={CTA}
    setText={setCTA}
  />
</div>
  );
}

export function SubmitButton({
  dispatch,
  title,
  description,
  CTA,
  imgSrc,
  mode,
  id,
}) {

  return (
<div 
  className='MegaMenu-AddImageBlock-Insert button button-add'
  onClick={(e) => {
    console.log('ImageBlocks::SubmitButton ->', 'onclick');
    e.stopPropagation();
// 
    dispatch({
      type: 'imageBlock',
      payload: { 
        type: 'addNew', //
        payload: {
          title,
          description,
          CTA,
          imgSrc,
          mode,
          id,
        }
      }
      });

    dispatch({
      type: 'modals',
      payload:{
        type: 'close',
        payload:{
          modal: 'AddImageBlockModal',
        }
      }
    });
  }}
>
  {mode==='new' ? 'Insert' : 'Update'}
</div>

  )

}