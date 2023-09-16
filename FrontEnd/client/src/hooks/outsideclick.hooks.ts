import React, { useState, useEffect, Ref } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideClick(ref:any) {
  const [outClick,setOutClick] = useState<boolean>(false)
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event:any) {
      if (ref?.current && !ref.current.contains(event.target)) {
        setOutClick(true)
      }else {
        setOutClick(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return {outClick}
}

export default useOutsideClick;