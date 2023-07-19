import React, { useState } from 'react'

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e) {
            setError(e.message)
        } finally {

            setIsLoading(false)

            // setTimeout(() => {
            //     setIsLoading(false)

            // }, 5000);

        }
    }

    return [fetching, isLoading, error]
}
