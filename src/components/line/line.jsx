import React from 'react'
import './line.scss'

const Line = (props) => {

    const { line } = props

    return (
        <div className='line' style={{backgroundColor: line.color, height: line.height}}></div>
    )
}

export default Line