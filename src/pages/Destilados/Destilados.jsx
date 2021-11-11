import React from 'react'
import { InfoSection, MoreInfo } from '../../components'
import { destilados, infoData } from '../../data/Data'

const Destilados = () => {
    return (
        <>
            <InfoSection {...destilados}/>
            <MoreInfo {...infoData}/>
        </>
    )
}

export default Destilados;
