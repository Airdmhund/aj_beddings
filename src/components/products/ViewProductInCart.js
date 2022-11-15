import React from 'react'
import cartImage from "../products/cartImage.svg"
import './ViewProductInCart.css'
import polish from "../products/polish.jpg"
import deleteIcon from "../products/deleteIcon.svg"
 
  const ViewProductInCart = () => {
   return (
     <div className='body'>
         <div className='view_dash_board'>
           <div className='input-and-searchbutton'>
                <input className='input' type='text' name='search' placeholder= ' search for beddings and categories' />
                <button className='search-button'>Search </button>    
           </div>
                <img src={cartImage} alt="cart" className='cart'/>
            </div>
          

              <div className='product_in_cart'>
               <img src={polish} alt="polish" className='polish'/>
             
             <div className=''>
             <h4>
                  Quality Polish Beddings made with the best of materials<br/>
                  bedsheets available bedsheet and duvet <br/> available in duvetcovers and 4 pillowcases
             </h4>
             <h6> <span>size:</span> 4by6/2pillowcases</h6>
             </div>
             <div className='delete_pic'>
               <img src={deleteIcon} alt ="deleteicon"className='delete_icon'/>
               <h6>DELETE</h6>
             </div>
             <h4>N7000</h4>
             <div className='price_and_drop_button'>
            
            <button className='dropdown_button'>-</button>
            <h4>1</h4>
           <button className='dropdown_button'>+</button>
           </div>
            
             </div>

          <div className='product_in_cart'>
               <img src={polish} alt="polish" className='polish'/>
             
             <div className=''>
             <h4>
                  Quality Polish Beddings made with the best of materials<br/>
                  bedsheets available bedsheet and duvet <br/> available in duvetcovers and 4 pillowcases
             </h4>
             <h6> <span>size:</span> 4by6/2pillowcases</h6>
             </div>
             <div className='delete_pic'>
               <img src={deleteIcon} alt ="deleteicon"className='delete_icon'/>
               <h6>DELETE</h6>
             </div>
             <h4>N7000</h4>
             <div className='price_and_drop_button'>
            
            <button className='dropdown_button'>-</button>
            <h4>1</h4>
           <button className='dropdown_button'>+</button>
           </div>
            
             </div>
          <div className='last_part_div'>
            <div style={{textAlign:'center', width:'200vw'}}>
            <h4>SubTotal</h4>
            <h2>N50000</h2>
            <button className='last_part_button'>CHECKOUT</button>
            </div>
          
           {/* <div className='checkout_button_div'>
             
            </div> */}
          </div>
          


     </div>
   )
 }

 export default ViewProductInCart
 