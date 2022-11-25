import React from 'react'
import Buttons from '../commponents/Buttons'
import Footer from '../commponents/Footer'
import Header from '../commponents/Header'

function List() {
    const Persons = [
        {
            name: 'Jonas',
            age: 20,
            color: 'blue'
        },
        {
            name: 'Petras',
            age: 39,
            color: 'red'
        },
        {
            name: 'Algis',
            age: 15,
            color: 'white'
        }
    ]
    return (
        <div>
            <Header color={'green'}/>
                <h2>
                    Students
                </h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Color</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{Persons[0].name}</td>
                            <td>{Persons[0].age}</td>
                            <td>{Persons[0].color}</td>
                            <td><Buttons name='Details' color='blue' whereToGo={'Details'} details={Persons[0]} /></td>
                        </tr>
                        <tr>
                            <td>{Persons[1].name}</td>
                            <td onClick={() => {localStorage.setItem('years', Number(localStorage.getItem('years') + Persons[1].age))}}>{Persons[1].age}</td>
                            <td>{Persons[1].color}</td>
                            <td><Buttons name='Details' color='red' whereToGo={'Details'} details={Persons[1]} /></td>
                        </tr>
                        <tr>
                            <td>{Persons[2].name}</td>
                            <td>{Persons[2].age}</td>
                            <td>{Persons[2].color}</td>
                            <td><Buttons name='Details' color='white' whereToGo={'Details'} details={Persons[2]} /></td>
                        </tr>
                    </tbody>
                </table>
        <Footer/>
        </div>
    )
}

export default List