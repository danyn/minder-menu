

import { useEffect } from 'react';
// import { useRouteLoaderData } from "@remix-run/react";
import { useFetcher } from "@remix-run/react";
import {
  useLocalState,
} from '../FEATURE_INDEX.js'


export function useInitializeFetcher() {
  // const shopMegaMenuData = useRouteLoaderData("routes/app.megamenu");
  const fetcher = useFetcher({ key: "megamenu-init" });
  const [state, dispatch] = useLocalState();

  // console.log({fetcherData: fetcher.data, state: fetcher.state});
  
  
  useEffect(() => {
    /* Get data from shop metaobject */
    /* The feature just loaded into the browser */
    if(fetcher.state === 'loading' || fetcher.state === 'submitting' ){
      console.log({stateInEffect: fetcher.state});
    }
  
    if( fetcher.state === 'idle' && fetcher?.data ) {

      const jsonStringData = fetcher?.data?.payload?.data?.value;
      const dataId = fetcher?.data?.payload?.id;
      const dataSource = fetcher?.data?.dataSource;

      // console.log('get data for state')

      if(jsonStringData && dataId) {

        const data = JSON.parse(jsonStringData);

        /* use data from the shop's metaobject returned from the fetcher */
        dispatch({
          type: 'initialData',
          payload: {
            dataId,
            data,
            dataSource,
          }
        });
  
      } 
    }
  }, [fetcher.state]);

}