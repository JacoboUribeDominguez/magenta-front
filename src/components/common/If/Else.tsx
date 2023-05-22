import React from 'react'

interface Props {
    children?: JSX.Element | JSX.Element[],
    predicate?: boolean
}
const Else = ({ predicate, children }: Props) => {
  return (!predicate && children) ? <>{children}</> : <></>
}

export default Else