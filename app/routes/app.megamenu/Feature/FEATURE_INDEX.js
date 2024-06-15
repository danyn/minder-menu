/* App Dependencies */
export * from '../../app._index/APP/APP_INDEX.js'

// export * from '../../app._index/APP/CustomData/MetaObjects/queries.js'

/* Feature Dependencies */
export {
  LocalState,
  useLocalState,
} from './LocalState/LocalState.jsx';

export {
  DerivedState,
  useDerivedState,
} from './LocalState/DerivedState.jsx';

export {
  defaultState,
  C,
} from './LocalState/DefaultState.js';


export {
  newMegaMenu,
  newTopLevelLinkItem,
  newLinkItem,
  newColumnContainer,
  newColumn,
  newImageBlock,
  classNames,
  structures,
} from './LocalState/InitialState.js';



export {
  dragDropDispatcher,
  dropTypes,
} from './LocalState/dragDropDispatcher.js';

export {
  EmptyStates,
} from './Components/EmptyStates.jsx'

export {
  useInitialize,
} from './Hooks/useInitialize.jsx'

export {
  useInitializeFetcher,
} from  './Hooks/useInitiliazeFetcher.jsx'



export * from './CustomData/definitions.js'



// 

// 

// FIX EXORTS from __index.js

/* State */
// export {
//   LocalState,
//   useLocalState,
// } from './__LocalState/__LocalState';



// export {
//   initialState,
// } from './__LocalState/initalState';

// export {
//   newMegaMenu,
// } from './__LocalState/initalState';



// './__LocalState/initalState'

export * from  './LocalState/localStateGetters.js';

// './__LocalState/localStateGetters'



/* Global Link Item */

export { 
  LinkItem,
} from './Components/LinkItem/LinkItem.jsx'
// 'LinkItem/LinkItem'
export { 
  TopLevelLinkItem,
} from './Components/LinkItem/TopLevelLinkItem'

export { 
  LinkItemImageBlock,
} from './Components/LinkItem/LinkItemImageBlock'


/* Footer */ 
export {
  FooterActions,
} from './Components/footer/FooterActions';

/* Header */
export {
  HeaderActions,
} from './Components/header/HeaderActions';

export {
  TopLevelLinks
} from  './Components/header/TopLevelLinks';

export {
  EditTopLevelLink,
} from './Components/Actions/topLevelLinks/EditTopLevelLink'


export {
  SidebarColumnTitle,
} from './Components/Actions/Column/SidebarColumnTitle'

/* SideBar */

export {
  LeftSideBar,
} from './Components/sideBars/LeftSideBar'

export {
  RightSideBar,
} from './Components/sideBars/RightSideBar'

export {
  AddColumn,
} from './Components/Actions/Column/AddColumn'



export {
  // DropDownMenusSettings,
  // SubmenuSettings,
  ImageBlockSettings,
} from './Components/sideBars/SidebarComponents.jsx'

  /* Column */
export {
  Columns,
} from './Components/column/Columns' 
export {
  Column,
} from './Components/column/Column';

export {
  DraggableLinkItem,
} from  './Components/LinkItem/DraggableLinkItem';

export { 
  DragHandle,
} from './Components/column/DragHandle'

export {
  EditColumn,
} from './Components/Actions/Column/EditColumn';

export {
  DeleteColumn,
} from './Components/Actions/Column/DeleteColumn';




export  {
  LinkWhiteSpace,
} from './Components/Actions/Column/LinkWhiteSpace';


/* Column Items */ 
export {
  AddImageBlock,
  AddImageBlockSettings,
} from './Components/Actions/ImageBlock/AddImageBlock.jsx';

export {
  AddImageBlockModal,
} from './Components/Actions/ImageBlock/AddImageBlockModal';


export {
  AddLinkItem,
} from './Components/Actions/LinkItem/AddLinkItem.jsx';


export {
  EditColumnItem,
} from './Components/Actions/ColumnItems/EditColumnItem.jsx';


export {
  ColumnSize,
  ColumnSizeSlider,
} from './Components/Actions/Column/ColumnSize';

/* Feature Modals */
export {
  AddLinkItemModal,
} from './Components/Actions/LinkItem/AddLinkItemModal';

export {
  AddTopLevelLinkModal,
} from './Components/Actions/topLevelLinks/AddTopLevelLinkModal.jsx';

export {
  AddColumnItemModal,
} from './Components/Actions/ColumnItems/AddColumnItemModal.jsx';


export {
  Modals,
} from './Components/modals/Modals';

export {ScreenSizeWarning} from './Components/modals/ScreenSizeWarning';

export {DismissableErrorMessage} from './Components/modals/DismissableErrorMessage.jsx';


/* Actions */

export {
  Exit,
} from './Components/Actions/cluster/Exit.jsx';

export {
  SaveCluster,
} from './Components/Actions/cluster/SaveCluster.jsx';


export {
  ImagePicker,
} from './Components/Actions/Pickers/ImagePicker.jsx';

export {
  Preview,
} from './Components/Actions/cluster/Preview';


export {
  GlobalSettingsToggle,
} from './Components/Actions/cluster/GlobalSettings';


export {
  Save,
} from './Components/Actions/cluster/Save';

export {
  AddTopLevelLinkItem,
} from './Components/Actions/topLevelLinks/AddTopLevelLinkItem';

export  {
  SubmenuSettings,
} from './Components/Actions/SubMenu/SubMenuSettings';

export  {
  SubMenuSpacing,
} from './Components/Actions/SubMenu/SubMenuSpacing';

export {
  ColumnGap,
} from  './Components/Actions/SubMenu/ColumnGap';

export {
  SubMenuPadding,
} from  './Components/Actions/SubMenu/SubMenuPadding';

export {
  LinkItemGlobalStyle,
  LinkItemCurrentSubMenuStyle,
} from './Components/Actions/LinkItem/LinkItemStyle.jsx';

export {
  DropDownType,
} from './Components/Actions/SubMenu/DropDownType';


export {
  JoinLeft,
} from './Components/Actions/Column/JoinLeft';

export {
  TopLevelLinkItemStyle,
} from './Components/Actions/topLevelLinks/TopLevelLinkItemStyle';

export {
  ImageBlockStyle,
} from './Components/Actions/ImageBlock/ImageBlockStyle.jsx';

export {
  GlobalSettings,
} from './Components/Actions/GlobalSettings/GlobalSettings.jsx';

export {
  DropDownMenuGlobalSettings,
} from './Components/Actions/GlobalSettings/DropDownMenuGlobalSettings';

// 
export {
  ImageBlockGlobalSettings,
} from './Components/Actions/GlobalSettings/ImageBlockGlobalSettings';

/* Global UI Components */
export * from './Components/UI/UI.jsx';
export {ToggleGroupSection} from './Components/UI/ToggleGroupSection';

/* Global UI Hooks */
export {useKbEscape} from './Components/UI/hooks/useKbEscape';

/*
  Icons
*/

export * from './Components/UI/icons/_index.js';

/////////////////////////////////
export {
  ImageAddIcon as AddImageMajor,
  PlusIcon as AddMajor,
  NoteAddIcon as AddNoteMajor,
  LayoutColumns2Icon as Columns2Major,
  TextInColumnsIcon as ColumnWithTextMajor,
  DeleteIcon as DeleteMajor,
  DockSideIcon as DockSideMajor,
  DragHandleIcon as DragHandleMinor,
  EditIcon as EditMajor,
  GlobeFilledIcon as GlobeMajor,
  ImageWithTextOverlayIcon as ImageWithTextOverlayMajor,
  LinkIcon as LinkMinor,
  MaximizeIcon as MaximizeMinor,
  MeasurementSizeIcon as MeasurementMinor,
  SettingsIcon as SettingsMajor,
  TextIcon as TextMajor,
  CheckIcon as TickMinor,
  ViewIcon as ViewMajor,
  ReplaceIcon as ReplaceMajor,
  ExitIcon,

} from '@shopify/polaris-icons';

export {
  Banner,
  Checkbox,
  DropZone,
  // Frame,
  Modal,
  RangeSlider,
  RadioButton,
  TextField,
} from '@shopify/polaris';


/* 
  Utils 
*/

export * from './Components/utils/utils.js';

// ./utils/utils
// in add image block jsx
export {v4 as uuid} from 'uuid';


/* Drag and drop Library */

export { 
  // DragDropContext,
  Draggable, 
  Droppable
} from 'react-beautiful-dnd';


// export {
  // 
  // find as _find,
  // 
  // cloneDeep as _cloneDeep,
  // findIndex as _findIndex,
// } from 'lodash';

