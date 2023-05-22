import React from 'react'
import { useNavigate } from 'react-router-dom';

const useClientCard = ( isCreate : Boolean) => {

  const getClassName = () => !isCreate ? 'shadow-2xl min-h-[11rem] rounded-xl p-5 flex flex-col justify-between' : 'bg-gradinat-primary-lr shadow-2xl p-5 min-h-[11rem] rounded-xl';

  return {
    getClassName
  }
}

export default useClientCard