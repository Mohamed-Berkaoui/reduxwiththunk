import React from 'react'
import { Outlet } from 'react-router'
import Navigator from '../components/Navigator'

function UserLayout() {
  return (
    <div>
        <Navigator/>
        <Outlet/>
    </div>
  )
}

export default UserLayout