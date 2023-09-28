import Image from "next/image";

import NotFound from '../../assets/images/not-found.svg';

const Empty = () => {
    return ( 
        <div className="flex flex-col  justify-center items-center g-2">
            <Image src={NotFound} alt='empty'/>
            <h3 className="text-dark-gray font-bold font-lg text-center">დომენი ვერ მოიძებნა</h3>
            <p className="text-light-gray text-center">მითითებული პარამეტრებით დომენების მარკეტში შედეგები ვერ მოიძებნა, შეცვალეთ ძიების პარამეტრები და ცადეთ თავიდან</p>
        </div>
     );
}
 
export default Empty;