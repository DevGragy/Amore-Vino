import React from 'react'
import { InfoSection, Pricing } from '../../components'
import { clubVinos, vinosGourmet, Accesorios, Blog } from './Data'

const Home = () => {
    return (
        <>
            <InfoSection {...clubVinos} />   
            <InfoSection {...vinosGourmet} />   
            <Pricing/>
            <InfoSection {...Accesorios} />   
            <InfoSection {...Blog}/>
        </>
    )
}

export default Home;