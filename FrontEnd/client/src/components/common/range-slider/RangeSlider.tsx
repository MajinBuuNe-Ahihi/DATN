import React,{useState,useRef,useEffect} from 'react'
import './range-slider.scss'
import useOutsideClick from '../../../hooks/outsideclick.hooks';

type Props = {
    total: number,
    step: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
}

export default function RangeSlider({total,step,setValue}: Props) {
    const [x,setX] = useState<number>(0);
    const [width,setWith] = useState<number>(0);
    const [track,setTrack] = useState<number>(100)
    const refDiv = useRef<HTMLDivElement>(null);
    const {outClick} = useOutsideClick(refDiv);

    useEffect(()=> {
        setValue(Math.floor(step*((track /(step/total)/100))) )
    },[track])

    useEffect(()=> {
        if(refDiv.current) {
            const xDiv = refDiv.current.getBoundingClientRect().x;
            const wDiv = refDiv.current.offsetWidth;
            setWith(wDiv);
            setX(xDiv);
        }
    },[x])

    const CaculateValue = (clientX:number) => {
        if(outClick) return;
        if(clientX - x > width) {
            setTrack(100);
            return;
        }
        if(clientX - x < 5) {
            setTrack(0);
            return;
        }

        setTrack(Math.ceil(((clientX-x)/width) * 100));
    }


  return (
    <div className="range-slider" ref={refDiv}  onMouseMove={(e)=> {if(e.buttons === 1){CaculateValue(e.clientX)}}} onClick={(e)=>CaculateValue(e.clientX)}>
        <div className="range-slider__rail">
            <div className="range-slider__track" style={{width: `${track}%`}}></div>
        </div>
        <div className="range-slider__contain">
            <div className="range-slider__begin">
            </div>
            <div className={(track == 0 && !outClick) || !outClick? "range-slider__end active" : "range-slider__end" } style={{left: `${track}%`}}>
            </div>
        </div>
    </div>
  )
}