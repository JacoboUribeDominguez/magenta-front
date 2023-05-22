import React from 'react'

interface Props {
    label: string,
    icon: JSX.Element,
    placeholder: string
}
const Input = ({ 
    label,
    icon,
    placeholder
}: Props) => {
    return (
        <div className="flex flex-col w-full justify-center px-4 my-4">
            <label className="mr-4">{label}</label>
            <div className="flex items-end border border-gray-600 border-t-0 border-l-0 border-r-0 py-3 px-3">
                <div className="text-2xl text-gray-600">
                    {icon}
                </div>
                <input className="pl-2 w-full placeholder:text-gray-600 outline-none" placeholder={placeholder} type="text" />
            </div>
        </div>
    )
}

export default Input