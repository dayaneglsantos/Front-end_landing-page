import { mapMenu, mapMenuLinks } from './map-menu'

describe('map-menu', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu()
    expect(menu.text).toBe('')
    expect(menu.link).toBe('')
    expect(menu.newTab).toBe(false)
  })
  it('should map menu to match keys and values required', () => {
    const menu = mapMenu({
      logo_link: '#home',
      logo_text: 'Home',
      open_in_new_tab: false,
      menu_links: [
        {
          link_text: 'About',
          url: '#about',
          open_in_new_tab: false
        },
        {
          link_text: 'contact',
          url: '#contact',
          open_in_new_tab: true
        }
      ]
    })
    expect(menu.text).toBe('Home')
    expect(menu.link).toBe('#home')
    expect(menu.newTab).toBe(false)
    expect(menu.links[0].newTab).toBe(false)
    expect(menu.links[0].children).toBe('About')
    expect(menu.links[0].href).toBe('#about')
  })

  it('should return a empty array if no links', () => {
    const links = mapMenuLinks()
    expect(links).toEqual([])
  })
  it('should map links if links passed', () => {
    const links = mapMenuLinks([
      {
        link_text: 'About',
        url: '#about',
        open_in_new_tab: false
      },
      {}
    ])
    expect(links[0].children).toBe('About')
    expect(links[0].href).toBe('#about')
    expect(links[0].newTab).toBe(false)
  })
})
