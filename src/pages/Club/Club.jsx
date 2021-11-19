import React from 'react'
import { InfoSection, MoreInfo } from '../../components'
import { clubVinos, mainDataOne } from '../../data/Data'

const Club = () => {
    return (
        <>
            <InfoSection {...clubVinos}/>
            <MoreInfo {...mainDataOne} />
        </>
    )
}

export default Club
