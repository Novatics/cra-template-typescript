import { useHistory } from 'react-router-dom'

const NotFound = () => {
  const history = useHistory()

  const handleGoHome = (): void => history.push('/')

  return (
    <>
      <h1>Página não encontrada</h1>
      <h2>Não conseguimos encontrar uma rota para esta página</h2>
      <button type="button" onClick={handleGoHome}>
        Voltar para a home
      </button>
    </>
  )
}

export default NotFound
