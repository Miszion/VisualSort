import React from 'react'
import { generateLines } from './helpers/utils'
import Grid from './components/grid/grid'



const App = (props) => {

    const array = generateLines(50, '#434343')

    return (
        <Grid array={array}></Grid>
    )
}

export default App