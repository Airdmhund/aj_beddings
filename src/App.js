import Home from './components/landingPage/Home';
import Products from './components/products/Products';
import BedsizeDropDown from './components/products/BedsizeDropDown';
import ViewAproduct from './components/products/ViewAproduct';
import ViewProductInCart from './components/products/ViewProductInCart';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Billing from './components/products/Billing';





function App() {
  return (
   
     <BrowserRouter>
      <div className="App">
      {/* <Home/>  */}
      <Products/>
      <ViewAproduct/>
      {/* <ViewProductInCart/> */}
      <Billing/>
      </div>
    
      <Routes>
      <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/viewAproduct" element={<ViewAproduct/>} />
            <Route path="/viewProductInCart" element={<ViewProductInCart />} />
            <Route path="bedSizeDropDown" element={<BedsizeDropDown/>} />
            <Route path="/billingInformation" element={<Billing/>} />
      

      
    
      </Routes>
      
  </BrowserRouter>


  );
}

export default App;
