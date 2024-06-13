import {
  useLocalState,
  ActionTitle,
  EditMajor
} from '../../../FEATURE_INDEX.js';



export function EditTopLevelLink({linkItem}) {
  const dispatch = useLocalState('dispatch')

  return (
    <ActionTitle
      text={linkItem?.child?.text}
      Icon={EditMajor}
      type='Main'
      onClickIcon={() => {
        console.log('edit top level link')
      }}
    />
  );

}