import React, { useState } from 'react'
import { ageCalculator } from '../services/ageCalculator';

function Home() {
    const [date, setDate] = useState(new Date());
    const [age, setAge] = useState();
    const handleSubmit = (e) => {
      e.preventDefault();
      setAge(ageCalculator(date));
    }
    return (
    <div>
      <form onSubmit={handleSubmit}>
      <label for="fname">Date:</label><br></br>
      <input 
        type="date" 
        name="Date" 
        value={date}
        onChange={(e) => setDate(e.target.value)}></input><br></br>
      <input type="submit" value="Submit"></input>
      </form> 
      <p>Year:{age.ageNow}Month:{age.monthsNow}</p>
    </div>
    )
}

export default Home;