import React, { useContext, useEffect, useState } from 'react'
import Buttons from '../commponents/Buttons'
import Header from '../commponents/Header'
import axios from 'axios';
import { NameContext } from '../App';
import { useNavigate } from 'react-router-dom';



function Home() {
    const {name, setName} = useContext(NameContext);
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('List')
        alert(name);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="fname">First name:</label><br></br>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/><br></br>
                <input type="submit" value="Submit"></input>
            </form> 
        </div>
    )
}

export default Home;