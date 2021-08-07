import React from 'react'
import './line.scss'

const Line = (props) => {

    const {color, height} = props

    return (
        <div className='line' style={{color: color, height: height}}></div>
    )
}

export default Line