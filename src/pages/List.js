import React from 'react'
import Banner from '../commponents/Banner'
import Buttons from '../commponents/Buttons'
import Footer from '../commponents/Footer'
import Header from '../commponents/Header'
import Search from '../commponents/Search'
import SideBar from '../commponents/SideBar'

function List() {
    return (
        <div>
            <SideBar>
                <img src='https://www.freepnglogos.com/uploads/deadpool-png/deadpool-png-anna-anarchy-deviantart-9.png' height={300}></img>
            </SideBar>
            <Search/>
            <Banner text={'3'}/>
            <Banner text={'1'}/>
        </div>
    )
}

export default List;