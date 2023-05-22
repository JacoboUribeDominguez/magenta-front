import React from 'react'

const useFetch = () => {

    const get = async (url: string) => {
        try {
            const data = await fetch(url)
            const result = await data.json()
            return result;
        } catch (err) {
            console.log('Error getting data.')
            return null;
        }
    }

    const deleteUrl = async (url: string) => {
        try {
            await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } catch (err) {
            console.log('Error removing data.')
        }
    }

    return {
        get,
        deleteUrl
    }
}

export default useFetch