import {
  useLocalState,
  Action,
  MaximizeMinor,
  ExpandRetract,
} from '../../../FEATURE_INDEX.js';


export function LinkWhiteSpace({noWrap = false, dispatchType}) {
  const dispatch = useLocalState('dispatch');

  return (
<div className="MegaMenu-Column-LinkWhiteSpace">
  
  <Action
    Icon={ExpandRetract}
    iconProps={{
      isExpanded: noWrap,
    }}
    iconStyle={{background: '#2363bc',}}
    text={ noWrap ? 'No wrap' : 'Wrap' }
    textStyle={{color: 'black'}}
    padded={false}
    onClick={ () => {
      dispatch({
        type: dispatchType.type,
        payload: {
          type: dispatchType.subType,
          data: { whiteSpace: noWrap ? 'normal': 'nowrap' }
        }
      })
    }}
  />
</div>
  );
}


//  data: {whiteSpace: 'normal'}

/*
    dispatchValue = {
      type: dispatchType.type,
      payload: {
        type: dispatchType.subType,
        data: {whiteSpace: 'nowrap'}
      }
    }

*/
