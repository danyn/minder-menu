

import { useEffect } from 'react';
import { useRouteLoaderData } from "@remix-run/react";
import {
  useLocalState,
} from '../FEATURE_INDEX.js'


export function useInitialize() {
  const shopMegaMenuData = useRouteLoaderData("routes/app.megamenu");

  console.log({shopMegaMenuData});
  
  const [state, dispatch] = useLocalState();
  
  useEffect(() => {
    /* Get data from shop metaobject */
    /* The feature just loaded into the browser */
    if(state && !state.data && !state.dataId) {
      console.log('get data for state')

      if(shopMegaMenuData?.payload?.id && shopMegaMenuData?.payload?.data) {
        const {id: dataId, data: jsonString } =  shopMegaMenuData.payload;
        console.log({jsonString})
        const data = JSON.parse(jsonString.value);

        /* use data from shop me taobject */
        dispatch({
          type: 'initialData',
          payload: {
            dataId,
            data,
          }
        });
  
      } 
    }
    // if you need to run a cleanup
    // if you have a race condition https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect
    // return () => connection.disconnect();
  }, []);

}