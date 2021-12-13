import React from 'react'
import { useSelector } from 'react-redux';
import SingleItem from '../Components/SingleItem';
import '../Css/cart.css'
function Cart() {
    const cart=useSelector((state)=>state.cart.cart);
    
    return (
        <div className="cart">
        {cart.map((cartElement,index)=>(<div key={index}> <SingleItem onlyRemoveButton={true} product={cartElement} /> </div>))}
        </div>
    )
}

export default Cart
