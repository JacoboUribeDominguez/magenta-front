import { IconTrash } from '../../const/icons';
import useNavigatePackage from '../../hooks/useNavigatePackage';
import { Package } from '../../models/commonPackage';
import usePackages from './hook/usePackages';

const Packages = () => {

    const { packages, handleRemove } = usePackages();
    const redireccionar = useNavigatePackage()
    const { redireccionarVer } = redireccionar;

    return (
        <div className="px-20 py-5 grid grid-cols-4 gap-5 h-[55em] overflow-y-auto gap-y-9">
            {
                packages ? packages.map((package_element: Package) => (
                    <div className="package-card">
                        <div 
                            className="absolute text-xl bg-black-500 text-white rounded-full px-1 py-1" 
                            style={{ top: '-12px', right: '-12px' }}
                            onClick={() => handleRemove(package_element.id_paquete)}
                        >
                            {IconTrash}
                        </div>
                        <div className="flex flex-col justify-center items-center" onClick={() => redireccionarVer(package_element.id_paquete)}>
                            <h1 className="text-xl font-bold text-white">
                                {package_element.nombre}
                            </h1>
                            <h5 className="mt-4 text-4xl text-white font-bold">
                                {package_element.precio}
                            </h5>
                        </div>
                    </div>
                )) : <></>
            }
        </div>
    )
}

export default Packages