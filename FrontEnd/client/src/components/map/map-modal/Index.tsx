import React from 'react'
import {HiLocationMarker,FaTimes} from '../../common/Icon'
import './map-model.scss'
import { Resource } from '../../../constants'
import MapContain from './MapContain'
type Props = {}

const {Map: ResourceMap} = Resource

export default function MapModal({}: Props) {
  return (
    <div className="map-modal">
       <div className="map-modal__overlay">
       </div>
       <div className="map-modal__container">
        <div className="map-modal__header">
            <div className="map-modal__title">
                <HiLocationMarker size={30}/>
                <span>{ResourceMap.Modal.Title}</span>
            </div>
            <div className="map-modal__close">
                <FaTimes size={25}/>
            </div>
        </div>
        <div className="map-modal__main">
            <div className="map-model__list-place">
                <div className="map-model__list-place-number-result">

                </div>
                <div className="map-model__list-place-result">
                </div>
            </div>
            <MapContain/>
        </div>
       </div>
    </div>
  )
}