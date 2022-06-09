import React, { useEffect } from 'react'

function Redirect({ url }) {
    useEffect(() => {
        window.location.href = url
    }, [url])

    return <h5> Redirecting.... </h5>

}

export default Redirect