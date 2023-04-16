import { Outlet } from 'react-router-dom'
import { IconClients, IconPackage, IconServer } from '../../const/icons'
import useSidebar from './hook/useSidebar'
import Login from '../../views/Login/Login';

const Sidebar = () => {

  const { 
    user,
    redireccionar, 
    volver 
  } = useSidebar();

  if(user){
    return <Login />
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="logo-container">
          <img className="logo" src="https://grupomagenta.com.co/wp-content/uploads/2020/06/Recurso-5@2x-768x932.png" alt="logo" />
        </div>
        <div className="navigation">
          <div className="icon-container active">
            <div className="icon active"
              onClick={() => volver()}
            >
              {IconServer}
            </div>
          </div>
          <div className="icon-container">
            <div className="icon"
              onClick={() => redireccionar('/client')}
            >
              {IconClients}
            </div>
          </div>
          <div className="icon-container">
            <div className="icon"
              onClick={() => redireccionar('/package')}
            >
              {IconPackage}
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