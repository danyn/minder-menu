import { useState } from "react";

export function Action({
  // show, 
  Icon,
  iconStyle = {backgroundColor:'rgb(63, 160, 240)', color: 'white' }, 
  textStyle = {},
  iconProps = {},
  text = false,
  outlined = false,
  padded=false,
  onClick,
  small=false,
  inverted=false
}) {

  return (
<div 
  className={`Action ${ text !== false ? ' Action-HasText ' : ' ' } ${outlined === true ? ' Action-Outlined ' : ' ' } ${padded === true ? ' Action-Padded ' : ' ' } ${small ? 'Action-HasText-Small' : ''} ${inverted ? 'Action-Inverted': ''}`}
  onClick={onClick}
>
  
  <div 
    className="Action-Icon Icon AppIcon"
    style={iconStyle}
  >
    <Icon {...iconProps} />
  </div>


{
text !== false &&
  <div 
    className="Action-Text flex-center-y"
    style={textStyle}
  >
    {text}
  </div>
}

</div>
  );
}

/**
 * type Sub|Main
 * @param {*} param0 
 * @returns 
 */
export function ActionTitle({
  text,
  Icon=false,
  type='Main',
  visible=true,
  onClickIcon = false,
}) {
  return (
<div 
  className={`ActionTitle ActionTitle-${type==='Main' ? 'Main' : 'Sub'} `}
  style={!visible ? {display:'none'} : {}}
>
  <div 
    className={`ActionTitle-Icon AppIcon Icon ${onClickIcon === false ? ' ActionTitle-Icon-NoAction ' : ' ' }`}
    onClick={(e) => {
      e.stopPropagation()
      if(onClickIcon !== false) onClickIcon()
    }}
  >
    {
      Icon && <Icon/>
    }
    
  </div>
  <div className="ActionTitle-Text flex-center-y">
    {text}
  </div>
</div>
  )
}


/**
 * Toggles children as one group open or closed
 * @param {*} param0 
 * @returns JSX
 */
export function ToggleGroup({children, text, icon, contained=false, isOpened = false, shouldToggle=true}) {
  const [isOpen, setIsOpen] = useState(isOpened);

  return (
<div className="ToggleGroup">
  <Action 
    Icon={icon}
    iconStyle={{transform: isOpen ?  'rotate(90deg)': 'rotate(0deg)',}}
    text={text}
    padded={true}
    onClick={ (e) => {
      e.stopPropagation();
      if(shouldToggle) { setIsOpen(!isOpen) }
    } }
  />

  <div 
    className="ToggleGroup-Items"
    style={ isOpen ? 
      {
        display: 'block',
      }: 
      {
        display: 'none',
      }
    }
  >
    <div className={`${contained ? ' ToggleGroup-Items-Contained ': ' '}`}>
      {children}
    </div>

  </div>
</div>
  )
}

/*

    margin-left: 15px;
    margin-right: 15px;
    border-left: 1px solid green;
*/