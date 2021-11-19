import React from 'react'
import { BubbleAlt } from './BubbleAlert.elements'

const BubbleAlert = ({ value }) => {
    function getNumber(n) {
        if (!n) { return ' ' }
        return n > 9 ? '9+' : n
    }

    return (
        <>
            <BubbleAlt>
                {getNumber(value)}
            </BubbleAlt>
        </>
    )
}

export default BubbleAlert
