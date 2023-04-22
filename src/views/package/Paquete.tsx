
import Package from '../../components/package/Package'
import useNavigatePackage from '../../hooks/useNavigatePackage';
import usePackage from './hook/usePackage'

const Paquete = () => {

    const { redireccionarCrear } = useNavigatePackage()

    usePackage();

    return (
        <div className="h-screen pt-6 flex flex-col">
            <h1 className="general-title">Paquetes</h1>
            <div className="flex justify-between pt-6">
                <button
                    className="bg-primary-500 px-3 py-1 text-3xl rounded-full text-white"
                    onClick={() => redireccionarCrear()}
                >
                    +
                </button>
            </div>
            <div className="px-20 py-5 grid grid-cols-4 gap-5 h-[55em] overflow-y-auto gap-y-9">
                <Package />
            </div>

        </div>
    )
}

export default Paquete