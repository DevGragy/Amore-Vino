import React from 'react'
import { InfoSection, MoreInfo } from '../../components'
import { especiales, mainDataTwo } from '../../data/Data'

const Especiales = () => {
    return (
        <>
            <InfoSection {...especiales} />
            <MoreInfo {...mainDataTwo} />
        </>
    )
}

export default Especiales;
