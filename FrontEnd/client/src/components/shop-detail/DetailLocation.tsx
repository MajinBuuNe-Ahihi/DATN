import React,{useState,useEffect} from 'react'
import { MdOutlineDirections } from '../common/Icon'
import { Map, Marker } from 'react-map-gl'
import MarkerPoint from '../map/MarkerPoint'
import { StateMap } from '../map/types'
import './detail-location.scss'
import { Link } from 'react-router-dom'
type Props = {
  map?: StateMap
}



export default function DetailLocation({}: Props) {
  let [coordinate,setCoordinate] = useState<StateMap>({longitude:0, latitude:0,zoom: 13})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location)=> {
      setCoordinate({latitude:location.coords.latitude,longitude:location.coords.longitude,zoom: 14})
    })
  }, [])
  
  return (
    <div className="detail-location">
        <div className="detail-location__contain">
        <div className="detail-location__title">
            Địa điểm cụ thể
          </div>
          <div className="detail-location__map">
          <Map
            mapboxAccessToken= {import.meta.env.VITE_MAP_BOX_TOKEN}
            initialViewState={{
                longitude: coordinate.longitude,
                latitude: coordinate.latitude,
                zoom: coordinate.zoom
              }}
              latitude={coordinate.latitude}
              longitude={coordinate.longitude}
              
              style={{width: "100%", height: "100%"}}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              > 
              { coordinate && <Marker longitude={coordinate.longitude} latitude={coordinate.latitude}  anchor="center">
                  <MarkerPoint location={true} mainPoint={true}/>
                  </Marker>
              }
              </Map>
             <a target='_blank' href={`https://www.google.com/maps/dir/?api=1&destination=${coordinate.latitude},${coordinate.longitude}`} className="detail-location__direction">
                <MdOutlineDirections size={25}/> <span>Hà nội việt nam</span>
              </a>              
          </div>
        </div>
    </div>
  )
}