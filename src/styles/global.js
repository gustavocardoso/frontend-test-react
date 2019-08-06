import { createGlobalStyle } from 'styled-components'
import { theme } from 'styled-tools'

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  ::selection {
    background: transparent;
    text-shadow: none;
  }

  body {
    height: 100%;
    font: 16px/1.4 BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    color: ${theme('text.default')};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
