import React,{useState} from 'react'
import {BsThreeDots, GrFormNext, GrFormPrevious, PiCaretDoubleLeftBold, PiCaretDoubleRightBold} from './Icon'
import '../../styles/paging.scss'


type Props = {
    index: number,
    total: number
    setPaging: React.Dispatch<React.SetStateAction<number>>
}



export default function Paging({index,total,setPaging}: Props) {
    const [first,setFirst] = useState<number>(2);
    const [last,setLast] = useState<number>(4);
    const [hoverNext,setHoverNext] = useState<boolean>(false);
    const [hoverPrevious,setHoverPrevious] = useState<boolean>(false);
    
    const UpdatePaging = (i:number) => {
        setPaging(i);
        if(i == 1 ) {
            setFirst(2);
            setLast(4);
            return;
        }
        if(i == total ) {
            setFirst(total - 3);
            setLast(total-1);
            return;
        }
        if(i < 5 ) 
        {   
            setFirst(2);
            if(i==4){
                setLast(5);
            }else {
                setLast(4)
            }
            return
        } 
        if(i > total - 4) 
        {   
            setLast(total - 1);
            if(i == total-3){
                setFirst(total - 4);
            }else {
                setFirst(total - 3);
            }
            return
        }

        if(i == 5) {
            setLast(i+1);
            setFirst(2);
        }
        else {
            if(i == (total - 4)) {
                setFirst(i-1);
                setLast(total - 1);
            }else {
                setFirst(i-1);
                setLast(i+1);
            }
        }
        setHoverNext(false);
        setHoverPrevious(false);
    }

  return (
   <div className="paging">
    <div className="paging-container">
        <a style={{opacity: (index ==1)?'0.3':'1',pointerEvents: (index ==1)?'none':'auto' }} title='trang trước' className="paging-button paging-previous" onClick={()=>UpdatePaging(index - 1)}>
            <GrFormPrevious size={20}></GrFormPrevious>
        </a>
        <a title='1'  className={`${index == 1?"paging-button paging-item active":"paging-button paging-item"}`} onClick={()=>UpdatePaging(1)}>
            1
        </a>
        {   
            (first > 4) &&
            <a title='tới trước 5 trang' className="paging-button paging-jump" onMouseOver={()=>setHoverPrevious(true)} onMouseLeave={()=>setHoverPrevious(false)} onClick={()=>UpdatePaging(index - 5)}>
                {
                    !hoverPrevious?  <BsThreeDots size={20}></BsThreeDots>: <PiCaretDoubleLeftBold size={20}></PiCaretDoubleLeftBold>
                }
            </a>
        }
        {
            Array.from(Array(last-first+1).keys()).map((item:number,indx: number) => 
                <a title={(first+index).toString()} key={item} className={`${index  == (first+indx)?"paging-button paging-item active":"paging-button paging-item"}`} onClick={()=>UpdatePaging(first+indx)}>
                   {first+indx}
                </a>
                )
        }
        {
            (total - last) > 3 &&
            <a title='tới sau 5 trang' className="paging-button paging-jump" onMouseOver={()=>setHoverNext(true)} onMouseLeave={()=>setHoverNext(false)} onClick={()=>UpdatePaging(index + 5)}>
                {
                    !hoverNext?  <BsThreeDots size={20}></BsThreeDots>: <PiCaretDoubleRightBold size={20}></PiCaretDoubleRightBold>
                }
            </a>
        }
        <a title= {total + ''}  className={`${index == total?"paging-button paging-item active":"paging-button paging-item"}`} onClick={()=>UpdatePaging(total)}>
            {total}
        </a>
        <a title='trang sau' style={{opacity: (index ==total)?'0.3':'1',pointerEvents: (index ==total)?'none':'auto' }} onClick={()=>UpdatePaging(index + 1)} className="paging-button paging-next">
            <GrFormNext size={20}></GrFormNext>
        </a>
    </div>
   </div>
  )
}