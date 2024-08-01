import {
  classNames,
} from './InitialState.js'

/*
  The default state is how the app's data is structured any user data is a populated version of this structure
*/

export const defaultState = {

  currentColumn: {id: null, selected: false, index: undefined},
  currentLinkItem: {id: null},
  currentTopLevelLinkItem: {id: null},
  dataId: null,
  data: false,
  dataSource: undefined,
  topLevelLinkItems: {
    items: [],
  },
  modals: {
    FeatureModal: {
      isOpen: true,
    },
    RightSideBar: {
      isOpen: false,
    },
    AddTopLevelLinkModal: {
      isOpen: false,
      mode: undefined, //new, or update
    },
    AddLinkItemModal: {
      isOpen: false,
      mode: undefined, //new, or update
    },
    AddColumnItemModal : {
      isOpen: false,
    },
    AddLinkItemModal: {
      isOpen: false,
    },
    AddImageBlockModal:  {
      isOpen: false,
    },
    // AddImageToLinkItem : {
    //   isOpen: false,
    // },
  },
  style: {
    [classNames.column.item]: {
      paddingTop: '22px',
      paddingRight: '12px',
      paddingBottom: '22px',
      paddingLeft: '12px',
    },
    [classNames.column.container]: {
      columnGap: '0px',
    },
    [classNames.topLevelLink.item]: {
      fontSize: '16px',
      fontWeight: '300',
      marginRight: '12px',
    },
    [classNames.link.item]: {
      fontSize: '16px', 
      fontWeight: '300',
      marginTop: '0px',
      marginBottom: '12px',
      marginRight: '0px',
      marginLeft: '0px',
    },
    [classNames.imageBlock.title]: {
      fontSize: '24px',
      fontWeight: '600',
      fontStyle: 'normal',
      marginTop: '8px',
      marginRight: '0px',
      marginLeft: '0px',
      marginBottom: '0px',
      alignItems: 'start',
      justifyContent: 'start',
      display: 'flex',
    },
    [classNames.imageBlock.description]: {
      fontSize: '17px',
      fontWeight: '400',
      fontStyle: 'normal',
      marginTop: '4px',
      marginRight: '0px',
      marginLeft: '0px',
      marginBottom: '0px',
      alignItems: 'start',
      justifyContent: 'start',
      display: 'flex',
    },
    [classNames.imageBlock.Cta]: {
      fontSize: '17px',
      fontWeight: '600',
      fontStyle: 'normal',
      marginTop: '8px',
      marginRight: '0px',
      marginLeft: '0px',
      marginBottom: '0px',
      alignItems: 'start',
      justifyContent: 'start',
      display: 'flex',
    },
    [classNames.imageBlock.CtaIcon]: {
      width: '16px',
      display: 'flex',
    },
    [classNames.imageBlock.image.container]: {
      alignItems: 'start',
      justifyContent: 'start',
      borderRadius: '4px',
      width: '100%',
      paddingTop: '0px',
      paddingRight: '0px',
      paddingLeft: '0px',
      paddingBottom: '0px',
      display: 'flex',
    },
  },
  errorMessaging: {
    isOpen: false,
    message: '',
  }
}

export function initializer(payload) {
  const { data, dataId, dataSource } = payload;
  return {
    ...defaultState,
    data,
    dataId,
    dataSource,
  }
}



/* Format string for console.logs() */
export const C = "color: yellow; font-style: italic; background-color: black ;padding: 2px"

