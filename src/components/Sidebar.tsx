import React from 'react'
import { Outlet } from 'react-router-dom'
import { IconClients, IconServer } from '../const/icons'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="logo-container">
          <img className="logo" src="https://grupomagenta.com.co/wp-content/uploads/2020/06/Recurso-5@2x-768x932.png" alt="logo" />
        </div>
        <div className="navigation">
          <div className="icon-container active">
            <div className="icon active">
              {IconServer}
            </div>
          </div>
          <div className="icon-container">
            <div className="icon">
              {IconClients}
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Sidebar