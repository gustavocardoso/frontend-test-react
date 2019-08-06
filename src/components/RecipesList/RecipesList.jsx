import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Item = ({ recipe, index }) => (
  <S.Item id={`item-${index}`} className='item' data-selected='false'>
    <S.ItemContainer>
      <S.Title>{recipe.name}</S.Title>
      <S.Meta>
        Type: {recipe.type}
        <S.Time>Cook time: {recipe.cook_time}</S.Time>
      </S.Meta>
    </S.ItemContainer>
  </S.Item>
)

const RecipesList = ({ recipes }) => (
  <S.Container>
    {recipes.length > 0 && (
      <S.List>
        {recipes.map((recipe, index) => (
          <Item recipe={recipe} key={index} index={index} />
        ))}
      </S.List>
    )}
  </S.Container>
)

RecipesList.propTypes = {
  recipes: PropTypes.array.isRequired
}

export default RecipesList
