import React, { useContext, useEffect, useState } from 'react'
import { NameContext } from '../App'

function Header() {
    const {name} = useContext(NameContext)
        
    return (
        <div>
            <header className='header'>
                <span>{name}</span>
            </header>
        </div>
    )
}

export default Header