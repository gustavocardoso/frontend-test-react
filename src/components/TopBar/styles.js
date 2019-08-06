import styled from 'styled-components'
import { theme } from 'styled-tools'

export const TopBar = styled.header`
  display: flex;
  align-items: center;
  background: ${theme('background.header')};
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
  padding: ${theme('layout.paddingDefault')};

  @media (${theme('mediaQuery.large')}) {
    padding: ${theme('layout.paddingDefault')} calc(${theme('layout.paddingDefault')} * 2);
  }

  .icon-header {
    width: 2rem !important;
    height: 2rem !important;
    color: ${theme('icon.header')};
    margin-right: calc(${theme('layout.marginDefault')} / 2);
  }
`

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: ${theme('text.pageTitle')};
  letter-spacing: -1px;

  span {
    font-weight: 400;
  }
`
