import React from 'react'
import { Info } from '@material-ui/icons'

import * as S from './styles'

const Footer = () => (
  <S.Footer>
    <Info className='icon-footer' />
    <p>
      PayByPhone's Frontend Code Test
      <br />
      Developed by{' '}
      <a
        href='https://github.com/gustavocardoso'
        target='_blank'
        rel='noopener noreferrer'
      >
        Gustavo Cardoso
      </a>
      <br />
      Repository:{' '}
      <a
        href='https://github.com/gustavocardoso/frontend-test'
        target='_blank'
        rel='noopener noreferrer'
      >
        https://github.com/gustavocardoso/frontend-test
      </a>
    </p>
  </S.Footer>
)

export default Footer
