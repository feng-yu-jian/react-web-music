import React, { memo } from 'react'
import { HeaderCategory } from './style'

import AppNavBar from '@/components/nav-bar'
import initLoginInfo from '@/config/token.js'
import { setLoginInfo , getLoginInfo} from '@/utils/secret-key'
import { getLoginProfileInfo } from '@/components/theme-login/store/actionCreator'

import { renderRoutes } from 'react-router-config'
import { useChangeDropBoxState , useGlobalKeyboardEvent} from '@/hooks/change-state'
import { useDispatch } from 'react-redux'

export default memo(function FDiscover(props) {
  const { route } = props
  const dispatch = useDispatch()

  useGlobalKeyboardEvent()

  const initLogin = () => {
    // 存在登录信息
    if (localStorage.getItem('loginInfo') != null) {
      const {username, password} = getLoginInfo('loginInfo')
      username && password && dispatch(getLoginProfileInfo(username, password))
    }
    // 没有登录或者token失效
    else {
      setLoginInfo('loginInfo', initLoginInfo)
    }
  }
  initLogin()

  return (
    <HeaderCategory onClick={useChangeDropBoxState()}>
      <AppNavBar  />
      {renderRoutes(route.routes)}
    </HeaderCategory>
  )
})
