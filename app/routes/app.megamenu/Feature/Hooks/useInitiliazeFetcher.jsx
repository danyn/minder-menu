

import { useEffect } from 'react';
// import { useRouteLoaderData } from "@remix-run/react";
import { useFetcher } from "@remix-run/react";
import {
  useLocalState,
} from '../FEATURE_INDEX.js'


export function useInitializeFetcher() {
  // const shopMegaMenuData = useRouteLoaderData("routes/app.megamenu");
  const fetcher = useFetcher({ key: "init-megamenu" });
  const [state, dispatch] = useLocalState();

  console.log({fetcherData: fetcher.data, state: fetcher.state});
  
  
  useEffect(() => {
    /* Get data from shop metaobject */
    /* The feature just loaded into the browser */
    // if(fetcher.state === 'loading' || fetcher.state === 'submitting' )
    //&& !state?.data && !state?.dataId 
    if( fetcher.state === 'idle' && fetcher?.data ) {

      const jsonStringData = fetcher?.data?.payload?.data?.value;
      const dataId = fetcher?.data?.payload?.id;

      console.log('get data for state')
      if(jsonStringData && dataId) {

        console.log({jsonStringData})

        const data = JSON.parse(jsonStringData);

        /* use data from shop metaobject */
        dispatch({
          type: 'initialData',
          payload: {
            dataId,
            data,
            dataSource: fetcher?.data?.dataSource,
          }
        });
  
      } 
    }
    // if you need to run a cleanup
    // if you have a race condition https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect
    // return () => connection.disconnect();
  }, [fetcher.state]);

}