import { TABS } from '@/constants/tabs.constant'
import AuthComponent from '@/src/components/signin/auth'
import React from 'react'

const Signup = () => {
  return (
    <AuthComponent selectedTab={TABS.signup}/>
  )
}

export default Signup