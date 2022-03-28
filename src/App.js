import Feed from './containers/Feed'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Feed />
    </>
  )
}

export default App
