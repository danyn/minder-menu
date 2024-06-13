import  {
  ToggleGroupSection,
  ImageBlockStyle,
} from '../../../FEATURE_INDEX.js';

export function ImageBlockGlobalSettings() {
  return (
<div className="MegaMenu-ImageBlockGlobalSettings">
  <ToggleGroupSection
    title='All image blocks'
  >
    <ImageBlockStyle/> 
  </ToggleGroupSection>
</div>   
  )
}