import React from 'react'
import { InfoSection } from '../../components'
import { blog } from '../../data/Data'

const Blog = () => {
    return (
        <>
            <InfoSection {...blog}/>
        </>
    )
}

export default Blog
