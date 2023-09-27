"use client";

import Image from 'next/image';

import CloseIcon from '../../assets/icons/close.svg';
import useSidebarStore from "@/hooks/use-sidebar-store";
import Filters from '../filters/filters';

const Sidebar = () => {
    const {isOpen, onClose}=useSidebarStore();
    return ( 
        <div className={`sidebar ${!isOpen && 'none'}`}>
            <div className='filter flex font-md items-center justify-between pl-2 pr-2 h-15'>
            <p className="text-dark-gray">ფილტრი</p>
            <Image onClick={onClose} className='cursor-pointer' src={CloseIcon} alt='close'/>
            </div>
            <Filters/>
        </div>
     );
}
 
export default Sidebar;