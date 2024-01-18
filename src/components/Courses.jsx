import React from 'react'
import style from "./courses.module.css"
import Card from './Card'
function Courses({title,subtitle}) {

    let coursedata=[
        {
          "time": "2 Hours",
          "chapter": 1,
          "title": "Introduction to Product Design"
        },
       
        {
          "time": "2 Hours",
          "chapter": 3,
          "title": "Ideation and Conceptualization"
        },
        {
          "time": "2 Hours",
          "chapter": 4,
          "title": "Prototyping and Testing"
        },
        {
          "time": "2 Hours",
          "chapter": 5,
          "title": "Finalizing and Delivering Designs"
        }, {
          "time": "2 Hours",
          "chapter": 2,
          "title": "Understanding User Needs"
        },
        {
          "time": "2 Hours",
          "chapter": 2,
          "title": "Understanding User Needs"
        },
        {
          "time": "2 Hours",
          "chapter": 2,
          "title": "Understanding User Needs"
        }
      ]
      
  return (
    <div>
        <div>
            <div style={{padding:"10px 0 10px 0"}}>

            <p style={{fontSize:"22px",padding:"10px 0 10px 0"}}>{title}</p>
            <div className={style.subheading}><p>{subtitle}</p></div>
            </div>
            <div className={style.courserander}>
                {coursedata.map((item)=> <Card{...item}/>)}
               
            </div>

        </div>

    </div>
  )
}

export default Courses