import React from 'react'

function Navbar({totalItems , totalPrice}) {
  return (
    <div>
      <nav style={{padding:"10px", backgroundColor:"#0077cc", color:"white"}}>
        <h2> My Cart</h2>
        <div>
            items: {totalItems} | Total: {totalPrice}
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
