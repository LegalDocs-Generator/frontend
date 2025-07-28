
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'

const Main = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-0 md:ml-0">
        <Outlet />
      </div>
    </div>
  )
}

export default Main
