import { Link } from "react-router-dom";
const Header = () =>{
    return <>
  
    <div className="headLayout">
    
     <div className="logo"><h1>UppaCamera</h1></div>
     
     <div className="navtool"><ol>
        <Link className="nav-link" to="/">Home</Link>
      </ol></div>
      <div className="navtool"><ol>
        <Link  className="nav-link" to="/ProductPage">ProductPage</Link>
      </ol></div>
      <div className="navtool"><ol>
        <Link className="nav-link" to="/OrderPage">Order</Link>
      </ol></div>
      <div className="navtool"><ol>
        <Link className="nav-link" to="/CheckOutPage">Checkout</Link>
      </ol></div>
    
    
    </div>
    </>
    
}
export default Header;