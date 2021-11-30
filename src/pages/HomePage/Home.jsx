import React from 'react'
import { InfoSection } from '../../components'
import MainLogo from '../../components/MainLogo/MainLogo'
import { accesorios, amoreImg, blog, especiales } from '../../data/Data'

const Home = () => {
    return (
        <>
            <MainLogo {...amoreImg}/>
            <InfoSection {...blog} />   
            <InfoSection {...especiales} />   
            <InfoSection {...accesorios} />   
        </>
    )
}

export default Home;