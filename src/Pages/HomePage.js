import "../styles/nav.css"
import "../styles/homePage.css"
import Aside from "../Components/Aside";
import pentaxK70 from "../Picture/PentaxK70.jpg"
import canon from "../Picture/canonEos2000D.jpg";
const HomePage = () => {
    return (
    // main-content = parent element
     <div style={{backgroundColor: "Green"}} className="main-content">
      
    {/* main-info just for image box */}
    <div style={{backgroundColor: "yellow"}} className="main-info">
    <img   />
    
    <div style={{backgroundColor: "red"}} className="btn-pos">
      <button className="btn-prio">Buy</button>
      <button className="btn-secondery">Read</button>
    </div>

    
    
    </div>
     
     
    
      <div  style={{backgroundColor: "purple"}} className="main-info">¨
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
     </div>
     
     <div style={{backgroundColor: "brown"}} className="order-aside"><Aside /></div>
    
      
      
     <div style={{backgroundColor: "lightblue"}} className="product-item1">¨
     <img    />
     
     <div style={{backgroundColor: "yellowgreen"}} className="btn-pos-mini">
     <button className="btn-prio-mini">Buy</button>
     <button className="btn-secondary-mini">Read More</button>
     </div>

     </div>

     <div style={{backgroundColor: "lightblue"}} className="product-item2">¨
     <img    />
     
     <div style={{backgroundColor: "yellowgreen"}} className="btn-pos-mini">
     <button className="btn-prio-mini">Buy</button>
     <button className="btn-secondary-mini">Read More</button>
     </div>
     
     </div>

     <div style={{backgroundColor: "lightblue"}} className="product-item3">¨
     <img   />

     <div style={{backgroundColor: "yellowgreen"}} className="btn-pos-mini">
     <button className="btn-prio-mini">Buy</button>
     <button className="btn-secondary-mini">Read More</button>
     </div>
     
     </div>

     
        </div>
      
    
      
    )
      
}
export default HomePage;

/*   <div className="navigate-btn">
    <ul>
      <li>
        <link><h1>Home</h1></link>
      </li>
      <li>
      <link to="/ProductPage"><h1>Produt</h1></link>
      </li>
      <li>
       <h1>Order</h1>
      </li>
      <li>
       <h1>CheckOut</h1>
      </li>
    </ul>
    </div> */