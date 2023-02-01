import React from 'react'

function Search() {
  return (
    <div>
        <input placeholder='Search' onBlur={e => alert(e.target.value)}></input>
    </div>
  )
}

export default Search