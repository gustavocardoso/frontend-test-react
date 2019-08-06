import styled from 'styled-components'
import { theme } from 'styled-tools'

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: ${theme('text.footer')};
  background: ${theme('background.footer')};
  padding: ${theme('layout.paddingDefault')};

  @media (min-width: $media-desktop) {
    font-size: 1.2rem;
    padding: calc(${theme('layout.paddingDefault')} * 2);
  }

  a {
    color: ${theme('link.footer')};
  }

  .icon-footer {
    font-size: 2rem;
    margin-right: calc(${theme('layout.marginDefault')} / 2);
  }
`
