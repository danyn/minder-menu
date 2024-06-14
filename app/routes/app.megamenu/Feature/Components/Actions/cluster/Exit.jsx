import {
  useLocalState,
  Action,
  ExitIcon,
} from '../../../FEATURE_INDEX'

export function Exit() {
  const dispatch = useLocalState('dispatch');
  return (
<div className="MegaMenu-Exit">
  <Action
      Icon={ExitIcon}
      text='Exit'
      outlined={true}
      small={true}
      iconStyle={{width: '30px', height: '30px'}}
      textStyle={{display: 'flex', justifyContent: 'center', transform: 'translateX(-16px)'}}
      // padded={true}
      inverted={true}
      onClick={(e) => {
        e.stopPropagation();
        dispatch({
          type:'clusterAction',
          payload: {
            type: 'exit',
            payload: {},
          }
        })
      }}
    />
</div>
  );
}