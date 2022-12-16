import React, { useState } from 'react'
function Buttons() {
    const [count, setCount] = useState(0);

    const increase = () => {
      setCount(count + 1);

    }
  return (
    <button onClick={increase}>
        Click Count:{count}
    </button>
  )
}

export default Buttons