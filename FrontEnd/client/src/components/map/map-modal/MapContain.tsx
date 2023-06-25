import { useEffect, useRef, useState } from 'react'
import { Map, Marker, Popup } from 'react-map-gl'
import { AiOutlineMinus, AiOutlinePlus, MdMyLocation, MdOutlineLocationSearching, MdOutlineZoomInMap, MdOutlineZoomOutMap } from '../../common/Icon'
import MarkerPoint from '../MarkerPoint'
import PopupPoint from '../PopupPoint'
import './map-contain.scss'


type Props = {}
const listCoordinate = [
    [21.030653,105.857130],
    [21.040653,105.867130],
    [21.056653,105.877130],
    [21.020653,105.887130],
    [21.023653,105.897130],
    [21.0530653,105.947130]
]

export default function MapContain({}: Props) {
 const [coords,setCoords] = useState<{latitude: number,longitude: number}>({latitude:21.030653,longitude:105.847130})
 const [coordsCureentTemp,setCoordsCureentTemp] = useState<{latitude: number,longitude: number}>({latitude:0,longitude:0});
 const [coordsCurrent,setCoordsCureent] = useState<{latitude: number,longitude: number}>({latitude:0,longitude:0});
 const [zoom,setZoom] = useState<number>(12)
 const [popupLocation,setPopupLocation] = useState<{latitude: number,longitude: number}>({latitude:Number.POSITIVE_INFINITY,longitude:Number.POSITIVE_INFINITY});
 const [openPopup,setOpenPopup] = useState<boolean>(false);
 const [openCurrentLocation,setOpenCurrentLocation] = useState<boolean>(false);
 const [fullScreen,setFullScreen] = useState<boolean>(false)
 const mapRef = useRef<HTMLDivElement>(null);

 const ChangeZoom = (type : boolean)=> {
    if(type) {
        setZoom((z)=> z < 20? z+1:z)
    }else {
        setZoom((z)=> z > 1? z-1:z)
    }
 }

 const GetCurrentLocation = ()=> {
    navigator.geolocation.getCurrentPosition((location)=> {
        let coordsTemp = coords;
        setCoordsCureentTemp(coordsTemp)
        setCoordsCureent({latitude:location.coords.latitude,longitude:location.coords.longitude});
        setCoords({latitude:location.coords.latitude,longitude:location.coords.longitude});
        setOpenCurrentLocation(true);
        setZoom(14);
    })
 }

const UnViewCurrentLocation = () => {
    let coordsTemp = coordsCureentTemp;
    setCoords({latitude:coordsTemp.latitude,longitude:coordsTemp.longitude});
    setOpenCurrentLocation(false);
    setZoom(12);
}


const OpenFullScreen = ()=> {
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


useEffect(()=> {
    if(popupLocation.latitude != Number.POSITIVE_INFINITY) {
        setOpenPopup(true)
    }
},[popupLocation])



  return (
     <div className="map-contain" ref={mapRef}>
        <div className="map-contain__tool">
            <div className="map-contain__tool-button map-contain__tool-button--location">
                {openCurrentLocation?
                <MdOutlineLocationSearching  className='map-contain__tool-icon--open' size={25} onClick={()=>UnViewCurrentLocation()}/>:
                <MdMyLocation  className='map-contain__tool-icon--close' size={25} onClick={()=>GetCurrentLocation()}/>}
            </div>
            <div style={{opacity: zoom >= 20 ? 0.5:1}} onClick={()=>ChangeZoom(true)} className="map-contain__tool-button map-contain__tool-button--plus">
                <AiOutlinePlus  className='map-contain__tool-icon' size={25}></AiOutlinePlus>
            </div>
            <div style={{opacity: zoom <= 2 ? 0.5:1}} onClick={()=>ChangeZoom(false)} className="map-contain__tool-button map-contain__tool-button--minus">
                <AiOutlineMinus  className='map-contain__tool-icon' size={25}></AiOutlineMinus>
            </div>
        </div>
        <div className=" map-contain__tool-button map-contain__full-screen" onClick={()=>OpenFullScreen()}>
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
            {
                listCoordinate.map(coord =>(
                    <Marker key={coord[1]} longitude={coord[1]} latitude={coord[0]}  anchor="center" onClick={()=>{
                        setCoords({latitude: coord[0],longitude:coord[1]})
                        setPopupLocation({latitude: coord[0],longitude:coord[1]})
                    }}>
                        <MarkerPoint location={true} mainPoint={true}/>
                    </Marker>
                ) )
            }
                {openPopup && (
                <Popup longitude={popupLocation.longitude} latitude={popupLocation.latitude}
                    anchor="bottom"
                    closeOnClick={false}
                    closeButton={false}
                   >
                    <PopupPoint closeFunction={()=>setOpenPopup(false)}></PopupPoint>
                </Popup>)}
            </Map>
        </div>
     </div>
  )
}