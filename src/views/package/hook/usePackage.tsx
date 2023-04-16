import React, { useState } from 'react'

const usePackage = () => {

    const [packageSelected, setPackageSelected] = useState('');

    return {
        packageSelected,
        setPackageSelected
    }
}

export default usePackage