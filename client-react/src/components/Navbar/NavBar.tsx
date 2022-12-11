import React from "react";
import image from './image.png';
import SignIn from "../SignIn/SignIn1";

import {
    Nav,
    NavLogo,
    NavLink,
    NavMenu,
    NavBtn,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
           <NavMenu>

           <SignIn></SignIn>
    
           <NavLink to="/howitworks" activeStyle>
                    איך זה עובד
            </NavLink>
       
                <NavLink to="/ShoppingList" activeStyle>
                    רכישה
            </NavLink>
                <NavLink to="/donateTo" activeStyle>
                    למי אפשר לתרום
                </NavLink>
                <NavBtn>
                
                     עד כה הצלחנו לגייס 100,000,000 ש״ח 
                     <br />
                     עבור עמותות בארץ 
           
                    <NavLink to="/Homepage"><img src={image} alt="Bimage" width="85px" height="85px"/></NavLink>                
                </NavBtn>
                
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;