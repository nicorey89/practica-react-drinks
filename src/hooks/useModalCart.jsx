import { useState } from "react";

export function useModalCart () {
    const [ isOpen, setIsOpen ] = useState();
    
    function toogleModal () {
        setIsOpen(!isOpen)
    }
    
    return { isOpen, toogleModal }
}