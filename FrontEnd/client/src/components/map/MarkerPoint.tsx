import React from 'react'
import { FaMapMarkerAlt, HiLocationMarker } from '../common/Icon'
import './map.scss'

type Props = {
    mainPoint: boolean,
    location: boolean
}

export default function MarkerPoint({mainPoint,location}: Props) {
  return (
    <div className="marker-point">
        {
            location?mainPoint? <FaMapMarkerAlt className='marker-point__main' size={25}/>: 
            <HiLocationMarker className='marker-point_sub' size={25}/>:
            <div className="mark-point__current-location-core">

            </div>
        }
    </div>
  )
}