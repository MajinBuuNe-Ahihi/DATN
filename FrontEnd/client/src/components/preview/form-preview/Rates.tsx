import React, { useEffect, useState } from 'react'
import { VoteRate } from '../../common/VoteRate'

type Props = {
 handleChange:  {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
}
}

export default function Rates({handleChange}: Props) {

  const [locationRate,setLocationRate] = useState<number>(4)
  const [placeRate,setPlaceRate] = useState<number>(4)
  const [serviceRate,setServiceRate] = useState<number>(4)
  const [foodRate,setFoodRate] = useState<number>(4)
  const [priceRate,setPriceRate] = useState<number>(4)
  useEffect(() => {
    let input = document.getElementById('locationRate') as HTMLInputElement
    input.addEventListener('changee', (e:Event) => handleChange(e) )
    let e = new Event('changee')
    input.dispatchEvent(e)
    return () => {
      input.removeEventListener('changee', (e:Event) => handleChange(e))
    }
  },[locationRate])
  useEffect(() => {
    let input = document.getElementById('placeRate') as HTMLInputElement
    input.addEventListener('changee', (e:Event) => handleChange(e) )
    let e = new Event('changee')
    input.dispatchEvent(e)
    return () => {
      input.removeEventListener('changee', (e:Event) => handleChange(e))
    }
  },[placeRate])
  useEffect(() => {
    let input = document.getElementById('serviceRate') as HTMLInputElement
    input.addEventListener('changee', (e:Event) => handleChange(e) )
    let e = new Event('changee')
    input.dispatchEvent(e)
    return () => {
      input.removeEventListener('changee', (e:Event) => handleChange(e))
    }
  },[serviceRate])
  useEffect(() => {
    let input = document.getElementById('foodRate') as HTMLInputElement
    input.addEventListener('changee', (e:Event) => handleChange(e) )
    let e = new Event('changee')
    input.dispatchEvent(e)
    return () => {
      input.removeEventListener('changee', (e:Event) => handleChange(e))
    }
  },[foodRate])
  useEffect(() => {
    let input = document.getElementById('priceRate') as HTMLInputElement
    input.addEventListener('changee', (e:Event) => handleChange(e) )
    let e = new Event('changee')
    input.dispatchEvent(e)
    return () => {
      input.removeEventListener('changee', (e:Event) => handleChange(e))
    }
  },[priceRate])
 
  return (
    <div className="preview__vote-rate">
      <div className="preview__section-name">
        Xếp hạng của bạn
      </div>
      <div className="preview__vote-rate-row">
        <div className="preview__label">
          Vị trí
        </div>
        <input type="hidden" name="locationRate" id="locationRate" value={locationRate} />
        <VoteRate type={true} value={locationRate}  setStar={setLocationRate}></VoteRate>
      </div>
      <div className="preview__vote-rate-row">
        <div className="preview__label">
          Không gian
        </div> 
        <input type="hidden" name="placeRate" id="placeRate" value={placeRate}/>
        <VoteRate type={true} value={placeRate} setStar={setPlaceRate}></VoteRate>
      </div>
      <div className="preview__vote-rate-row">
        <div className="preview__label">
          Đồ uống
        </div>
        <input type="hidden" name="foodRate" id="foodRate" value={foodRate}/>
        <VoteRate type={true} value={foodRate} setStar={setFoodRate}></VoteRate>
      </div>
      <div className="preview__vote-rate-row">
        <div className="preview__label">
          Phục vụ
        </div>
        <input type="hidden" name="serviceRate"  id="serviceRate" value={serviceRate}/>
        <VoteRate type={true} value={serviceRate} setStar={setServiceRate}></VoteRate>
      </div>
      <div className="preview__vote-rate-row">
        <div className="preview__label">
          Giá cả
        </div>
        <input type="hidden" name="priceRate" id='priceRate' value={priceRate}/>
        <VoteRate type={true} value={priceRate} setStar={setPriceRate}></VoteRate>
      </div>
    </div>
  )
}