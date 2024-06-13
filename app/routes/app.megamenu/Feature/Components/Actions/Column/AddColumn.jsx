import {
  useLocalState,
  useDerivedState,
  AddNoteMajor,
  TickMinor,
  Action,
} from '../../../FEATURE_INDEX.js';



export function AddColumn({emptyState}) {
  const [state, dispatch] = useLocalState()
  const derivedState = useDerivedState()

  // const b = {
  //   visible: state.currentTopLevelLinkItem.id !== null,
  // }

  return (
<div 
  className="MegaMenu-AddColumn"
  style={{display: derivedState.b.currentTopLevelLinkItem ? 'block': 'none' }}
>
{
emptyState &&
  <div className="MegaMenu-AddColumn-EmptyState">
    <img className="MegaMenu-AddColumn-EmptyState-Image" src='/curved-arrow-right.svg' width='80px' height='80px' />
    <p className="MegaMenu-AddColumn-EmptyState-Text text-blue-500">
      <span className="tick Icon"><TickMinor/></span>
      Create a dropdown menu by adding columns <br/>
      <span className="tick Icon"><TickMinor/></span>
      Leave empty if you don't need a dropdown menu
    </p>
  </div>
}
  <Action
    Icon={AddNoteMajor}
    onClick={(e) => {
      e.stopPropagation()
      dispatch({ 
        type: 'subMenu',
        payload: {
          type: 'addColumn',
        }
      });
    }}
  />


</div>

  );
}
