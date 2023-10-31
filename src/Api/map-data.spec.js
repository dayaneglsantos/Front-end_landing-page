import { mapData } from './map-data'

describe('map-data', () => {
  it('should map data even if data do not exist', () => {
    const pagesData = mapData()[0]
    expect(pagesData.footerHtml).toBe('')
    expect(pagesData.slug).toBe('')
    expect(pagesData.title).toBe('')
  })
  it('should map data if data exist', () => {
    const pagesData = mapData([
      {
        footer_text: '<p>Teste</p>',
        slug: 'slug',
        title: 'Title',
        section: [1, 2, 3],
        menu: { id: 1 }
      }
    ])[0]

    expect(pagesData.footerHtml).toBe('<p>Teste</p>')
    expect(pagesData.slug).toBe('slug')
    expect(pagesData.title).toBe('Title')
  })
})
