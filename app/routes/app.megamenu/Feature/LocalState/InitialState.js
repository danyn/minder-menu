import {
  uuid,
} from  '../../../app._index/APP/dependencies.js';

export const classNames = {
  mainNav: 'MainNav',
  
  topLevelLink: {
    container: 'TopLevelLinkContainer',
    item: 'TopLevelLink',
    anchor: 'TopLevelLinkAnchor',
  },
  column: {
    item:  'Column',
    container: 'ColumnContainer'
  },
  link: {
    item: 'LinkItem',
    anchor: 'LinkItemAnchor',
  },
  imageBlock: {
    container: 'ImageBlockContainer',
    title: 'ImageBlockTitle',
    description: 'ImageBlockDescription',
    Cta:  'ImageBlockCta',
    CtaIcon: 'imageBlockCtaIcon',
    image: {
      image: 'ImageBlockImage',
      container: 'ImageBlockImageContainer',
    }
  }
}

export function newMegaMenu() {

  return {
    id: uuid(),
    tagName: 'nav',
    className: classNames.mainNav,
    classList: classNames.mainNav,
    list: {
      id: uuid(),
      tagName: 'ul',
      className: classNames.topLevelLink.container,
      classList: classNames.topLevelLink.container,
      items: [],
    },
  }
}

export function newTopLevelLinkItem({id}) {
  return {
    id,
    className: classNames.topLevelLink.item,
    classList: classNames.topLevelLink.item,
    tagName: 'li',
    child: {
      id: uuid(),
      className: classNames.topLevelLink.anchor,
      classList: classNames.topLevelLink.anchor,
      tagName: 'a',
      url: 'https://maybe-relative-maybe-full/location',
      text: `link-${id.slice(0,4)}`,
    },
    list: false,
    meta: {
      type: 'topLevel',
      subMenuType: {
        shape: 'fullwidth',
        // shape: 'bubble',
      }
    },
    // columns: [],
    // TODO this needs to be on its node in the json tree
    style: {},
    styleOptions: {},
  }
}
export function newLinkItem({id, text, url}) {
  return {
    id,
    className: classNames.link.item,
    classList: classNames.link.item,
    tagName: 'li',
    style: {},
    meta: {
      type: 'menuItem',
      hasImageBlock: false,
    },
    styleOptions: {
      hasCustomSizing: false,
    },
    child: {
      id: uuid(),
      tagName: 'a',
      className: classNames.link.anchor,
      classList: classNames.link.anchor,
      text: `item-${id.slice(0,4)}`,
      url,
    }
  }
}

export function newColumnContainer({id}) {
  return {
    id,
    className: classNames.column.container,
    classList: `${classNames.column.container} flex-columns flex-columns-1`,
    tagName: 'div',
    items: [],
    meta: {
      subMenuType: {
        shape: 'fullwidth',
        hasPointer: false,
      },
    },
    style: {
      [classNames.column.container]: {
        columnGap: '6px',
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingRight: '0px',
        paddingLeft: '0px',
      }
    },
    styleOptions: {
      [classNames.link.item]: {
        useCustomStyle: false,
      },
    },
  };
}

export function newColumn({id}) {
  return {
    list: {
      id,
      className: classNames.column.item,
      classList: `${classNames.column.item} flex-column`,
      tagName: 'ul',
      items: [],
      style: {},
      styleOptions: {
        customWidth: {
          enabled: false,
          _style: false,
        },
        joinLeft: {
          enabled: false,
          _style: false,
        },
      }
    }
  }
}



export function newImageBlock(payload) {
  const {title, description, CTA, imgSrc} = payload;

  return {
    hasStyleRules: false,
    role: 'imageBlock',
    meta : {type: 'imageBlock'},
    id: uuid(),
    container: {
      className: classNames.imageBlock.container,
      classList: classNames.imageBlock.container,
      tagName: 'div',
    },
    items: [
      {
        id: uuid(),
        role: 'image',
        className: classNames.imageBlock.image.image,
        classList: classNames.imageBlock.image.image,
        tagName: 'img',
        url: imgSrc,
        alt: '',
        style: {},
        container: {
          id: uuid(),
          tagName: 'div',
          className: classNames.imageBlock.image.container,
          classList: classNames.imageBlock.image.container,
        },
      },
      {
        id: uuid(),
        role: 'title',
        className: classNames.imageBlock.title,
        classList: classNames.imageBlock.title,
        tagName:'div',
        text: title,
        style: {},
      },
      {
        id: uuid(),
        role: 'description',
        className: classNames.imageBlock.description,
        classList: classNames.imageBlock.description,
        tagName: 'div',
        text: description,
        style: {},
      },
      {
        id: uuid(),
        role: 'CTA',
        className: classNames.imageBlock.Cta,
        classList: classNames.imageBlock.Cta,
        tagName: 'div',
        text: CTA,
        style: {},
      },
    ],
  };
}

/* Try new creation functions here  */

export function newImageBlockFromItems(items) {
  // const {title, description, CTA, imgSrc} = payload;

  return {
    hasStyleRules: false,
    role: 'imageBlock',
    meta : {type: 'imageBlock'},
    id: uuid(),
    container: {
      className: classNames.imageBlock.container,
      classList: classNames.imageBlock.container,
      tagName: 'div',
    },
    items,
  };
}

/**
  Structures
 */

export const structures = {
  imageFile: {
    file: undefined,
    resource: undefined,
    objectUrl: undefined,
  }
};


export function getNewImageBlockItems() {
  return  [
      {
        className: classNames.imageBlock.image.image,
        url: undefined,
        id: uuid(),
      },
      {
        className: classNames.imageBlock.title,
        text: "Title",
        id: uuid(),
      },
      {
        className: classNames.imageBlock.description,
        text: "A short description",
        id: uuid(),
      },
      {
        className: classNames.imageBlock.Cta,
        text: "Call to action",
        id: uuid(),
      }
    ]
}
