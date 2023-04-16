import CrearDominio from '../../components/home/Dominios/CrearDominio/CrearDominio'
import Table from '../../components/home/Table'
import useHome from './hook/useHome'

const Home: React.FC = () => {


  const { setIsOpen, isOpen } = useHome()
  

  return (
    <div className="home-container">
      { isOpen && <CrearDominio cerrar={ () => setIsOpen(false) } /> }
      <div className="flex justify-between">
        <h1 className="home-title">Hostings</h1>
        <div className="flex justify-center items-center mr-5">
          <button className="bg-primary-500 px-3 py-1 text-3xl rounded-full text-white" onClick={() => setIsOpen(true)}>{isOpen ? 'x' : '+'}</button>
        </div>
      </div>
      <Table />
    </div>
  )
}

export default Home