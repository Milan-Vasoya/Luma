import React from "react";
import { ReactComponent as ShoppingBag } from "../../../assests/shopping-bag.svg";
import './cartIcon.styles.scss';
import { useDispatch } from 'react-redux';
import { toggleHidden } from "../../../redux/cart/cart.action";
const CartIcon =()=>{
    const dispatch =useDispatch();
    
    return(
    <div className='cart-icon' onClick={()=>dispatch(toggleHidden())}>
    <ShoppingBag className='shopping-icon' />
    <span className='item-count' >45</span>
    </div>
);}

export default CartIcon;