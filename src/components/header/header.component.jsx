import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as LumaLogo } from "../../assests/LumaLogo.svg";
import { ReactComponent as SearchLogo } from "../../assests/searchLogo.svg";
import Navbar from "../navbar/navbar.component";
import CartIcon from "../cart/cartIcon/cartIcon.component";
import CartDropDown from "../cart/cart-dropdown/CartDropDown.component";
import { useSelector, useDispatch } from "react-redux";
import { selectHidden } from "../../redux/cart/cart.selector";
import { toggleHidden } from "../../redux/cart/cart.action";
import { selectCustomerToken } from "../../redux/customer/customer.selector";
import { signOutstart } from "../../redux/customer/customer.action";



const Header = () => {
 const hidden = useSelector(selectHidden);
  const custToken = useSelector(selectCustomerToken);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="header__panel">
        <div className="header_panel_container">
          {custToken ? (
           
            <span className="link__LogOut" onClick={()=>dispatch(signOutstart())}>LogOut</span>
            
            ) : (
            <span className="header__signinLink">
              <Link to="/signIn" className="link__signin">
                Sign In
              </Link>
              <span> or </span>
              <Link to="/signIn" className="link__signin">
                Create Account
              </Link>
            </span>
          )}
        </div>
      </div>

      <div className="header__wrapper">
        <Link to="/" className="logoContainer">
          <LumaLogo className="logo" />
        </Link>

        <div className="wapper">
          <div className="serchbarContainer">
            <input
              type="text"
              placeholder="Search Products"
              className="serchBar"
              
            />
            <button className="btn"  onClick={()=>alert('search')}>
              <SearchLogo className="seachIcon" />
            </button>
          </div>

          <CartIcon />
        </div>
      </div>
      {
        //hide whole div

        hidden ? null : (
          <div className="header-drop-cont">
            <div
              className="header-drop-hidden"
              onClick={() => dispatch(toggleHidden())}
            ></div>

            <div className="header-drop">
              <CartDropDown />
            </div>
          </div>
        )
      }
      <div className="navbar">
        <Navbar />
      </div>
    </div>
  );
};
export default Header;
