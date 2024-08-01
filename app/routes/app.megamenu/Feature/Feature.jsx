// import { useRouteLoaderData } from '@remix-run/react';

import {
  /* Data */
  /* State */
  LocalState,
  useLocalState,
  DerivedState,
  useDerivedState,
  dragDropDispatcher,
  /* UI */
  EmptyStates,
  Modals,
  FullScreenMode,
  TopLevelLinks,
  LeftSideBar,
  Columns,

} from './FEATURE_INDEX.js';

import { 
  DragDropContext,
} from 'react-beautiful-dnd';

import './feature.scss';

export default function Feature() {
  return (
<LocalState>
  <FeatureContexts/>
</LocalState>
  );
}

function FeatureContexts() {

  const [state, dispatch] = useLocalState()

  return (
<DerivedState>
  <DragDropContext onDragEnd={ dragEndResult => dragDropDispatcher({dragEndResult, dispatch}) }>  
    <FullScreenMode isOpen={true} >
      <FeatureContent/>
    </FullScreenMode>
  </DragDropContext>
</DerivedState>
  );

}


/**
 * All of the components that need access to the contexts including LocalState, and React DnD
 * @returns JSX
 */
function FeatureContent() {
  /* hooks */
  // const [state, dispatch] = useLocalState();
  // const derivedState = useDerivedState()
  // useKbEscape(dispatch);
  /* end hooks */

  return (
<div className='MegaMenu'>

  <TopLevelLinks/>

  <LeftSideBar/>

  <Columns/>

  <EmptyStates/>
  <Modals/>
  {/* <DismissableErrorMessage/> */}
</div>
  )
}


