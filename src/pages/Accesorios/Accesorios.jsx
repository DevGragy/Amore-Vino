import React from 'react'
import { InfoSection } from '../../components'
import { accesorios } from '../../data/Data'

const Accesorios = () => {
    return (
        <>
            <InfoSection {...accesorios} />   
        </>
    )
}

export default Accesorios
