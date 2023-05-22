
import Package from '../../components/package/Package'
import useNavigatePackage from '../../hooks/useNavigatePackage';
import usePackage from './hook/usePackage'

const Paquete = () => {

    const { redireccionarCrear } = useNavigatePackage()

    usePackage();

    return (
        <div className="h-screen pt-6 flex flex-col">
            <div className="flex justify-between">
                <h1 className="general-title">Paquetes</h1>
                <div className="flex flex-col justify-center items-center mr-4">
                    <button
                        className="bg-primary-500 text-3xl rounded-full text-white"
                        onClick={() => redireccionarCrear()}
                    >
                        <div className="mx-[.6rem] my-[.005rem]">
                            +
                        </div>
                    </button>
                </div>
            </div>
            <Package />
        </div>
    )
}

export default Paquete