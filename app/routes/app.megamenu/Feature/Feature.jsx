// import { useRouteLoaderData } from '@remix-run/react';

import {
  /* Data */
  // useInitialize,
  useInitializeFetcher,
  /* State */
  LocalState,
  useLocalState,
  DerivedState,
  useDerivedState,
  dragDropDispatcher,
  /* UI */
  EmptyStates,
  FullScreenMode,
  TopLevelLinks,

} from './FEATURE_INDEX.js'

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

  
  // useInitialize();
  useInitializeFetcher();
  const [state, dispatch] = useLocalState()

  return (
<DerivedState>
  <DragDropContext onDragEnd={ dragEndResult => dragDropDispatcher({dragEndResult, dispatch}) }>  
    <FullScreenMode isOpen={state.modals.FeatureModal.isOpen} >
      <FeatureContent/>
    </FullScreenMode>
  </DragDropContext>
</DerivedState>
  );

}

function FeatureContent() {
  /* hooks */
  // const [state, dispatch] = useLocalState();
  // const derivedState = useDerivedState()
  // useKbEscape(dispatch);
  /* end hooks */

  return (
<div className='MegaMenu'>

  <TopLevelLinks/>

  {/* <LeftSideBar/> */}

  {/* <Columns/> */}

  <EmptyStates/>
    {/* <Modals/> */}
  {/* <DismissableErrorMessage/> */}
</div>
  )
}


