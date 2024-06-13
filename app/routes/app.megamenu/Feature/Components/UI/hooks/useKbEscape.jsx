import { useEffect } from "react";

export function useKbEscape(dispatch) {

  useEffect(() => {
    function kbEscape(e, dispatch) {

      if(e.key==='Escape') {
        dispatch({
          type: 'removeFocus',
        })
      }

    }

    document.addEventListener(
      'keyup', 
      (e)=>{kbEscape(e, dispatch)}, 
      false
    );

    return () => {
      document.removeEventListener('keyup', kbEscape, false);
    }
  
  }, []);


}