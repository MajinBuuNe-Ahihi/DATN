import React, { Ref, useRef, useState } from 'react'
import { Map,Marker,Popup} from 'react-map-gl'
import MarkerPoint from '../MarkerPoint'
import {MdMyLocation, MdOutlineLocationSearching,AiOutlineMinus,AiOutlinePlus,MdOutlineZoomOutMap,MdOutlineZoomInMap} from '../../common/Icon'
import './map-contain.scss'


type Props = {}


export default function MapContain({}: Props) {
 const [coords,setCoords] = useState<{latitude: number,longitude: number}>({latitude:21.030653,longitude:105.847130})
 const [coordsCureentTemp,setCoordsCureentTemp] = useState<{latitude: number,longitude: number}>({latitude:0,longitude:0});
 const [coordsCurrent,setCoordsCureent] = useState<{latitude: number,longitude: number}>({latitude:0,longitude:0});
 const [zoom,setZoom] = useState<number>(12)
 const [popupLocation,setPopupLocation] = useState<{latitude: number,longitude: number}>({latitude:0,longitude:0});
 const [openPopup,setOpenPopup] = useState<boolean>(false);
 const [openCurrentLocation,setOpenCurrentLocation] = useState<boolean>(false);
 const [fullScreen,setFullScreen] = useState<boolean>(false)
 const mapRef = useRef<HTMLDivElement>(null);

 const changeZoom = (type : boolean)=> {
    if(type) {
        setZoom((z)=> z < 20? z+1:z)
    }else {
        setZoom((z)=> z > 1? z-1:z)
    }
 }

 const getCurrentLocation = ()=> {
    navigator.geolocation.getCurrentPosition((location)=> {
        let coordsTemp = coords;
        setCoordsCureentTemp(coordsTemp)
        setCoordsCureent({latitude:location.coords.latitude,longitude:location.coords.longitude});
        setCoords({latitude:location.coords.latitude,longitude:location.coords.longitude});
        setOpenCurrentLocation(true);
        setZoom(14);
    })
 }
const unViewCurrentLocation = () => {
    let coordsTemp = coordsCureentTemp;
    setCoords({latitude:coordsTemp.latitude,longitude:coordsTemp.longitude});
    setOpenCurrentLocation(false);
    setZoom(12);
}

const openFullScreen = ()=> {
    if(mapRef){
        const fullScreenE = mapRef.current;
        if(fullScreenE?.requestFullscreen && !fullScreen) {
            fullScreenE?.requestFullscreen( {
                navigationUI: 'show',
              });
        }else {
            document.exitFullscreen();
        }
        setFullScreen(screnn => !screnn)
    }
}

  return (
     <div className="map-contain" ref={mapRef}>
        <div className="map-contain__tool">
            <div className="map-contain__tool-button map-contain__tool-button--location">
                {openCurrentLocation?
                <MdOutlineLocationSearching  className='map-contain__tool-icon--open' size={25} onClick={()=>unViewCurrentLocation()}/>:
                <MdMyLocation  className='map-contain__tool-icon--close' size={25} onClick={()=>getCurrentLocation()}/>}
            </div>
            <div style={{opacity: zoom >= 20 ? 0.5:1}} onClick={()=>changeZoom(true)} className="map-contain__tool-button map-contain__tool-button--plus">
                <AiOutlinePlus  className='map-contain__tool-icon' size={25}></AiOutlinePlus>
            </div>
            <div style={{opacity: zoom <= 2 ? 0.5:1}} onClick={()=>changeZoom(false)} className="map-contain__tool-button map-contain__tool-button--minus">
                <AiOutlineMinus  className='map-contain__tool-icon' size={25}></AiOutlineMinus>
            </div>
        </div>
        <div className=" map-contain__tool-button map-contain__full-screen" onClick={()=>openFullScreen()}>
            {
                fullScreen?<MdOutlineZoomInMap  className='map-contain__full-screen-open' size={25} />:
                <MdOutlineZoomOutMap className='map-contain__full-screen-close' size={25}/>
            }
        </div>
        <div className="map-contain__main">
        <Map
            mapboxAccessToken= {import.meta.env.VITE_MAP_BOX_TOKEN}
            initialViewState={{
                longitude: coords.longitude,
                latitude: coords.latitude,
                zoom: zoom
            }}
            latitude={coords.latitude}
            longitude={coords.longitude}
            onDrag={(e)=>{const {latitude,longitude} = e.viewState; setCoords({latitude,longitude}); setOpenCurrentLocation(false)}}
            onZoom={(e)=>{const {zoom:zoomZ} = e.viewState; setZoom(z=> z >=20 ?z:Math.floor(zoomZ))}}
            zoom={zoom}
            style={{width: "100%", height: "100%"}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            > 
            { openCurrentLocation && <Marker longitude={coordsCurrent.longitude} latitude={coordsCurrent.latitude}  anchor="center">
                <MarkerPoint location={false} mainPoint={true}/>
                </Marker>
            }
            
            </Map>
        </div>
     </div>
  )
}