import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store';
import Loading from './components/common/Loading';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Main from './App'

import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './index.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loading />} >
          <ThemeProvider
            breakpoints={['xxxl', 'xxl','xl','lg','md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs">  
             <Main/>
          </ThemeProvider>
      </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
