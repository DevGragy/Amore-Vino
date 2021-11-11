import React from 'react'
import { InfoSection } from '../../components'
import { clubVinos } from '../../data/Data'

const Club = () => {
    return (
        <>
            <InfoSection {...clubVinos}/>
        </>
    )
}

export default Club
