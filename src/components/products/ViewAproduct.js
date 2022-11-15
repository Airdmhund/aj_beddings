import React from 'react'
import './ViewAproduct.css'
import cartImage from "../products/cartImage.svg"
import plain from "../products/plain.jpg"


const ViewAproduct = () => {
  return (
    <div className='body'>
      <div className='view_dash_board'>
           <div className='input-and-searchbutton'>
               <input className='input' type='text' name='search' placeholder= ' search for beddings and categories' />
                <button className='search-button'>Search </button>    
                </div>
        <img src={cartImage} alt="cart" className='cart'/>
 </div>
 <div className='picture_and_description_div'>
 <div className='plain_image_div'>
     <img src={plain} alt="plain" className='plain'/>
 </div>
  <div className='view_a_product_middle'>
     <h5>Quality Polish 4X6 Bedding</h5>
     <h2>  N4500-N9000 </h2>
     <h5>Description</h5>
      <h4>
        Quality Polish Beddings made with the best of materials<br/>
        bedsheets available bedsheet and duvet <br/> available in duvetcovers and 4 pillowcases
    </h4>

    
    <h5>Select your sizes</h5>
    <div className='select_your_size_button '>
      <button className='select_button'>4*6/pillowscases</button>
      <button className='select_button'>6*6/pillowcases</button>
      <button className='select_button'>7*7/pillowcases</button>
    </div>
    <button className='last_cart_button'>ADD TO CART</button>
  </div>
  </div>


    </div>
  )
}

export default ViewAproduct