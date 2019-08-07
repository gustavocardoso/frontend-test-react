import React, { Fragment, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import Theme from './styles/config'

import TopBar from './components/TopBar'
import Footer from './components/Footer'
import RecipesPanel from './components/Recipes'

function App () {
  const [recipes, setRecipes] = useState([])
  const [recipesSelected, setRecipesSelected] = useState([])
  const [ingredientsList, setIngredientsList] = useState([])
  const [loadingRecipes, setLoadingRecipes] = useState(false)

  useEffect(() => {
    setLoadingRecipes(true)

    const getRecipes = async () => {
      const response = await fetch('./data/recipes.json')
      const data = await response.json()
      setRecipes(data)

      setLoadingRecipes(false)
    }

    getRecipes()
  }, [])

  useEffect(
    () => {
      const generateIngredientsList = () => {
        let ingredients = []

        recipesSelected.forEach(id => {
          let recipeIngredients = recipes[id].ingredients

          ingredients = [...ingredients, ...recipeIngredients].sort()
          ingredients = [...new Set(ingredients)]
        })

        setIngredientsList(ingredients)
      }

      generateIngredientsList()
    },
    [recipesSelected, recipes]
  )

  const selectRecipe = id => {
    setRecipesSelected([...recipesSelected, id])
  }

  const deselectRecipe = id => {
    const newArr = recipesSelected.filter(e => e !== id)
    setRecipesSelected(newArr)
  }

  return (
    <ThemeProvider theme={Theme}>
      <Fragment>
        <GlobalStyles />
        <TopBar />
        <RecipesPanel
          recipes={recipes}
          selectRecipe={selectRecipe}
          deselectRecipe={deselectRecipe}
          loadingRecipes={loadingRecipes}
          ingredientsList={ingredientsList}
        />
        <Footer />
      </Fragment>
    </ThemeProvider>
  )
}

export default App
