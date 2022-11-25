import React from 'react'

function Header({color}) {
    return (
        <div>
            <header style={{backgroundColor: color}} className='header'>
                <h1>Pavadinimas</h1>
            </header>
        </div>
    )
}

export default Header