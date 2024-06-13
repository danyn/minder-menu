import { useState } from 'react';
import {
  /* State */
  useLocalState,
  initialState,
  /* Global Component */
  Action,
  DropZone,
  TextField,
  Checkbox,
  /* Icons */
  AddImageMajor,
  ImageWithTextOverlayMajor,
  TextMajor,
  MeasurementMinor,
} from '../../FEATURE_INDEX.js';

export function AddImageToLinkItem({linkItem}) {

  const [state, dispatch] = useLocalState();
  const [isOpen, setIsOpen] = useState(false);
  const [temp, setTemp] = useState('');
  /*
    open will be an OR on this and if the link item has an image in local state
  */
  if(!linkItem) return <></>

  return (
<div className="MegaMenu-AddImageToLinkItem">
  <Action
    Icon={ImageWithTextOverlayMajor}
    // iconProps={{}}
    // iconStyle={{background: '#2363bc',}}
    text='Add image to link'
    // textStyle={{color: 'black'}}
    padded={true}
    onClick={ () => {
      setIsOpen(!isOpen)
    }}
  />  
  <div 
    className="MegaMenu-AddImageToLinkItem-Settings"
    style={!isOpen ? {display: 'none'}:{}}
  >
    <Checkbox
      label='Use image block'
      checked={linkItem.meta.hasImageBlock}
      onChange={(bool) => {
        dispatch({
          type: 'subMenu',
          payload: {
            type: 'useImageBlock',
            data: bool,
          }
        })
      }}
    />
    {/* Element 1 : image */}
  <DropZone
    allowMultiple={false}
  >
    <div
      className='MegaMenu-AddImageToLinkItem-DropZone flex-center'
    >
    {
    true ?
      <div className='Icon AppIcon' style={{
        height: '100px',
        width: '100px',
        background: '#12b383',
        color: 'white',
        borderRadius: '7px',

      }}>
        <AddImageMajor/>
      </div>
      
    :
      <></>
    }
    </div>
  </DropZone>
    {/* Element 2 : title */}
    <div className="MegaMenu-AddImageToLinkItem-Title">
      <TextInput
        label='Title'
        text={'cats'}
        setText={setTemp}
      />
    </div>
    {/* Element 3 : paragraph */}
    <div className="MegaMenu-AddImageToLinkItem-Paragraph">
      <TextInput
        label='Paragraph'
        text={'dogs'}
        setText={setTemp}
      />
    </div>
    {/* Element 4 : call to action */}
    <div className="MegaMenu-AddImageToLinkItem-CTA">
      <TextInput
        label='Action call'
        text={'birds'}
        setText={setTemp}
      />
    </div>
  </div>
</div>
  );
}

function TextInput({
  label='',
  text,
  setText,
  layoutInputs,
}) {
  const [show, setShow] = useState({
    text: true,
    sizing: false,
  })
  
  return (
<div className="TextInput">
  <div className="TextInput-Header">

    <div className="TextInput-Label">
      {label}
    </div>
  
    <Action
      Icon={TextMajor}
      iconStyle={show.text ? {background: '#12b383'} : {}}
      onClick={()=>{setShow({
        text: !show.text,
        sizing: !show.sizing,
      })}}
    />
    <Action
      Icon={MeasurementMinor}
      iconStyle={show.sizing ? {background: '#12b383'} : {}}
      onClick={()=>{setShow({
        text: !show.text,
        sizing: !show.sizing,
      })}}
    />

  </div>
  <div 
    className="TextInput-Text"
    style={show.text ? {} : {display: 'none'}}
  >
    <TextField
      multiline={true}
      // label='Action call'
      value={text}
      autoComplete='off'
      onChange={(v)=>{setText(v)}}
    />
  </div>
  <div 
    className="TextInput-Sizing"
    style={show.sizing ? {} : {display: 'none'}}
  >
    Sizing!
  </div>

</div>
  );
}

/*

dispatch({
  type: 'subMenu',
  payload: { 
    type: 'AddImageToLinkItem',
    data: { isOpen: true, }
  }
})

*/