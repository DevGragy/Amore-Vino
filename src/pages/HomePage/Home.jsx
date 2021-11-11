import React from 'react'
import { InfoSection, Pricing, } from '../../components'
import MainLogo from '../../components/MainLogo/MainLogo'
import { clubVinos, vinosGourmet, accesorios, amoreImg } from '../../data/Data'

const Home = () => {
    return (
        <>
            <MainLogo {...amoreImg}/>
            <InfoSection {...clubVinos} />   
            <InfoSection {...vinosGourmet} />   
            <Pricing/>
            <InfoSection {...accesorios} />   
        </>
    )
}

export default Home;