import { useState, useEffect, } from 'react';
import {
  /* State */
  useLocalState,
  

  /* Global Component */
  Action,
  
  /* Icons */
  ImageWithTextOverlayMajor,
  
  
} from '../../../FEATURE_INDEX.js';



/**
 * Open the Image Block Modal with a mode of 'insert'
 * mode can be ('insert' | 'update')
 * @param {*} param0 
 * @returns 
 */
export function AddImageBlockButton() {

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
              mode: 'insert',
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
