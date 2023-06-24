import { ReactElement, useState } from 'react'
import  ReactDOM  from 'react-dom'
import { ToastContainer } from 'react-toastify'
import { ButtonScroll, Overlay,PreviewImage} from './components/common'
import Login from './components/login/Login'
import { RouterMain } from './router';
import './styles/app.scss'
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import PreviewMultipleImages from './components/common/PreviewMultipleImages'
import MapModal from './components/map/map-modal/Index'

function App() {
  const toast = <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                // closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover/>
  return (
    <div className="App">
      <RouterMain></RouterMain>
      <MapModal></MapModal>
      {ReactDOM.createPortal(<Overlay />, document.getElementById('overlay') as HTMLElement)}
      {ReactDOM.createPortal(<PreviewImage />, document.getElementById('preview') as HTMLElement)}
      {ReactDOM.createPortal(<ButtonScroll />, document.getElementById('button-scroll') as HTMLElement)}
      {ReactDOM.createPortal(<Login />, document.getElementById('popup') as HTMLElement)}
      {ReactDOM.createPortal(toast,document.getElementById('toastify') as HTMLElement)}
      {ReactDOM.createPortal(<PreviewMultipleImages/>,document.getElementById('preview-multiple') as HTMLElement)}
    </div>
  )
}

export default App
