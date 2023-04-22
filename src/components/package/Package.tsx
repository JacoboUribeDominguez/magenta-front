import { IconTrash } from '../../const/icons';
import useNavigatePackage from '../../hooks/useNavigatePackage';
import usePackages from './hook/usePackages';

const Package = () => {

    const { packages } = usePackages();
    const redireccionar = useNavigatePackage()
    const { redireccionarVer } = redireccionar;

    return (
        <div>
            {
                packages ? packages.map(packages => (
                    <div onClick={() => redireccionarVer(packages.id_paquete)} className="package-card">
                        <div 
                            className="absolute text-xl bg-black-500 text-white rounded-full px-1 py-1" 
                            style={{ top: '-12px', right: '-12px' }}
                        >
                            {IconTrash}
                        </div>
                        <h1 className="text-xl font-bold text-white">
                            {packages.nombre}
                        </h1>
                        <h5 className="mt-4 text-4xl text-white font-bold">
                            {packages.precio}
                        </h5>
                    </div>
                )) : <></>
            }
        </div>
    )
}

export default Package