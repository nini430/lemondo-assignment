"use client";

import Image from "next/image";

import Logo from "../logo/logo";
import NavDropdown from "../nav-dropdown/nav-dropdown";


import BellIcon from '../../assets/icons/bell.svg'
import CartIcon from '../../assets/icons/cart.svg';
import LangIcon from '../../assets/images/geo.svg';
import HamburgerMenu from '../../assets/icons/hamburger.svg';
import UserIcon from '../../assets/icons/user.svg';
import useSidebarStore from "@/hooks/use-sidebar-store";



const Navbar = () => {
    const {onOpen}=useSidebarStore();
    return ( 
        <div className="nav flex justify-between items-center h-20">
            <div className="flex items-center g-2">
            <Image onClick={onOpen} className="cursor-pointer hamburger-menu" src={HamburgerMenu} alt=''/>
            <Logo/>
            </div>
            <div className="flex items-center g-4"> 
            <div className="icon cursor-pointer">
                <Image src={BellIcon} alt='notification' /> 
            </div>
            <div className="icon cursor-pointer">
                <Image src={CartIcon} alt='cart'/>
                <div className="icon-amount absolute flex items-center justify-center w-5 h-5 rounded-full">
                 5
                </div>
            </div>
            
                <NavDropdown/>
            <div className="icon cursor-pointer lng">
                <Image src={LangIcon} alt='lang' /> 
            </div>
            <div className="icon cursor-pointer user">
                <Image src={UserIcon} alt='user' /> 
            </div>
            </div>
        </div>
     );
}
 
export default Navbar;