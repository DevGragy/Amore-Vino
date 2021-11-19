import React from 'react'
import { InfoSection, MoreInfo } from '../../components'
import { mainDataTwo, vinosGourmet } from '../../data/Data'

const Gourmet = () => {
    return (
        <>
            <InfoSection {...vinosGourmet}/>            <MoreInfo {...mainDataTwo} />
        </>
    )
}

export default Gourmet;
