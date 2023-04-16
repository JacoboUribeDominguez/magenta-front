import useRedux from "../../../hooks/useRedux"

const useTable = () => {

  const { getHostings } = useRedux()

  return {
    hostings: getHostings()
  }
}

export default useTable