import React from 'react'
import { InfoSection } from '../../components'
import { especiales } from '../../data/Data'

const Especiales = () => {
    return (
        <>
            <InfoSection {...especiales} />
        </>
    )
}

export default Especiales;
