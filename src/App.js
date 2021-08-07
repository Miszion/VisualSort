import React, { useEffect, useState } from 'react'
import { generateLines } from './helpers/utils'
import Header from './components/header/header'
import Grid from './components/grid/grid'
import './App.scss'


const App = (props) => {

    const [array, setArray] = useState([])

    useEffect(() => {
        if (array.length === 0) {
            setArray(generateLines(50, '#434343'))
        }
    })

    return (
        <div className='app'>
            <Header array={array} setArray={setArray}></Header>
            <Grid array={array}></Grid>
        </div>
    )
}

export default App