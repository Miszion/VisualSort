import React, { useEffect, useState } from 'react'
import { generateLines } from './helpers/utils'
import Header from './components/header/header'
import Grid from './components/grid/grid'
import './App.scss'


const App = (props) => {

    let [array, setArray] = useState([])

    let [isSorted, setSorted] = useState(false)

    useEffect(() => {
        if (array.length === 0) {
            generateLines(50, '#20232A', setArray, setSorted)
        }
    }, [])

    return (
        <div className='app'>
            <Header array={array} setArray={setArray} isSorted={isSorted} setSorted={setSorted}></Header>
            <Grid array={array}></Grid>
        </div>
    )
}

export default App