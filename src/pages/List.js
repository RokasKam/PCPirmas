import React from 'react'
import Buttons from '../commponents/Buttons'
import Footer from '../commponents/Footer'
import Header from '../commponents/Header'

function List() {
    const handleChange = (option) => {
        if(option === '.dropdown'){
            alert(option);
        }
    }
    return (
        <div>
            <Header/>
            <form onChange={e => handleChange(e.target.value)}>
            <label for="cars">Choose a car:</label>
            <select name="cars" id="cars">
                <option value=".input">.input</option>
                <option value=".dropdown">.dropdown</option>
                <option value=".noBorders">.noBorders</option>
            </select>
            </form>
        </div>
    )
}

export default List