import React from 'react'
import cartImage from "../products/cartImage.svg"
import './Products.css'
import bbaj from "../products/bbaj.jpeg"

const Products = () => {
  // const [bookRequests, setBookRequests] = useState

  // ({
   
  //   "picture": "http://linktohostedimage.com",
  //   "description": "Who's ready for mango season? :tounge-out:",
  //   "amount" : 4500 - 9000
  // })


  return (
    <div className='body'>
         <div className='dash-board'>
            <h2>Beddings</h2>
           <div className='input-and-searchbutton'>
               <input className='input' type='text' name='search' placeholder= ' search for beddings and categories' />
                <button className='search-button'>Search </button>    
                </div>
        <img src={cartImage} alt="cart" className='cart'/>
        </div>

          <div className='display-product'>
              <div className='prod-one'>
                <div style={{height:'28vh', borderRadius:'3px'}}>
                  <img src={bbaj} style={{width:'100%', height:'100%',objectFit:'cover', borderRadius:'3px 3px 0 0'}} alt='' />
                </div>
                <div style={{height:'30vh', padding:'4%', fontSize:'12px'}} >
                  <p style={{fontSize:'16px' }}>Quality Polish 4X6 Bedding
                          Complete set bedsheet duvet and pillowcases</p>
                  <p style={{fontSize:'24px', fontWeight:'600'}}>N12000 - N19000</p>
                  <button className='add-to-cart-button'>ADD TO CART</button>
        
                </div>
              </div>

              <div className='prod-one'>
                <div style={{height:'28vh', borderRadius:'3px'}}>
                  <img src={bbaj} style={{width:'100%', height:'100%',objectFit:'cover', borderRadius:'3px 3px 0 0'}} alt='' />
                </div>
                <div style={{height:'30vh', padding:'4%', fontSize:'12px'}} >
                  <p style={{fontSize:'16px' }}>Quality Polish 4X6 Bedding
                          Complete set bedsheet duvet and pillowcases</p>
                  <p style={{fontSize:'24px', fontWeight:'600'}}>N12000 - N19000</p>
                  <button className='add-to-cart-button'>ADD TO CART</button>
        
                </div>
              </div>

              <div className='prod-one'>
                <div style={{height:'28vh', borderRadius:'3px'}}>
                  <img src={bbaj} style={{width:'100%', height:'100%',objectFit:'cover', borderRadius:'3px 3px 0 0'}} alt='' />
                </div>
                <div style={{height:'30vh', padding:'4%', fontSize:'12px'}} >
                  <p style={{fontSize:'16px' }}>Quality Polish 4X6 Bedding
                          Complete set bedsheet duvet and pillowcases</p>
                  <p style={{fontSize:'24px', fontWeight:'600'}}>N12000 - N19000</p>
                  <button className='add-to-cart-button'>ADD TO CART</button>
        
                </div>
              </div>

              <div className='prod-one'>
                <div style={{height:'28vh', borderRadius:'3px'}}>
                  <img src={bbaj} style={{width:'100%', height:'100%',objectFit:'cover', borderRadius:'3px 3px 0 0'}} alt='' />
                </div>
                <div style={{height:'30vh', padding:'4%', fontSize:'12px'}} >
                  <p style={{fontSize:'16px' }}>Quality Polish 4X6 Bedding
                          Complete set bedsheet duvet and pillowcases</p>
                  <p style={{fontSize:'24px', fontWeight:'600'}}>N12000 - N19000</p>
                  <button className='add-to-cart-button'>ADD TO CART</button>
        
                </div>
              </div>
                      {/* <div className='prod-two'>
                            <img src={bbaj} alt ="pic" className= 'pic'/>
                             <h5>Quality Polish 6X6 Bedding<br/>
                                Complete set bedsheet <br/>duvet and pillowcases</h5>
                              <h2>  N1200-N19000 </h2>
                              <button className='add-to-cart-button'>ADD TO CART</button>
                      </div>
                             <div className='prod-three'>
                             <img src={bbaj} alt ="pic" className= 'pic'/>
                              <h5>Quality Polish 4X6 Bedding<br/>
                              Complete set bedsheet <br/>duvet and pillowcases</h5>
                             <h2>  N4500-N9000 </h2>
                             <button className='add-to-cart-button'>ADD TO CART</button>
                             </div>

                             <div className='prod-three'>
                             <img src={bbaj} alt ="pic" className= 'pic'/>
                              <h5>Quality Polish 4X6 Bedding<br/>
                              Complete set bedsheet <br/>duvet and pillowcases</h5>
                             <h2>  N4500-N9000 </h2>
                             <button className='add-to-cart-button'>ADD TO CART</button>
                             </div> */}

        </div>

      
      

    </div>
  )
}

export default Products