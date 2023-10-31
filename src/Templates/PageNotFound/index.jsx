import GridContent from '../../Components/GridContent'

const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html='<p>Página não encontrada. Clique <a href="/">aqui</a> para voltar a página principal.</p>'
    />
  )
}

export default PageNotFound
