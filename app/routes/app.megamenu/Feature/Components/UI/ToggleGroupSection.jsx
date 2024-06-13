import {

  /* Icons */
  RightCaret,
} from '../../FEATURE_INDEX.js';

import {
  useState
} from 'react'


export function ToggleGroupSection({
  children, 
  Icon,
  title,
  background=false,
  border=false
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className={`ToggleGroupSection ${border ? 'ToggleGroupSection-Border' : '' }`}
    >
      <div 
        className={`ToggleGroupSection-Title ${background ? ' ToggleGroupSection-Title-Background': ''} ${Icon ? 'ToggleGroupSection-Title-Icon' : ''}`}
        onClick={()=>{
          setIsOpen(!isOpen)
        }}
      >
        <div 
          className="ToggleGroupSection-Title-Arrow flex flex-center"
          style={{transform: isOpen? 'rotate(90deg)':  'none'}}
        >
          <RightCaret/>
        </div>
        <div 
          className={`ToggleGroupSection-Title-Text-${Icon ? 'Center' : 'Start'} flex flex-center-y`}>
          {title}
        </div>
        {
          Icon &&
          <div className="ToggleGroupSection-Title-Icon flex flex-center">
            <Icon/>
          </div>
        }
  
      </div>
      <div 
        className="ToggleGroupSection-Content"
        style={{display: isOpen ? 'block' : 'none'}}
      >
        {children}
      </div>
  
    </div>
  )
}