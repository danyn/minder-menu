<button 
  className="MegaMenu-Save button button-add"
  onClick={(e) => {
    e.stopPropagation()
    // console.log('Save')
    dispatch({
      type: 'clusterAction',
      payload: {
        type: 'save',
      },
    })
  }}
>
  Save
</button>