import {
  useLocalState,
  Banner,
} from '../../FEATURE_INDEX.js';


export function DismissableErrorMessage() {
  /* hooks */
  const [state, dispatch] = useLocalState();

  return (
<>
{
state?.errorMessaging?.isOpen &&
<div className="DismissableErrorMessage center-absolute">
  <Banner 
    status="info"
    onDismiss={() => {
      dispatch({
        type:'errorMessaging',
        payload: {
          type: 'close',
        }
      })
    }}
  >
    <p>
    {state?.errorMessaging?.message}
    </p>
  </Banner>
</div>
}
</>    
  );
}