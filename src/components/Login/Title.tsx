import React from 'react'

interface Props {
    value: string
}
const Title = ({ value }: Props) => {
    return (
        <h1 className="text-3xl text-black mb-10 font-semibold">
            {value}
        </h1>
    )
}

export default Title