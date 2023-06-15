import React, { useEffect, useState } from 'react'

export function useScrollPostion(id: string) {
  let doc = document.getElementById(id) as HTMLElement;

  const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  function scrollElement (e: Event) {
    let target = e.target as HTMLElement;
    setPosition({x:target.scrollLeft,y:target.scrollTop})
  }

  function scrollWindow (e: Event){
    setPosition({x:window.scrollX,y:window.scrollY})
  }
  useEffect(() => {
    doc ? doc.addEventListener('scroll',scrollElement) : window.addEventListener('scroll',scrollWindow)
    return () => {
      removeEventListener('scroll', scrollElement);
      removeEventListener('scroll', scrollWindow)
    }
  },[position])
  return {position}
   
}