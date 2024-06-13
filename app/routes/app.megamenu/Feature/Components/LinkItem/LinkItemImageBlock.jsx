import React from 'react';
import {
  /* State */
  useLocalState,
  useDerivedState,
  /* Constants */
  classNames,
  /* Icons */
  DragHandleMinor,
  AddImageMajor,
} from '../../FEATURE_INDEX.js';


export function LinkItemImageBlock({
  dragHandleProps,
  blockContent,
  isLinkActive,
  onClickLink,
}) {
//  MegaMenu-LinkItem-Active
  const state = useLocalState('state');
  const derivedState = useDerivedState();
  
  // console.log('LinkItemImageBlock', {blockContent}, isLinkActive)
  return (
<div className={`MegaMenu-LinkItem-Group MegaMenu-ImageBlock ${isLinkActive ? ' MegaMenu-ImageBlock-Active ' : ' '}`}>
  {/* Drag handle */}
  <div className='MegaMenu-LinkItem-DragHandle'>
    <div
      className="Icon"
      {...dragHandleProps}
    >
      <DragHandleMinor/>
    </div>
  </div>
  {/* Content */}
  <div 
    className="MegaMenu-LinkItemImageBlock-Content"
    onClick={(e) => {
      e.stopPropagation()
      onClickLink()
    }}
  >

  {
    /* variable order and variable type */ 
  Array.isArray(blockContent.items) &&
  blockContent.items.map((item)=> <BlockContent key={item.id} item={item}  style={blockContent.hasStyleRules ? item.style : state.style[item.className]}/>)
  }

  </div>
</div>
  )
}

function BlockContent({item, style}) {
  const Block = blocks[item.className]
  return <Block item={item} style={style} />
}



const blocks = {
  ImageBlockTitle,
  ImageBlockDescription,
  ImageBlockCta,
  ImageBlockImage,
}

function ImageBlockTitle({item, style}) {
  return <div className={item.className} style={style}>{item.text}</div>;
}
function ImageBlockDescription({item, style}) {
  return <div className={item.className} style={style}>{item.text}</div>;
}

function ImageBlockCta({item, style}) {
  return <div className={item.className} style={style}>{item.text}</div>;
}
function ImageBlockImage({item}) {
    return (
<div className="MegaMenu-LinkItemImageBlock-Image">
{
!item.url ?
  <div 
    className="Icon"
    style={{
      background: '#12b383',
      fill: 'white',
      borderRadius: '4px',
    }}
  >
    <AddImageMajor/>
  </div>

:
  <img src={item.url}/>
  }
</div>
  );

}