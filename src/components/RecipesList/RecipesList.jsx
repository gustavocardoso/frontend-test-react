import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Item = ({ recipe, index, selectRecipe }) => (
  <S.Item
    id={`item-${index}`}
    className='item'
    data-selected='false'
    onClick={selectRecipe}
  >
    <S.ItemContainer>
      <S.Title>{recipe.name}</S.Title>
      <S.Meta>
        Type: {recipe.type}
        <S.Time>Cook time: {recipe.cook_time}</S.Time>
      </S.Meta>
    </S.ItemContainer>
  </S.Item>
)

const RecipesList = ({ recipes, selectRecipe, deselectRecipe, loadingRecipes }) => {
  const handleSelectRecipe = e => {
    const recipeId = e.currentTarget.id.replace('item-', '')

    if (recipeId !== undefined) {
      let newStatus

      if (e.currentTarget.dataset.selected === 'false') {
        newStatus = true
        selectRecipe(recipeId)
      } else {
        newStatus = false
        deselectRecipe(recipeId)
      }

      e.currentTarget.setAttribute('data-selected', newStatus)
    }
  }

  const displayMessages = () => {
    if (recipes.length === 0 && loadingRecipes === true) {
      return <S.MessageBox>Loading recipes!</S.MessageBox>
    } else if (recipes.length === 0 && loadingRecipes === false) {
      return <S.MessageBox>No recipes were found!</S.MessageBox>
    }
  }

  return (
    <S.Container>
      {displayMessages()}

      {recipes.length > 0 && (
        <S.List>
          {recipes.map((recipe, index) => (
            <Item
              recipe={recipe}
              key={index}
              index={index}
              selectRecipe={handleSelectRecipe}
            />
          ))}
        </S.List>
      )}
    </S.Container>
  )
}

RecipesList.propTypes = {
  recipes: PropTypes.array.isRequired,
  selectRecipe: PropTypes.func.isRequired,
  loadingRecipes: PropTypes.bool.isRequired
}

export default RecipesList
