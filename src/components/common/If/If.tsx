import React from 'react'

interface Props {
    children?: JSX.Element | JSX.Element[],
    predicate: boolean
}
const If = ({ predicate, children }: Props) => {

    return children ? <>{React.Children.map(children, (child) => React.cloneElement(child, { predicate }))}</> : <></>
}

export default If