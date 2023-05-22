import useFetch from "../../../hooks/useFetch"
import useRedux from "../../../hooks/useRedux"

const usePackages = () => {

  const { getPackages } = useRedux()
  const { deleteUrl } = useFetch();

  const handleRemove = async(id_package: string) => {
    await deleteUrl(`http://localhost:3000/packages/${id_package}`)
  }
  
  return {
    packages: getPackages(),
    handleRemove
  }
}

export default usePackages