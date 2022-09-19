
import Aside from "../Components/Aside";
import pentaxK70 from "../Picture/PentaxK70.jpg"
import canon from "../Picture/canonEos2000D.jpg";
const HomePage = () => {
    return (
     
     <div className="main-content">
      
    <div  className="main-info">
    <img  src={canon} alt="Canonkamera"  />
    
    <div className="btn-pos">
      <button className="btn-prio">Buy</button>
      <button className="btn-secondery">Read</button>
    </div>

    
    
    </div>
     
     
     
      <div  style={{backgroundColor: "rgb(243, 235, 235)"}} className="main-info">¨
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
     </div>
     
     <div className="order-aside"><Aside /></div>
    
      
      
     <div className="product-item1">¨
     <img  src={canon} alt="Canonkamera"  />
     
     <div className="btn-pos-mini">
     <button className="btn-prio-mini">Buy</button>
     <button className="btn-secondary-mini">Read More</button>
     </div>

     </div>

     <div  className="product-item2">¨
     <img  src={pentaxK70} alt="Canonkamera"  />
     
     <div className="btn-pos-mini">
     <button className="btn-prio-mini">Buy</button>
     <button className="btn-secondary-mini">Read More</button>
     </div>
     
     </div>

     <div className="product-item3">¨
     <img  src={canon} alt="Canonkamera"  />

     <div className="btn-pos-mini">
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