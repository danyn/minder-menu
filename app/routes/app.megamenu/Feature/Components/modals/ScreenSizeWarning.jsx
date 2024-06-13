import {
  Banner,
} from '../../FEATURE_INDEX.js';

export function ScreenSizeWarning({
  text,
}) {

  return (
<div className='MegaMenu-ScreenSizeWarning'>
    <Banner
      status='warning'
    >
      <p>Some features will be outside your viewport while your window's width is less than 1226px.</p>
    </Banner>
</div>   
  )
}