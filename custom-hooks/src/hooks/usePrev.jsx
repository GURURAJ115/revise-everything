import { useEffect, useRef } from "react";

export const usePrev =(value)=>{
    const ref = useRef();
    console.log("Re-render happened with new value"+value);

    useEffect(()=>{
        console.log("updated ref to be"+value);
        ref.current=value;
    },[value]);

    console.log("returned "+ref.current);
    return ref.current;
    //This hook returns first and then the effect gets called
}