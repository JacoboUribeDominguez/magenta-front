import { Outlet } from 'react-router-dom'
import { IconClients, IconPackage, IconServer } from '../../const/icons'
import useSidebar from './hook/useSidebar'
import If from '../common/If/If';
import Then from '../common/If/Then';
import Else from '../common/If/Else';
import { ProgressSpinner } from 'primereact/progressspinner';
import { SidebarOption } from '../../models/enums/sidebar';

const Sidebar = () => {

  const {
    user,
    loading,
    redirect,
    optionActive,
  } = useSidebar();

  return (
    <If predicate={(user === null)}>
      <Then>
        <If predicate={!loading}>
          <Then>
            <div className="sidebar-container">
              <div className="sidebar">
                <div className="logo-container">
                  <img className="logo" src="https://grupomagenta.com.co/wp-content/uploads/2020/06/Recurso-5@2x-768x932.png" alt="logo" />
                </div>
                <div className="navigation">
                  <div className="icon-container active">
                    <div className={`icon ${optionActive === SidebarOption.HOME ? 'active' : ''}`}
                      onClick={() => redirect('/', SidebarOption.HOME)}
                    >
                      {IconServer}
                    </div>
                  </div>
                  <div className="icon-container">
                    <div 
                      className={`icon ${optionActive === SidebarOption.CLIENTS ? 'active' : ''}`}
                      onClick={() => redirect('/client', SidebarOption.CLIENTS)}
                    >
                      {IconClients}
                    </div>
                  </div>
                  <div className="icon-container">
                    <div 
                      className={`icon ${optionActive === SidebarOption.PACKAGE ? 'active' : ''}`}
                      onClick={() => redirect('/package', SidebarOption.PACKAGE)}
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
          </Then>
          <Else>
            <div className="w-screen h-screen flex justify-center items-center">
              <ProgressSpinner style={{ width: '100px', height: '100px' }} strokeWidth="4" fill="var(--surface-ground)" animationDuration="1s" />
            </div>
          </Else>
        </If>
      </Then>
    </If>
  )
}

export default Sidebar