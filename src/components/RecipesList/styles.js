import styled from 'styled-components'
import { theme } from 'styled-tools'

export const Container = styled.section`
  width: 45%;
`

export const List = styled.ul``

export const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  background: transparent;
  border-bottom: 1px solid ${theme('border.listItem')};
  padding: ${theme('layout.paddingDefault')};
  cursor: pointer;

  @media (${theme('mediaQuery.large')}) {
    padding: ${theme('layout.paddingDefault')} calc(${theme('layout.paddingDefault')} * 2);
  }

  &:hover {
    color: ${theme('text.listItemHover')};
    background: ${theme('background.listItemHover')};
  }

  &[data-selected='true'] {
    color: ${theme('text.listItemSelected')};
    background: ${theme('background.listItemSelected')};
    border-bottom: 1px solid ${theme('border.listItemSelected')};

    &:before {
      background: ${theme('border.listItemSelectedBefore')};
      border: 0;
    }
  }

  &:before {
    display: block;
    width: 3px;
    height: 60px;
    content: '';
    background: #ccc;
    margin-right: ${theme('layout.marginDefault')};
  }
`

export const ItemContainer = styled.div`
  width: 85%;
`

export const Title = styled.h2`
  font-size: 1rem;

  @media (${theme('mediaQuery.large')}) {
    font-size: 1.4rem;
  }
`

export const Meta = styled.p`
  font-size: 0.9rem;
  line-height: 1.3;

  @media (${theme('mediaQuery.large')}) {
    font-size: 1rem;
  }
`

export const Time = styled.span`
  display: block;

  @media (${theme('mediaQuery.large')}) {
    display: inline-block;

    &:before {
      display: inline-block;
      content: '-';
      margin: 0 calc(${theme('layout.marginDefault')} / 3);
    }
  }
`

export const MessageBox = styled.p`
  padding: ${theme('layout.paddingDefault')};

  @media (${theme('mediaQuery.large')}) {
    padding: ${theme('layout.paddingDefault')} calc(${theme('layout.paddingDefault')} * 2);
  }
`
