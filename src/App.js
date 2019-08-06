import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import Theme from './styles/config'

import TopBar from './components/TopBar'
import Footer from './components/Footer'
import Recipes from './components/Recipes'

function App () {
  return (
    <ThemeProvider theme={Theme}>
      <Fragment>
        <GlobalStyles />
        <TopBar />
        <Recipes />
        <Footer />
      </Fragment>
    </ThemeProvider>
  )
}

export default App
