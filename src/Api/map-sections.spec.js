import {
  mapSectionContent,
  mapTextGrid,
  mapSectionTwoColumns,
  mapSections,
  mapImageGrid
} from './map-sections'

import pagesData from './data.json'

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections()
    expect(data).toEqual([])
  })
  it('should render section with correct data', () => {
    const data = mapSections(pagesData.data[0].attributes.section)
    expect(data[0].title).toBe('JANUARY BRINGS US FIREFOX 85')
  })
  it('should render section with correct data', () => {
    const noTextOrImage = mapSections([
      {
        __component: 'section.section-grid'
      }
    ])
    expect(noTextOrImage).toEqual([
      {
        __component: 'section.section-grid'
      }
    ])
    const withNoComponent = mapSections([{}])
    expect(withNoComponent).toEqual([{}])
  })

  it('should test section.section-grid with no text_grid or image_grid', () => {
    const data = mapSections([
      {
        __component: 'section.section-grid',
        img_grid: [
          {
            image: { data: [{ attributes: { alternativeText: '', url: '' } }] }
          }
        ]
      }
    ])
  })

  // SECTION TWO COLUMNS
  it('should map section two columns with no data', () => {
    const data = mapSectionTwoColumns()

    expect(data.text).toBe('')
    expect(data.background).toBe(false)
    expect(data.title).toBe('')
    expect(data.srcImg).toBe('')
  })
  it('should map section two columns with respect values', () => {
    const data = mapSectionTwoColumns({
      title: 'Título',
      description: 'Descrição',
      image: {
        data: {
          attributes: {
            url: 'image.svg'
          }
        }
      },
      metadata: {
        background: true
      }
    })

    expect(data.text).toBe('Descrição')
    expect(data.background).toBe(true)
    expect(data.title).toBe('Título')
    expect(data.srcImg).toBe('image.svg')
  })

  // SECTION CONTENT
  it('should map section content with no data', () => {
    const data = mapSectionContent()

    expect(data.html).toBe('')
    expect(data.background).toBe(false)
    expect(data.title).toBe('')
  })
  it('should map section content with respect values', () => {
    const data = mapSectionContent({
      title: 'Título 2',
      content: 'Conteudo',
      metadata: {
        background: true
      }
    })

    expect(data.html).toBe('Conteudo')
    expect(data.background).toBe(true)
    expect(data.title).toBe('Título 2')
  })

  // SECTION TEXT GRID
  it('should map text grid with no data', () => {
    const data = mapTextGrid()

    expect(data.description).toBe('')
    expect(data.background).toBe(false)
    expect(data.title).toBe('')
    expect(data.grid).toEqual([])
  })
  it('should map text grid whith respect values', () => {
    const data = mapTextGrid({
      title: 'Grid Section',
      description: 'Uma breve descrição',
      metadata: {
        background: true
      },
      img_grid: [],
      text_grid: [
        {
          title: 'Teste 1',
          description: 'Descrição 1'
        },
        {
          title: '',
          description: ''
        }
      ]
    })

    expect(data.description).toBe('Uma breve descrição')
    expect(data.background).toBe(true)
    expect(data.title).toBe('Grid Section')
    expect(data.grid[0].title).toBe('Teste 1')
    expect(data.grid[0].description).toBe('Descrição 1')
    expect(data.grid[1].title).toBe('')
    expect(data.grid[1].description).toBe('')
  })

  //SECTION IMAGE GRID
  it('should map image grid whith no data', () => {
    const data = mapImageGrid()

    expect(data.description).toBe('')
    expect(data.background).toBe(false)
    expect(data.title).toBe('')
    expect(data.grid).toEqual([])
  })

  it('should map image grid whith respect values', () => {
    const data = mapImageGrid({
      title: 'Image grid',
      description: 'Descrição do image grid',
      metadata: {
        background: true
      },
      text_grid: [],
      img_grid: [
        {
          id: 3,
          image: {
            data: [
              {
                attributes: {
                  alternativeText: 'Texto alt',
                  url: 'img.jpg'
                }
              },
              {
                attributes: {
                  alternativeText: '',
                  url: ''
                }
              }
            ]
          }
        }
      ]
    })

    expect(data.description).toBe('Descrição do image grid')
    expect(data.background).toBe(true)
    expect(data.title).toBe('Image grid')
    expect(data.grid[0].altText).toBe('Texto alt')
    expect(data.grid[0].srcImage).toBe('img.jpg')
    expect(data.grid[1].altText).toBe('')
    expect(data.grid[1].srcImage).toBe('')
  })
})
