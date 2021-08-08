import React from 'react'
import './header.scss'
import Button from '../button/button'
import { insertionSort, selectionSort, mergeSort } from '../../helpers/sort'
import { generateLines } from '../../helpers/utils'
const Header = (props) => {

    const {array, setArray, isSorted, setSorted} = props

    return (
        <div className='header'>
            <div className='header-container'>
                <Button title="Selection Sort" onClick={async () => {selectionSort(array, setArray, isSorted, setSorted )}}></Button>
                <Button title="Clear" onClick={() => {generateLines(50, '#20232A', setArray, setSorted)}}></Button>
                <Button title="Insertion Sort" onClick={() => {insertionSort(array, setArray, isSorted, setSorted)}}></Button>
                <Button title="Merge Sort" onClick={() => {mergeSort(array, setArray, isSorted, setSorted, 50)}}></Button>
            </div>
        </div>
    )

}

export default Header