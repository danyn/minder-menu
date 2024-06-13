import {
  Action,
  /* Icons */
  ViewMajor,
} from  '../../__index.js'




export function Preview() {

  return (
<div className="MegaMenu-Preview flex-center">
  <Action 
    Icon={ViewMajor}
    onClick={ (e) => {
      e.stopPropagation()
      // console.log('Preview', {e})
      // dispatch({type: '', payload: {},});
    }}
    text='Preview'
    outlined={true}
    small={true}
  />
</div>


  );
}