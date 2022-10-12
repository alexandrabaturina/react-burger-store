import { createGlobalStyle } from "styled-components"
import { NavBar } from "./Components/NavBar"
import { Menu } from "./Components/Menu"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
      margin: 0;
      background-golor: #fcfbfc;
      font-family: Roboto;
      font-size: 20px;
      color: black
    }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3 {
    font-family: Pacifico;
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }

  input,
  button {
    font-family: inherit;
  }
`

const App = () => (
	<>
		<GlobalStyle />
		<NavBar />
		<Menu />
	</>
)

export default App
