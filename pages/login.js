import { TABS } from '@/constants/tabs.constant'
import AuthComponent from '@/src/components/signin/auth'
import React from 'react'

const Login = () => {
  return (
    <AuthComponent selectedTab={TABS.login}/>
  )
}

export default Login