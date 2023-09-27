import { subnavLeft, subnavRight } from "@/utils/constants";

const SubNav = () => {
    return ( 
        <div className="sub-nav flex items-center justify-between pl-10 pr-10 h-15">
            <div className="flex items-center g-7">
            {subnavLeft.map(option=>(
                <p key={option} className="text-dark-gray nav-text">{option}</p>
            ))}
            </div>
            <div className="flex items-center g-7">
            {subnavRight.map(option=>(
                <p className="text-dark-gray nav-text" key={option}>{option}</p>
            ))}
            </div>
           
        </div>
     );
}
 
export default SubNav;