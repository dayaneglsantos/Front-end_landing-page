export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section)
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section)
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], img_grid = [] } = section

      if (text_grid.length > 0) {
        return mapTextGrid(section)
      }

      if (img_grid.length > 0) {
        return mapImageGrid(section)
      }
    }
    return section
  })
}

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { data: { attributes: { url: srcImg = '' } = '' } = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = ''
  } = section

  return {
    sectionId,
    component,
    title,
    text,
    srcImg,
    background
  }
}
export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = ''
  } = section

  return {
    sectionId,
    component,
    title,
    html,
    background
  }
}
export const mapTextGrid = (section = {}) => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = '',
    text_grid: grid = []
  } = section

  return {
    sectionId,
    component: 'section.section-grid-text',
    title,
    background,
    description,
    grid: grid.map((item) => {
      const { title = '', description = '' } = item
      return { title, description }
    })
  }
}

export const mapImageGrid = (section = {}) => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = '',
    img_grid: [{ image: { data: grid = [] } = {} } = {}] = []
  } = section

  return {
    sectionId,
    component: 'section.section-grid-image',
    title,
    background,
    description,
    grid: grid.map((img) => {
      const {
        attributes: { alternativeText: altText = '', url: srcImage = '' } = {}
      } = img
      return {
        srcImage,
        altText
      }
    })
  }
}
