import React from 'react'
import NotFoundTitle from '../../components/NotFound/NotFoundTitle'
import NotFoundMessage from '../../components/NotFound/NotFoundMessage'
import NotFoundButtons from '../../components/NotFound/NotFoundButtons'

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-black-500 px-20">
        <NotFoundTitle />
        <NotFoundMessage />
        <NotFoundButtons />
    </div>
  )
}

export default NotFound