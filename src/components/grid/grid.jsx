import './grid.scss'
import React from 'react'
import Line from '../line/line'

const Grid = (props) => {

    const { array } = props

    return (
        <div className='grid'>
            {array.map((e, i) => 
                <Line line={e} key={e.height}></Line>
            )}
        </div>
    )

}

export default Grid