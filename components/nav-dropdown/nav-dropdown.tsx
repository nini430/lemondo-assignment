import Image from 'next/image';

import UserIcon from '../../assets/icons/user.svg';
import DownArrowIcon from '../../assets/icons/down-arrow.svg'

const NavDropdown = () => {
    return ( 
        <div className="nav-dropdown cursor-pointer relative flex items-center g-3">
            <Image src={UserIcon} alt='user'/>  
            <p className='text-dark-gray'>Nini Go.</p>
            <Image className='down-arrow' src={DownArrowIcon} alt='down-arrow'/>
        </div>
     );
}
 
export default NavDropdown;