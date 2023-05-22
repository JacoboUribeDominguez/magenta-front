import React from 'react'

interface Props<T> {
    array: T[],
    renderElement: (element : any) => JSX.Element | JSX.Element[] | string
}
const ForEach = <T,>({ array, renderElement }: Props<T>) =>  {
  return (
    <>
      {array ? array.map((element:T) => renderElement(element)) : <></>}
    </>
  )
}

export default ForEach