import React from 'react'
import { useLocation } from 'react-router-dom';
import Footer from '../commponents/Footer';
import Header from '../commponents/Header';

function Details() {
    const { state } = useLocation();
  return (
    <div>
        <Header color={state.color} />
        <h3>{state.name}</h3>
        <p>{state.age}</p>
        <p>{state.color}</p>
        <Footer/>
    </div>
  )
}

export default Details