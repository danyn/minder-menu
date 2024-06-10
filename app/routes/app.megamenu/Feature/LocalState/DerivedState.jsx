import React, { useContext } from "react";

import {
  getTopLevelLinks,
  getCurrentTopLevelLinkItem,
  getCurrentColumn,
  getCurrentColumnLink,
} from './localStateGetters.js';

import {
  useLocalState,
} from './LocalState.jsx';


const DerivedStateContext = React.createContext();

export function DerivedState ({ children }) {
  const state = useLocalState('state');

  const currentTopLevelLinkItem = getCurrentTopLevelLinkItem(state);
  /* Derived Values */
  const v = {
    topLevelLinks: getTopLevelLinks(state),
    currentTopLevelLinkItem,
    subMenu: currentTopLevelLinkItem?.list,
    columnCount: undefined,
    currentColumn: getCurrentColumn(state),
    currentColumnLink: getCurrentColumnLink(state),
  }

  /* Derived Booleans */
  const b = {
    topLevelLinksArray: Array.isArray(v.topLevelLinks),
    topLevelLinksEmpty: v?.topLevelLinks?.length === 0,
    topLevelLinksHasItems:  v?.topLevelLinks?.length > 0,
    currentTopLevelLinkItem: v.currentTopLevelLinkItem !== undefined,
    currentTopLevelLinkItemHasColumns: v.currentTopLevelLinkItem?.list?.items?.length > 0,
    currentTopLevelLinkItemHasColumnsArray: Array.isArray(v.currentTopLevelLinkItem?.list?.items),
    currentColumn: v.currentColumn !== undefined,
    currentColumnSelected: state.currentColumn.selected === true,
    currentColumnLink: v.currentColumnLink !== undefined,
    currentColumnLinkNoWrap: v.currentColumnLink?.style?.whiteSpace === 'nowrap',
    // hasTopLevelLinks: state?.topLevelLinkItems?.items?.length !== 0
  }


  /* Values that are only derived when conditions are met */
  if(b.currentTopLevelLinkItemHasColumnsArray) v.columnCount = v.currentTopLevelLinkItem?.list?.items?.length



  console.log('DerivedState', {v,b});

  return (
    <DerivedStateContext.Provider value={{v,b}}>
      {children}
    </DerivedStateContext.Provider>
  );
}

export function useDerivedState() {
  return useContext(DerivedStateContext);
}
