import { useState, useEffect, } from 'react';
import {
  /* State */
  useLocalState,
  useDerivedState,
  // initialState,

  /* Global Component */
  Action,
  ImagePicker,
  // DropZone,
  TextField,
  Checkbox,
  /* Icons */
  ImageWithTextOverlayMajor,
  TextMajor,
  MeasurementMinor,
  /* Structures */
  structures,
  // AddColumnItemModal,
  /* todo move this functions into a separate file */
  uuid,
  // newImageBlock,
  addNewImageBlock,
} from '../../../FEATURE_INDEX.js';

import {
  BlockContent,
  SubmitButton,
} from './ImageBlocks.jsx';

import _ from 'lodash';


/**
 * mode can be edit or new
 * @param {*} param0 
 * @returns 
 */
export function AddImageBlock() {

  const [state, dispatch] = useLocalState();

  return (
<div className="MegaMenu-AddImageBlock">

  {/* Action */}
  <Action
    Icon={ImageWithTextOverlayMajor}
    // iconProps={{}}
    // iconStyle={{background: '#2363bc',}}
    text='Add Image'
    // textStyle={{color: 'black'}}
    padded={true}
    onClick={(e) => {
      console.log('i should only open a modal');
      e.stopPropagation();
      dispatch({
        type: 'modals',
        payload: {
          type: 'open',
          payload: {
            AddImageBlockModal: {
              isOpen: true,
              mode:'new',
            },
            AddColumnItemModal: {
              isOpen: false,
            }
          }
        }
      });

    }}
  />  

</div>

)
}


    {/* Control 
    
      The control goes into a new modal:
      -> AddImageBlockModal
      This modal will contain all the control exported as AddImageBlockInputs
      The user can:
      - choose which pieces of the block are visible
      - order the blocks
      - Only later will they be able to customize the style of the parts?
      - Only later will they be able to adjust the width of the column?
    */}
export function AddImageBlockSettings() {

  const [state, dispatch] = useLocalState();

  const [title, setTitle] = useState('')
  
  const [description, setDescription] = useState('')
  
  const [CTA, setCTA] = useState('')
  
  const [imageFile, setImageFile] = useState(structures.imageFile);

  const [items, setItems] = useState([]);

  const {mode} = state?.modals?.AddImageBlockModal

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

  const derivedState = useDerivedState()

  const currentColumnLink = derivedState.v.currentColumnLink;
  const id = currentColumnLink?.id

  useEffect(() => {
    let _items;
    if(mode === 'update') {
      _items = currentColumnLink?.items;
    } else if (mode === 'new') {
      _items = addNewImageBlock();
    } else {
      throw new Error('No mode for image block modal')
    }
  
    setTitle(_.find(_items, {className: "ImageBlockTitle"})?.text);
    setDescription(_.find(_items, {className: "ImageBlockDescription"})?.text);
    setCTA(_.find(_items, {className: "ImageBlockCta"})?.text);
    setImageFile(_.find(_items, {className: "ImageBlockImage"}));
    setItems(_items);

  },[])


return (
<div 
  className="MegaMenu-AddImageBlock-Settings"
>

{
  /* variable order and variable type */ 
  Array.isArray(items) &&
  items.map((item)=> <BlockContent key={item.id} item={item} componentState={componentState} /> )
}

  <SubmitButton 
    dispatch={dispatch}
    title={title}
    description={description}
    CTA={CTA}
    imgSrc={imageFile.url}
    mode={mode}
    id={id}
  />
</div>
)
}


// const text = {
//   title: 'Great Title. Great Product',
//   description: 'A short description of your product or collection',
//   CTA: 'Shop now',
// }