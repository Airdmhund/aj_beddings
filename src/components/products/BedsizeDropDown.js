import React from 'react'
import xImage from "../products/xImage.svg"
import './BedsizeDropDown.css'


 const BedsizeDropDown = () => {


  return (
    <div className=' dropdown-body'>
        <div className='dropdown-head'>
            <h5>Kindly select a bedsize</h5>
            <img src={xImage} alt="x-icon" className='x-icon'/>

        </div>
        <div className='dropdown-middle'>
           <h5> 6*6/4pillows</h5>
           <h4>N4500</h4>
           <button className='dropdown-button'>-</button>
           <h4>0</h4>
           <button className='dropdown-button'>+</button>
        </div>
        <div className='dropdown-middle'>
           <h5> 7*7/4pillows</h5>
           <h4>N7000</h4>
           <button className='dropdown-button'>-</button>
           <h4>0</h4>
           <button className='dropdown-button'>+</button>
        </div>
        <div className='dropdown-middle'>
           <h5> 4*6/4pillows</h5>
           <h4>N4500</h4>
           <button className='dropdown-button'>-</button>
           <h4>0</h4>
           <button className='dropdown-button'>+</button>
        </div>
        <div className='dropdown-end'>
          <button className='dropdown-end-button'>KEEP SHOPPING</button>
          <button className='dropdown-end-button'>VIEW CART</button>
        </div>
       
        
        </div>
  )
}

export default BedsizeDropDown
