import React from 'react'

interface Props {
    value: string,
}
const Subtitle = ({ value }: Props) => {
    return (
        <h2 className="text-xl text-black mt-12">
            {value}
        </h2>
    )
}

export default Subtitle