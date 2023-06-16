import { CSSTransition } from 'react-transition-group'
import loginimage from '@assets/coffee-break.svg'
import { useAppDispatch, useAppSelector, useCheckpoint } from '@hooks/index'
import { overlay } from '@reduxslice/trigger.overlay.slice'
import FormLogin from './FormLogin'
import { FaTimes } from '../common'
import '@styles/login.scss'
import { useState } from 'react'
import ForgetPassword from './ForgetPassword'
import Register from './Register'

type Props = {}


export default function Login({ }: Props) {
  const { value} = useAppSelector(state => state.trigger);
  const { deviceCurrent } = useCheckpoint('');
  const dispatch = useAppDispatch();
  const [currentPage, setCurrenrPage] = useState<number>(0);
  /* 0: current 1: forget 2: signup */

  return (
    <>
      {
    (value == 9) ?
    ((deviceCurrent === 'moblie')?
    <CSSTransition
      in={true}
      timeout={500}
      unmountOnExit
      classNames={'login-mobile'}>
        <div className="login">
          <div className="login__close">
            <FaTimes size={25} className="login__icon" onClick={() =>  dispatch(overlay())} />
          </div>
          {
            !currentPage ?
            <FormLogin changePage={setCurrenrPage} ></FormLogin>:currentPage ==1?
            <ForgetPassword changePage={setCurrenrPage}/>: <Register changePage={setCurrenrPage} />
          }
          <div className="login__image" style={{ backgroundImage: `url(${loginimage})`}} >
          </div>
        </div>
    </CSSTransition>
    :
      <div className="login">
        <div className="login__close">
          <FaTimes size={25} className="login__icon" onClick={() =>  dispatch(overlay())} />
        </div>
        {
          !currentPage ?
          <FormLogin changePage={setCurrenrPage} ></FormLogin>:currentPage ==1?
          <ForgetPassword changePage={setCurrenrPage}/>: <Register changePage={setCurrenrPage} />
        }
        <div className="login__image" style={{ backgroundImage: `url(${loginimage})`}} >
        </div>
      </div> 
        )
        : null
      }
    </>
  )
}