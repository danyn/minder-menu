import { useFetcher } from "@remix-run/react";
import {
  useLocalState,
  Action,
  /*Icons*/ 
  SaveIcon,
} from  '../../../FEATURE_INDEX.js';


export function Save() {
  const [state, dispatch] = useLocalState();
  const fetcher = useFetcher({ key: "megamenu-update" });

  console.log({FETCHER_DATA: fetcher.data});

  return (
<div className="MegaMenu-Save-Container" >
  <Action
    Icon={SaveIcon}
    text='Save'
    outlined={true}
    small={true}
    inverted={true}
    onClick={(e) => {
      // https://remix.run/docs/en/main/hooks/use-fetcher#fetchersubmitformdata-options
      e.stopPropagation();

      const variables = {
        id: state.dataId,
        metaobject: {
          fields: [
            {
              key: 'data',
              value: JSON.stringify(state.data),
            }
          ],
        }
      }

      

      const GQLvariables = JSON.stringify(variables);

      console.log({variables, GQLvariables});

      // Submit raw JSON
      fetcher.submit(
        GQLvariables,
        {
          action: "/megamenu-update",
          method: "POST",
          encType: "application/json",
        }
      );


      dispatch({
        type: 'clusterAction',
        payload: {
          type: 'save',
          payload: {},
        }
      })
    }}  
  />

</div>
  );
}