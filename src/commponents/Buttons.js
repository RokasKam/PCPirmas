import React from 'react'
import { useNavigate } from 'react-router-dom';
function Buttons({name, color, whereToGo, details}) {
    const navigate = useNavigate();

  return (
    <button style={{backgroundColor: color}} onClick={() => navigate(whereToGo, { state: details })}>
        {name}
    </button>
  )
}

export default Buttons