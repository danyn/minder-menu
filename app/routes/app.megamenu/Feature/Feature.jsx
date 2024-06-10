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
  const dispatch = useLocalState('dispatch')

  return (
<DerivedState>
  <DragDropContext onDragEnd={ dragEndResult => dragDropDispatcher({dragEndResult, dispatch}) }>  
    <FeatureContent/>
    
  {/* 
    <MegaMenu />
    <Modals/>
  */}
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

  {/* <TopLevelLinks/> */}

  {/* <LeftSideBar/> */}

  {/* <Columns/> */}

  <EmptyStates/>
  {/* <DismissableErrorMessage/> */}
</div>
  )
}


