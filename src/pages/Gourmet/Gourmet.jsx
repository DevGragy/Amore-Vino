import React from 'react'
import { InfoSection } from '../../components'
import { vinosGourmet } from '../../data/Data'

const Gourmet = () => {
    return (
        <>
            <InfoSection {...vinosGourmet}/>
        </>
    )
}

export default Gourmet;
