import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './Styles/Global-Style'
import theme from './Styles/theme'
import Home from './Templates/Home/index.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
