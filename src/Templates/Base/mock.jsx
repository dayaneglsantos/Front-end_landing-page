import linksMock from '../../Components/NavLinks/mock'
import gridMock from '../../Components/GridText/mock'
import GridText from '../../Components/GridText'

export const mockBase = {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Teste',
    link: '#'
  },
  footerHtml: `<p>Teste do Footer</p>`
}
