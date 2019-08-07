import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

import RecipesList from '../RecipesList'
import IngredientsList from '../IngredientsList'

const Recipes = ({
  recipes,
  selectRecipe,
  deselectRecipe,
  loadingRecipes,
  ingredientsList
}) => (
  <S.Recipes role='main'>
    <RecipesList
      recipes={recipes}
      selectRecipe={selectRecipe}
      deselectRecipe={deselectRecipe}
      loadingRecipes={loadingRecipes}
    />
    <IngredientsList list={ingredientsList} />
  </S.Recipes>
)

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  selectRecipe: PropTypes.func.isRequired,
  deselectRecipe: PropTypes.func.isRequired,
  loadingRecipes: PropTypes.bool.isRequired,
  ingredientsList: PropTypes.array.isRequired
}

export default Recipes
