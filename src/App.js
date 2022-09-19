import {BrowserRouter,Route, Routes} from"react-router-dom"
import Header from"./Components/Header"
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import OrderPage from "./Pages/OrderPage";
import CheckOutPage from "./Pages/CheckOutPage";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/ProductPage" exact element={<ProductPage/>}/>
        <Route path="/OrderPage" exact element={<OrderPage/>}/>
        <Route path="/CheckOutPage" exact element={<CheckOutPage/>}/>
      </Routes>
    </div>
    
    
    
   
    
   </BrowserRouter>
  );
}

export default App;
