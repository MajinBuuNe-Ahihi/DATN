import React,{useState,useRef,useEffect, ChangeEvent} from 'react'
import './range-slider.scss'

type Props = {
    max: number,
    step: number,
    min: number,
    setValue: React.Dispatch<React.SetStateAction<{min:number,max:number}>>

}

export default function RangeSlider({min,max,step,setValue}: Props) {
    const [left,setLeft] = useState<number>(min);
    const [right,setRight] = useState<number>(100 - (max /max)*100);
    const [valueMin,setValueMin] = useState<number>(min);
    const [valueMax,setValueMax] = useState<number>(max);
    
    const DescreaseValue = (event: ChangeEvent<HTMLInputElement>) => {
        let currentValue:number = Number(event.target.value);
        if(currentValue >= valueMax) {
            setValueMin(value => valueMin)
        }else { 
            setLeft((currentValue/max)*100);
            setValueMin(currentValue)
        }
    }
    const InscreaseValue = (event: ChangeEvent<HTMLInputElement>) => {
        let currentValue:number = Number(event.target.value);
        if(currentValue <= valueMin ) {
            setValueMax(value => valueMax);
        }else{
            setRight(100-(currentValue/max)*100);
            setValueMax(currentValue);
        }
    }
    useEffect(()=>{
        setValue({min: valueMin, max: valueMax});
    },[valueMax,valueMin]);
  return (
    <div className="slider-wrapper">
        <div className="slider-container">
            <div className="slider-track" style={{left:`${left}%`,right: `${right}%`}}></div>
            <input type="range"   value={valueMin} className="slider-button slider-decrease" onChange={DescreaseValue} min={min} max={max} step={step}/>
            <input type="range"   value={valueMax} className="slider-button slider-increase" onChange={InscreaseValue} min={min} max={max} step={step}/>
        </div>
    </div>
  )
}