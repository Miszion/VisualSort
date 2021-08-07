import React from 'react'
import './header.scss'
import Button from '../button/button'
const Header = (props) => {

    return (
        <div className='header'>
            <div className='header-container'>
                <Button title="Selection Sort"></Button>
            </div>
        </div>
    )

}

export default Header