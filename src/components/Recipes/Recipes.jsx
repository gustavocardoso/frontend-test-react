import React from 'react'

import * as S from './styles'

import RecipesList from '../RecipesList'
import IngredientsList from '../IngredientsList'

const recipes = [
  {
    name: 'Risotto',
    type: 'Italian',
    cook_time: 60,
    ingredients: [
      'Rice',
      'Chicken Stock',
      'Parmesan Cheese',
      'White Wine',
      'Butter',
      'Salt',
      'Pepper',
      'Peas'
    ]
  },
  {
    name: 'Enchiladas',
    type: 'Mexican',
    cook_time: 50,
    ingredients: [
      'Tomato Sauce',
      'Tomato',
      'Corn Tortillas',
      'Cheddar Cheese',
      'Onion',
      'Olives',
      'Salt',
      'Chicken'
    ]
  },
  {
    name: 'Hummus',
    type: 'Middle Eastern',
    cook_time: 10,
    ingredients: ['Garlic', 'Chickpeas', 'Salt', 'Tahini', 'Hot Sauce']
  },
  {
    name: 'Pancakes',
    type: 'Breakfast',
    cook_time: 25,
    ingredients: [
      'Milk',
      'Flour',
      'Sugar',
      'Butter',
      'Baking Powder',
      'Baking Soda',
      'Egg',
      'Salt'
    ]
  },
  {
    name: 'Borscht',
    type: 'Russian',
    cook_time: 75,
    ingredients: [
      'Water',
      'Potato',
      'Beets',
      'Butter',
      'Onion',
      'Salt',
      'Celery',
      'Carrot',
      'Cabbage',
      'Pepper',
      'Vinegar',
      'Tomato'
    ]
  }
]

const ingredients = ['butter', 'salt', 'vinegar', 'meat', 'red pepper']

const Recipes = () => (
  <S.Recipes role='main'>
    <RecipesList recipes={recipes} />
    <IngredientsList list={ingredients} />
  </S.Recipes>
)

export default Recipes
