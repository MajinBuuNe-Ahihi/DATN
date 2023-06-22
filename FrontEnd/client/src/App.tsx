import { ReactElement, useState } from 'react'
import  ReactDOM  from 'react-dom'
import { ToastContainer } from 'react-toastify'
import { ButtonScroll, Overlay,PreviewImage} from './components/common'
import Login from './components/login/Login'
import { RouterMain } from './router';
import './styles/app.scss'
import PreviewMultipleImages from './components/common/PreviewMultipleImages'

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
      <PreviewMultipleImages currentImage='https://res.cloudinary.com/hauimanhneahihi/image/upload/v1655897405/fp3xdpyrwyhcccapbaxy.jpg' listImage={['https://res.cloudinary.com/hauimanhneahihi/image/upload/v1655897437/cxaon62f5rig5z1ptswu.jpg','https://res.cloudinary.com/hauimanhneahihi/image/upload/v1653445091/jjinp1ngfwh3v3ojhrst.jpg']}></PreviewMultipleImages>
      {ReactDOM.createPortal(<Overlay />, document.getElementById('overlay') as HTMLElement)}
      {ReactDOM.createPortal(<PreviewImage />, document.getElementById('preview') as HTMLElement)}
      {ReactDOM.createPortal(<ButtonScroll />, document.getElementById('button-scroll') as HTMLElement)}
      {ReactDOM.createPortal(<Login />, document.getElementById('popup') as HTMLElement)}
      {ReactDOM.createPortal(toast,document.getElementById('toastify') as HTMLElement)}
    </div>
  )
}

export default App
