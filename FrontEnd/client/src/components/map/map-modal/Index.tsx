import { Resource } from '../../../constants'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { CloseMapModalState } from '../../../sliceredux/modal-map.slice'
import { FaTimes, HiLocationMarker } from '../../common/Icon'
import MapContain from './MapContain'
import './map-model.scss'

type Props = {}

const {Map: ResourceMap} = Resource

export default function MapModal({}: Props) {
    const dispatch = useAppDispatch();
    const {openModal} = useAppSelector(state => state.mapmodal)

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