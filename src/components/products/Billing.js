import React from 'react'
import './Billing.css'

const Billing = () => {
  return (
   
    <div className='body'>
       <h2>Billing Details</h2>
       <form>
       <label for="firstname">First Name</label>
  <input type="text" id="firstname" name="firstname" placeholder="Your name.."/>

  <label for="lastname">Last Name</label>
  <input type="text" id="lastname" name="lastname" placeholder="Your last name.."/>

  <label for="city">City/Town</label>
  <select id="city/town" name="city/town">
    {/* <option value="">Australia</option> */}
  </select>

       <div className='general_div'>
       <div className='input_and_label_div'>
        <div className='inner_div'>
             <label >Firstname<span style={{color : "red"}}>*</span></label>
             <input type="text" id="firstname" name="firstname"/>
               </div>
               <div className='inner_div'>
               <label >Lastname<span style={{color : "red"}}>*</span></label>
               <input type="text" id="lastname" name="lastname"/>
             
               </div>
               <div className='inner_div'>
               <label >City/Town<span style={{color : "red"}}>*</span></label>
               <select id="city/town" name="city/town">
                {/* <option value="">Australia</option> */}
                 </select>
               
               </div> 
          
       </div>
       <div className='input_and_label_div'>
        <div className='inner_div'>
             <label >Email Address<span style={{color : "red"}}>*</span></label>
             <input type="text" id="emailaddress" name="emailaddress"/>
               </div>
               <div className='inner_div'>
               <label >LGA<span style={{color : "red"}}>*</span></label> 
               <select id="lga" name="lga">
                {/* <option value="">Australia</option> */}
                 </select>
               </div> 
               
          
       </div>
       

      
       <label >Country<span style={{color : "red"}}>*</span></label>
       <select id="country" name="country">
                 {/* <option value="">Australia</option> */}
                         </select>
               <label >State<span style={{color : "red"}}>*</span></label>
               <select id="state" name="state">
                 {/* <option value="">Australia</option> */}
          </select>
                <div>Subtotal</div>
       
       
              <label >Code</label>
              <input type="text" id="code" name="code"/>
               <label >Phone Number<span style={{color : "red"}}>*</span></label>
               <input type="text" id="phonenumber" name="phonenumber"/>  
     
       
               <label >Delivery Address<span style={{color : "red"}}>*</span></label>
               <input type="text" id="deliveryaddress" name="deliveryaddress" />
       
       


    </div>
    </form>
    
    </div>
  )
}
export default Billing