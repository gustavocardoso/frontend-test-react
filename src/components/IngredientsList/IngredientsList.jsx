import React from 'react'
import PropTypes from 'prop-types'
import { Receipt } from '@material-ui/icons'

import * as S from './styles'

const Item = ({ ingredient }) => (
  <S.Item>
    <S.Ingredient>{ingredient}</S.Ingredient>
  </S.Item>
)

const IngredientsList = ({ list }) => (
  <S.Container>
    <S.Header>
      <Receipt className='icon-ingredients' />
      <S.Title>Ingredients</S.Title>
      <S.Counter>(0)</S.Counter>
    </S.Header>

    {list.length === 0 && (
      <S.HowTo>Select one or more recipes to see the ingredients list.</S.HowTo>
    )}

    {list.length > 0 && (
      <S.List>
        {list.map((ingredient, index) => (
          <Item ingredient={ingredient} key={index} />
        ))}
      </S.List>
    )}
  </S.Container>
)

IngredientsList.propTypes = {
  list: PropTypes.array.isRequired
}

export default IngredientsList
