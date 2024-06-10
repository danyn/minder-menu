
export function Video ({src}) {
  return (
<div className="video-responsive">
  <video
    width='400'
    height='300'
    controls
  >
    <source src={src} type="video/mp4"/>
  </video>
</div>
  );
}