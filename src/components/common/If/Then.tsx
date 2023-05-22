import React from 'react'

interface Props {
    children?: JSX.Element | JSX.Element[] | string,
    predicate?: boolean
}
const Then = ({ predicate, children }: Props) => {
  return (predicate && children) ? <>{children}</> : <></>
}

export default Then