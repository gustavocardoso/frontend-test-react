import React from 'react'
import { Restaurant } from '@material-ui/icons'

import * as S from './styles'

const TopBar = () => (
  <S.TopBar>
    <Restaurant className='icon-header' />
    <S.PageTitle>
      Recipes <span>List</span>
    </S.PageTitle>
  </S.TopBar>
)

export default TopBar
