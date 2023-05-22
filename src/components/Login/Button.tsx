import React from 'react'

interface Props {
    value: string,
}
const Button = ({value} : Props) => {
  return (
    <button className="bg-gradinat-primary-lr text-white px-4 py-2 rounded-2xl mt-8">{ value }</button>
  )
}

export default Button