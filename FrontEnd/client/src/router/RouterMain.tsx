import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../components/layout'
import { Page404  } from '../components'

const Home = React.lazy(()=>import('../components/Home'))
const  Promo   = React.lazy(()=>import('../components/Promo'))
const  AddPlace  = React.lazy(() => import('../components/addplace'))
const  About= React.lazy(() => import('../components/About'))
const  Contact= React.lazy(() => import('../components/Contact'))
const  Preview  = React.lazy(() => import('../components/preview/Preview'))
const NearYou = React.lazy(()=> import('../components/near-you/Index'))

type Props = {}

export function RouterMain({}: Props) {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home />}></Route>
        <Route path='promo' element={<Promo />}></Route>
        <Route path='add-place' element={<AddPlace />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='preview' element={<Preview />}></Route>
        <Route path='near-you' element={<NearYou/>}></Route>
        {/* <Route path='profile' element={<></>}>
          <Route path=':id' element={<></>} />
          <Route path='settings' element={<></>} />
        </Route> */}
        <Route path='*' element = {<Page404/>}></Route>
      </Route>
    </Routes>
  )
}