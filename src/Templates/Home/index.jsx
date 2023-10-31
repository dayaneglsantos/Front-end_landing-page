import { useEffect, useRef, useState } from 'react'

import Base from '../Base'
import { mapData } from '../../Api/map-data'
import PageNotFounf from '../PageNotFound'
import Loader from '../Loader'
import GridTwoColumns from '../../Components/GridTwoColumns'
import GridContent from '../../Components/GridContent'
import GridText from '../../Components/GridText'
import GridImage from '../../Components/GridImage'
import config from '../../Config'

const Home = () => {
  const [data, setData] = useState([])
  const isMounted = useRef(true)

  useEffect(() => {
    const load = async () => {
      try {
        const jsonData = await fetch(config.url).then((res) => res.json())
        const { attributes } = jsonData.data[0]

        const pageData = mapData([attributes])
        console.log(pageData)

        setData(() => pageData[0])
      } catch (e) {
        setData(undefined)
      }
    }

    if (isMounted.current === true) {
      load()
    }

    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`
    }

    if (data && data.title) {
      document.title = `${config.defaultSlug} | ${config.siteName}`
    }
  }, [data])

  if (data === undefined) {
    return <PageNotFounf />
  }

  if (data && !data.slug) {
    return <Loader />
  }

  const { menu, footerHtml, section } = data
  const { link, text, links, srcImg } = menu

  return (
    <>
      <Base
        logoData={{ text, srcImg, link }}
        footerHtml={footerHtml}
        links={links}
      >
        {section.map((sec, index) => {
          const { component } = sec

          if (component === 'section.section-two-columns') {
            return <GridTwoColumns {...sec} key={index} />
          }
          if (component === 'section.section-content') {
            return <GridContent {...sec} key={index} />
          }
          if (component === 'section.section-grid-text') {
            return <GridText {...sec} key={index} />
          }
          if (component === 'section.section-grid-image') {
            return <GridImage {...sec} key={index} />
          }
        })}
      </Base>
    </>
  )
}
export default Home
