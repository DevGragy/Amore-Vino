import React from 'react'
import { InfoSection, MoreInfo } from '../../components'
import { destilados, infoDataOne, mainDataOne } from '../../data/Data'

const Destilados = () => {
    return (
        <>
            <InfoSection {...destilados}/>
            <MoreInfo {...infoDataOne}/>
            <MoreInfo {...mainDataOne} />
        </>
    )
}

export default Destilados;
