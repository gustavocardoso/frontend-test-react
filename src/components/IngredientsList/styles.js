import styled from 'styled-components'
import { theme } from 'styled-tools'

export const Container = styled.section`
  width: 55%;
  background: ${theme('background.ingredients')};
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  color: ${theme('text.ingredientsHeader')};
  background: ${theme('background.ingredientsHeader')};
  padding: calc(${theme('layout.paddingDefault')} / 2) ${theme('layout.paddingDefault')};

  .icon-ingredients {
    margin-right: calc(${theme('layout.marginDefault')} / 2);
  }
`

export const Title = styled.h3`
  font-size: 1.2rem;
`

export const Counter = styled.span`
  display: inline-block;
  margin-left: calc(${theme('layout.marginDefault')} / 2);
`

export const HowTo = styled.p`
  font-size: 0.9rem;
  margin: calc(${theme('layout.marginDefault')} * 1.5);
  margin-bottom: 0;

  @media (${theme('mediaQuery.large')}) {
    font-size: 1.2rem;
  }
`

export const List = styled.ul`
  list-style-type: square;
  list-style-position: inside;
  padding: ${theme('layout.paddingDefault')};

  @media (${theme('mediaQuery.large')}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    flex-flow: row wrap;
    align-content: flex-start;
  }
`

export const Item = styled.li`
  font-size: 0.9rem;
  color: ${theme('bullet.ingredient')};
  padding: calc(${theme('layout.paddingDefault')} / 2);
  border-bottom: 1px solid ${theme('border.ingredient')};

  @media (${theme('mediaQuery.large')}) {
    width: 48%;
    font-size: 1.2rem;
  }

  &:hover {
    color: ${theme('text.ingredientHover')};
    background: ${theme('background.ingredientHover')};
  }
`

export const Ingredient = styled.span`
  color: ${theme('text.ingredient')};
`
