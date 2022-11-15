import React from 'react'
import './Home.css'
import bbaj from "../products/bbaj.jpeg"


const Home = () => {
  return (
    <div className='body'>
      <div className='dashboard'>
      <img src={bbaj} alt="logo" className='bbaj_logo'/>
        <p>Home</p>
        <label>Beddings</label>
        <select id="beddings" name="beddings"></select>
        <p>About</p>
        <p>Contact Us</p>
      </div>
      <div className='second_div'>
      <input className='input' type='text' name='search' placeholder= ' search for beddings and categories' />
                <button className='search-button'>Search </button>
      <p>Beddings By Aj</p>
      <button className='order_button'>Order Now</button>
      </div>

    </div>
  )
}

export default Home