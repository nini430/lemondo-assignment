import { useState } from "react"

const useDebounceFilter=(value:string)=>{
    const [filterValue,setFilterValue]=useState(value);
    console.log(filterValue);

    const onChange=(val:string)=>{
        setFilterValue(val);
    }
    
    return {onChange,filterValue};

}

export default useDebounceFilter;