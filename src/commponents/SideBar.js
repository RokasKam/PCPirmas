import React from 'react'

function SideBar({children}) {
  return (

    <div style={{position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: '200px',
        height: '100%',
        padding: '20px',
      }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207" height={200} width={200}/>
        {children}
        <h2>2023</h2>
    </div>
  )
}

export default SideBar