import useRedux from "../../../hooks/useRedux"

const usePackages = () => {

  const { getPackages } = useRedux()
  
  return {
    packages: getPackages()
  }
}

export default usePackages