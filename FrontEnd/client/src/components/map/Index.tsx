import React,{useState,useLayoutEffect} from 'react'
import './map.scss'
import { Map,Marker,FullscreenControl,GeolocateControl} from 'react-map-gl'
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Resource } from '../../constants'
import { MarkerMap, StateMap } from './types'
import MarkerPoint from './MarkerPoint'
import { BsFillPinMapFill } from '../common/Icon'





type Props = {
    height: number,
    show?: boolean
    initState?: StateMap
    markerState?: MarkerMap
}

const {Map: ResoureMap} = Resource

export default function ViewMap(props: Props) {
  const [coords,setCoords] = useState<{latitude: number,longitude: number}>({latitude:0,longitude:0})
  const [open,setOpen] = useState<boolean>(false)

  useLayoutEffect(()=>{
    const requestLocationPermission = async () => {
        try {
          const permissionStatus = await navigator.permissions.query({ name: 'geolocation' });
  
          if (permissionStatus.state === 'granted') {
            // Người dùng đã cho phép lấy vị trí
            getCurrentLocation();
          } else if (permissionStatus.state === 'prompt') {
            // Hiển thị thông báo yêu cầu cho phép truy cập vị trí
            permissionStatus.onchange = () => {
              if (permissionStatus.state === 'granted') {
                getCurrentLocation();
              }
            };
          }
        } catch (error) {
          console.error('Error requesting location permission:', error);
        }
      };
  
      const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
  
            // Xử lý vị trí hiện tại
            setCoords({latitude,longitude})
            setOpen(true)
          },
          (error) => {
            console.error('Location retrieval error:', error);
          }
        );
      };
  
      requestLocationPermission();
      return ()=> setOpen(false)
  },[])

  return (
    
    <div className={`${props.show?'map map--background':'map'}`} style={{height:props.height}}>
        {
        true ? (open) &&
        <div className="map__geo">
            <Map
            mapboxAccessToken= {import.meta.env.VITE_MAP_BOX_TOKEN}
            initialViewState={{
                longitude: coords?.longitude,
                latitude: coords?.latitude,
                zoom: 12
            }}
            style={{width: "100%", height: "100%"}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            > 
            <FullscreenControl />
            <GeolocateControl />
            <Marker longitude={coords.longitude} latitude={coords.latitude}  anchor="center">
                <MarkerPoint mainPoint={true} location={true}/>
            </Marker>
            </Map>
             <a className='map_geo-direct' href={`https://www.google.com/maps/dir/?api=1&destination=${coords.latitude},${coords.longitude}`} target='_blank'>
                <BsFillPinMapFill size={20}  className='map_geo-direct-icon'></BsFillPinMapFill><span>click vo day</span>
            </a>
        </div>
        :
         <div className="map__open-map">
            {ResoureMap.Button}
        </div> 
        }
    </div>
  )
}