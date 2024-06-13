import {
  useLocalState,
  Banner,
} from '../__index'


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