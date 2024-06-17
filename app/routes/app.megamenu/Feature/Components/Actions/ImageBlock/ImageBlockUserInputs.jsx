import { useState, useEffect, } from 'react';
import _ from 'lodash';

import {

  /* State */
  useLocalState,
  // useDerivedState,
  

  /* Global Component */
  ImagePicker,
  TextField,
  // Action,
 

  /* Structures */
  structures,

  /* Initial static default data */
  // addNewImageBlock,
} from '../../../FEATURE_INDEX.js';

import {
  UpsertButton,
} from './UpsertButton.jsx';


export function ImageBlockUserInputs() {

  const [state, dispatch] = useLocalState();
  const {mode, items} = state?.modals?.AddImageBlockModal;
  
  const [imageFile, setImageFile] = useState(structures.imageFile);
  // const [imageFile, setImageFile] = useState( _.find(items, {className: "ImageBlockImage"}));

  const [title, setTitle] = useState(_.find(items, {className: "ImageBlockTitle"})?.text);

  const [description, setDescription] = useState(_.find(items, {className: "ImageBlockDescription"})?.text);

  const [CTA, setCTA] = useState(_.find(items, {className: "ImageBlockCta"})?.text);


  const componentState = {
    title, 
    setTitle,
    description, 
    setDescription,
    CTA, 
    setCTA,
    imageFile, 
    setImageFile,
  }


return (
<div 
  className="MegaMenu-ImageBlockUserInputs-Container"
>

{
  /* variable order and variable type */ 
  Array.isArray(items) &&
  items.map((item)=> <BlockContent key={item.id} item={item} componentState={componentState} /> )
}

  <UpsertButton
    mode={mode}
    dispatch={dispatch}
    currentValues={{title, description, CTA, imageFile}}
  />
</div>
)
}

/* Input elements for Image blocks */


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

function ImageBlockImage({componentState, item}) {
  const {imageFile, setImageFile} = componentState;
 
  return (
<ImagePicker 
  imageFile={imageFile} 
  setImageFile={setImageFile} 
  className='MegaMenu-ImageBlockUserInputs MegaMenu-ImageBlockUserInputs-ImagePicker' 
/>
  );

}

function ImageBlockTitle({componentState, item }) {
  const {title, setTitle} = componentState;

  return (
<div 
  className="MegaMenu-ImageBlockUserInputs-Title MegaMenu-ImageBlockUserInputs">
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
<div className="MegaMenu-ImageBlockUserInputs-Description MegaMenu-ImageBlockUserInputs">
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
<div className="MegaMenu-ImageBlockUserInputs-CTA MegaMenu-ImageBlockUserInputs">
  <TextInput
    label='Action'
    text={CTA}
    setText={setCTA}
  />
</div>
  );
}

const blocks = {
  ImageBlockTitle,
  ImageBlockDescription,
  ImageBlockCta,
  ImageBlockImage,
}

/**
 * Iterates through an array of items using the className prop to select
 * a function component.  This allows variable type and order without any conditional
 * statements.  However it is very brittle.
 * @param {*} param0 
 * @returns 
 */
function BlockContent({item, componentState}) {
  const Block = blocks[item.className]
  return <Block item={item} componentState={componentState} />
}


