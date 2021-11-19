import React from 'react'
import { InfoSection, MoreInfo } from '../../components'
import { accesorios, mainDataTwo } from '../../data/Data'

const Accesorios = () => {
    return (
        <>
            <InfoSection {...accesorios} />              <MoreInfo {...mainDataTwo} /> 
        </>
    )
}

export default Accesorios
