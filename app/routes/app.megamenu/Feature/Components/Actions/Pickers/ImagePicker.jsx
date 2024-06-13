import {
  useLocalState,
  DropZone,
  /* Icons */
  AddImageMajor,
  ReplaceMajor,
} from '../../../FEATURE_INDEX.js';



export function ImagePicker ({
  imageFile={}, 
  setImageFile,
  cdnUrl = false,
  className,
}) {
    const dispatch = useLocalState('dispatch')

    let src =  false;
    // if(cdnUrl) {
    //   src = cdnUrl
    // } else if (imageFile.objectUrl ) {
    //   src = imageFile.objectUrl
    // }

    if(imageFile.url){
      src = imageFile.url
    }


  return (
<div className={className}>
  <DropZone
    allowMultiple={false}
    onDrop={(_dropFiles, acceptedFiles, _rejectedFiles)=>{
      onDrop({_dropFiles, acceptedFiles, _rejectedFiles, setImageFile, dispatch})
    }}
  >
    <ImagePreview src={src} />
  </DropZone>
</div>  
  );
}


/**
 * Handle the drop zone drop
 * @param {*} param0 
 * @returns 
 */
function onDrop({_dropFiles, acceptedFiles, _rejectedFiles, setImageFile, dispatch}) {

  /* Accepted file types */
  const validImageTypes = [
    "image/gif",
    "image/jpeg",
    "image/png",
    "image/svg+xml",
  ];
  /* Choose the first file */
  const file = acceptedFiles[0];

  /* Inform the user that the file is not accepted */
  if(!validImageTypes.includes(file.type)) {
  const _type = file.type || 'is not supported'

    // console.warn('invalid file type', file.type)
    // console.log('dipatch',{dispatch,})
    dispatch({
      type:'errorMessaging',
      payload: {
        type: 'open',
        payload: {
          message: `Invalid file type ${file.type}. Please upload ${validImageTypes.join(', ')}`
        }
      }
    })
    return;
  }
  
  /** Treat SVG as FILE for SHOPIFY API **/
  const resource = file.type === "image/svg+xml" ? "FILE" : "IMAGE";

  // Set object url  window.URL.createObjectURL(myFile)
  setImageFile({
      file,
      resource,
      // objectUrl: window.URL.createObjectURL(file)
      url: window.URL.createObjectURL(file)
    });
}

/**
 * Show 'new' || 'existing
 * @param {*} param0 
 * @returns 
 */
function ImagePreview({src, editable=false}) {
  return (
<div className='MegaMenu-AddImageBlock-DropZone flex-center'>
{
  src != false?
  
  <div>
    <img src={src} />
    <div className="ImagePicker-Image-Overlay">
      {
        /* on hover show this on top */
        editable && <ReplaceMajor/>
      }
    </div>
  </div> 
  :

  <div className='Icon AppIcon' style={{
    height: '100px',
    width: '100px',
    background: '#12b383',
    color: 'white',
    borderRadius: '7px',

  }}>
    <AddImageMajor/>
  </div>
}

</div>
);
}
