import React from 'react'
import { InfoSection, MoreInfo } from '../../components'
import { blog, infoDataOne, mainDataTwo } from '../../data/Data'

const Blog = () => {
    return (
        <>
            <InfoSection {...blog}/>
            <MoreInfo {...mainDataTwo} />
            <MoreInfo {...infoDataOne}/>
        </>
    )
}

export default Blog
