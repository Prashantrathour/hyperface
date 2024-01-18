import React from 'react'
import style from "./Card.module.css"
import { useNavigate } from 'react-router-dom';

function Card({title,chapter,time}) {
   const navigate=useNavigate()
        const divStyle = {
          width: '280px',
          height: '160px',
          background: 'linear-gradient(to right,#FAD961, #F76B1C)',
         cursor:"pointer"
        };
  return (
  
    <div style={{width:"280px"}} >
        <div onClick={()=>navigate("/details")} style={divStyle}>

        </div>
        <div style={{padding:"10px 0 10px 0",textDecoration:"none"}}>
        <h4  style={{padding:"10px 0 10px 0",textDecoration:"none",fontSize:"16px"}}>{title}</h4>
        <p className={style.subdetail}><span>{chapter} Chapters</span><span style={{height:"100%",textDecoration:"none"}} >●</span><span>2 hours</span></p>

        </div>

    </div>
    
  
  )
}

export default Card