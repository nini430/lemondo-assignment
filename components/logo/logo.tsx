import Image from "next/image";
import LogoImg from '../../assets/images/logo.svg'

const Logo = () => {
    return (
        <div className="cursor-pointer">
            <Image className="logo" src={LogoImg} alt='logo' />
        </div>
      );
}
 
export default Logo;