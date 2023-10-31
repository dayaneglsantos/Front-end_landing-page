export const mapMenu = (menu = {}) => {
  const {
    logo_link: link = '',
    logo_text: text = '',
    open_in_new_tab: newTab = false,
    menu_links: links = []
    // logo_img: {
    //   data: {
    //     attributes: { url: srcImg = '' }
    //   }
    // }
  } = menu

  const srcImg = menu?.logo_img?.data?.attributes?.url || ''

  return {
    srcImg,
    link,
    text,
    newTab,
    links: mapMenuLinks(links)
  }
}

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const {
      link_text: children,
      open_in_new_tab: newTab = false,
      url: href = ''
    } = item

    return {
      children,
      href,
      newTab
    }
  })
}
