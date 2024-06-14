/*
  Functions for parsing js style declarations into valid css strings
  Also for Traversing a consistent structure to yield all styles in nested objets
*/

/**
 * 
 * @param {*} styles A group of css objects ex {column: {marginTop: '5px',}, columnContainer:{},}
 * @param {*} id the id for the group based on the dom block
 * 
 *  @returns css rull ex .column-23dr-4frt-rty6-gty7 { margin-top: 5px }
 */
export function parseStyleObjects(styles, id='', prefix='') {
  let s = ''
  for (const [key, value] of Object.entries(styles)) {
    /* 
      the key is the css selector that gets joined with the id and prefix -> .selector{}
      parseToCss outputs the declaration which is all css rules inside the selector -> {color: red, ...}
    */

    s += `.${prefix ? prefix + '-' : ''}${key}${id ? '-' + id : ''} ${parseToCss(value)} `
  }
  return s;
}


/**
 * Crawl through all items and -> Directly Nested <- items
 * Recursive function.
 * @param {*} tree 
 * @returns 
 */
export function traverseJsonTree(tree) {
  let s = ''
  openStyleProps(tree);
  return s

  function openStyleProps(obj) {

    if (obj.hasOwnProperty("list")) {

      if(obj.list.hasOwnProperty('className') && obj.list.hasOwnProperty('style')) {
        s += parseOwnedStyleObjects(obj.list)
      } 

      if(Array.isArray(obj?.list?.items)) {
        obj.list.items.forEach(item => {
          if(item.hasOwnProperty("className") && item.hasOwnProperty('style')) s += parseOwnedStyleObjects(item)
        })
        obj.list.items.forEach(openStyleProps)
      }
    } 
    return obj
  }

}
/*

*/

function parseOwnedStyleObjects(item , prefix='') {
  // console.log('parseOwnedStyleObjects', {item})
  let s = ''
  const {className: ownerClassName, id, style } = item

  // console.log('parseOwnedStyleObjects', {item, id, ownerClassName, style})

  if(!id) throw new Error(`Tree error: ${ownerClassName} has no id` )

  /* The key is a className */
  for (const [key, value] of Object.entries(style)) {
    const parentSelector = `#${ownerClassName}-${id}`
    if (key === ownerClassName) {
      /* The rule applies to this node */
      // TODO increase specificity ex. #megamenu parentSelector
      s += `${parentSelector} ${parseToCss(value)}`
    } else {
      /* The rule applies to child nodes */
      s += `${parentSelector} .${key} ${parseToCss(value)}`
    }
  }
  // console.log('S', {s})
  return s;
}


/**
 * 
 * @param {*} styleObject ex: {paddingTop: '2px',}
 * @returns css declaration ex {padding-top: 2px;}
 * 
 */
function parseToCss(styleObject) {
  /* Use string manipulation */
  const _styleObject = JSON.stringify(styleObject)
  /* Remove white space and quotes */
  const _cssString = _styleObject.replace(/(\r\n|\n|\r|['"])/gm, "");
  /* Get an array of javascript style declarations */
  const cssArray = _cssString.split(',');

  let output = '';

  cssArray.forEach((_declaration, i) => {
      /* Get the property and value */
      const declaration = _declaration.split(":");
  
      /* Remove the camel case, place a dash */
      const property = declaration[0]
      .trim()
      .replace(/([a-z])([A-Z])/, "$1-$2")
      .toLowerCase();

      /* remove whitespace at edges */
      const value = declaration[1].trim()

      output += ` ${property}: ${value}${ i < cssArray.length - 1 ? ';' : ''} `

  });
  /* New string of valid css */
  return output;
}
/**
 * Object traversal that parses out style props into valid css
 * @param {*} obj a consistent structure of nested styles in items or columns
 * @returns one long string of valid css rules
 */
export function traverseNestedStyles(obj) {
  let s = ''
  openAllStyleProps(obj);
  return s

  function openAllStyleProps(obj) {
    if (obj.hasOwnProperty("items") && Array.isArray(obj?.items)) {
      obj.items.forEach(item => {
        s += parseStyleObjects(item?.style, item.id, 'megaMenu')
      })
      obj.items.forEach(openAllStyleProps)
    } else if (obj.hasOwnProperty("columns") && Array.isArray(obj?.columns)) {
      obj.columns.forEach(item => {
        s += parseStyleObjects(item?.style, item.id, 'megaMenu')
      })
      obj.columns.forEach(openAllStyleProps)
    }
    return obj
  }
}
// https://stackoverflow.com/questions/75293199/how-to-recursively-iterate-through-a-nested-object-for-a-specific-key
/* CSS Todos

  when the save action happens there will be special cases from style options

  1. column.styleOptions.joinLeft
    - when enabled is true write negative margin
      .column-id {
        marginLeft: -topLevelLink.style.columnContainer.columnGap
      }

*/
