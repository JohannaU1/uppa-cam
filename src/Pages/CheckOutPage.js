
import "../styles/checkOutPage.css"
import React from "react";
import OrderIcon from "../Picture/OrderIcon.jpg"
import Icons from "../Components/Icons";


const CheckOutPage = () => {
    return <div className="delivery">
        
        <img src={OrderIcon} alt="" />

        <Icons className="item-icon"/>
        <Icons className="item-icon"/>
        <Icons className="item-icon"/>
        <Icons className="item-icon"/>
        <Icons className="item-icon"/>
        
    </div>
    
}


export default CheckOutPage;