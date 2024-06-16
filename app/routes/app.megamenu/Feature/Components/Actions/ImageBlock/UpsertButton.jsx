export function UpsertButton({
  mode,
  id,
  items,
  dispatch,
  currentValues,
}) {

  return (
<div 
  className='MegaMenu-AddImageBlock-Insert button button-add'
  onClick={(e) => {
    console.log('ImageBlocks::UpsertButton ->', 'onclick');
    e.stopPropagation();
    dispatch({
      type: 'imageBlock',
      payload: { 
        type: 'upsert',
        payload: {
          mode,
          id,
          items,
          currentValues,
        }
      }
    });
  }
  }
>
  {mode==='insert' ? 'Insert!!' : 'Update!!'}
</div>

  );

}