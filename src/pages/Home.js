import React from 'react'
import Buttons from '../commponents/Buttons'
import Footer from '../commponents/Footer'
import Header from '../commponents/Header'


function Home() {
    localStorage.setItem('years', 2022);
    return (
        <div>
            <Header color='green' />
            <img src='https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg?w=1800&t=st=1669221447~exp=1669222047~hmac=2bf946ac460846e40bdcdef24c2bb4bd0b845916ada1116857b74a320fef464f' />
            <Buttons name='List' color='blue' whereToGo='List'/>
            <Footer years={localStorage.getItem('years')} />
        </div>
    )
}

export default Home