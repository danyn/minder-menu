import { useState } from "react";
import { 
  useFetcher,
} from "@remix-run/react";

import { authenticate } from "../../shopify.server";

import Feature from './Feature/Feature'

// import {

// } from './Feature/FEATURE_INDEX.js'



export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};


export default function MegaMenu() {
  const [showFeature, setShowFeature] = useState(false);

  return (

<div className="SingleLanding">
  <div className="content">
    <h3 className="flex-center">Check out our tutorials on you tube</h3>
    <div className="flex-center">
      
      <ul>
        <li>full playlist</li>
        <li>current trends in megamenu styles</li>
        <li>how to add use the minder drag and drop editor</li>
        <li>how to add a dropdown to your shopify store</li>
      </ul>
    </div>
    <div className="flex-center">
      <OpenButton 
        setShowFeature={setShowFeature}
      />
    </div>
  </div>

  {
    showFeature  && <Feature />
  }

</div>

  );
}

function OpenButton({setShowFeature}) {
  const fetcher = useFetcher({ key: "megamenu-init" });
  const isLoading = fetcher.state === 'loading' || fetcher.state === 'submitting'

  return (
<fetcher.Form 
  method="post"
  action="/megamenu-init"
  >
  <div onClick={()=>{
      setShowFeature(true);
    }}>
    <button 
      className="button button-add"
      >

      {isLoading ? 'loading': 'Open menu'}</button>
  </div>
</fetcher.Form>
  )
}


// const matches = useMatches()
// console.log({matches})