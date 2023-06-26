import React, { useEffect } from 'react'
import {HiLocationMarker,FaTimes} from '../../common/Icon'
import './map-model.scss'
import { Resource } from '../../../constants'
import MapContain from './MapContain'
import { useAppDispatch,useAppSelector } from '../../../hooks';
import {CloseMapModalState} from '../../../sliceredux/modal-map.slice'
import MapItemCoffee from './MapItemCoffee'

type Props = {}

const {Map: ResourceMap} = Resource

export default function MapModal({}: Props) {
    const dispatch = useAppDispatch();
    const {openModal} = useAppSelector(state => state.mapmodal)

 useEffect(()=>console.log(open),[open])
  return (
   <>
    {
        openModal && <div className="map-modal">
        <div className="map-modal__overlay" onClick={()=>dispatch(CloseMapModalState())}>
        </div>
        <div className="map-modal__container">
            <div className="map-modal__header">
                <div className="map-modal__title">
                    <HiLocationMarker size={30}/>
                    <span>{ResourceMap.Modal.Title}</span>
                </div>
                <div className="map-modal__close" onClick={()=>dispatch(CloseMapModalState())}>
                    <FaTimes size={25}/>
                </div>
            </div>
            <MapContain/>
        </div>
        </div>
    }
   </>
  )
}