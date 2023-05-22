import Else from '../../components/common/If/Else'
import If from '../../components/common/If/If'
import Then from '../../components/common/If/Then'
import CreateHosting from '../../components/home/CreateHosting/CreateHosting'
import CrearDominio from '../../components/home/Dominios/CrearDominio/CrearDominio'
import Table from '../../components/home/Table'
import useHome from './hook/useHome'

const Home: React.FC = () => {


  const { 
    openCreateHosting, 
    isOpen, 
    hostings, 
    setIsOpen, 
    setOpenCreateHosting
  } = useHome()

  return (
    <div className="home-container flex flex-col h-screen">
      { isOpen && <CrearDominio cerrar={ () => setIsOpen(false) } /> }
      <div className="flex justify-between pt-6">
        <h1 className="general-title">Hostings</h1>
        <If predicate={(hostings !== null && hostings.length > 0 )}>
          <Then>
            <div className="flex justify-center items-center mr-5">
              <button className="bg-primary-500 px-3 py-1 text-3xl rounded-full text-white" onClick={() => setIsOpen(true)}>{isOpen ? 'x' : '+'}</button>
            </div>
          </Then>
        </If>
      </div>
      <If predicate={(hostings === null || hostings.length === 0 )}>
        <Then>
          <div className="flex flex-col justify-center items-center h-full">
            <If predicate={(openCreateHosting)}>
              <Then>
                <CreateHosting />
              </Then>
              <Else>
                <h1 className="w-full text-center font-semibold text-3xl">No tienes ningún hosting todavía!</h1>
                <h2 className="text-center mt-3 text-primary-800 opacity-70 text-lg">Crea tu primer hosting!</h2>
                <div className="flex justify-center mt-5">
                  <button className="bg-gradinat-primary-lr text-white py-2 px-4 rounded-md cursor-pointer" onClick={() => setOpenCreateHosting(true)}>Crear mi hosting!</button>
                </div>
              </Else>
            </If>
          </div>
        </Then>
        <Else>
          <Table />
        </Else>
      </If>
    </div>
  )
}

export default Home