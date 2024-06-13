import  {
  ToggleGroupSection,
  ImageBlockStyle,
} from '../../__index.js';

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