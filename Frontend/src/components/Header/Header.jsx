// import React from 'react'
   import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <img src={"public/dreamflower.jpg"} alt="" />
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredient is to satisfy your craving and elevate your dining expertiese</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
