import React from "react";
import style from "./tweets.module.css";
import Tweetcard from "./Tweetcard";
function Tweets() {
    const tweetsdata=[
        {
          "title": "Fundamentals of Product Design",
          "name": "Shreyas Doshi",
          "tag": "Product"
        },
        {
          "title": "User-Centered Design Techniques",
          "name": "Aisha Patel",
          "tag": "UXDesign"
        },
        {
          "title": "Prototyping Strategies for Designers",
          "name": "Chris Thompson",
          "tag": "Prototyping"
        },
        {
          "title": "Visual Hierarchy in UI/UX",
          "name": "Emily Johnson",
          "tag": "UIUX"
        },
        {
          "title": "Effective Design Communication",
          "name": "Alex Rodriguez",
          "tag": "Design"
        }
      ]
      
  return (
    <div>
      <div style={{ padding: "10px 0 10px 0" }}>
        <h2 style={{ fontSize: "22px" }}>{"Tweet Shorts"}</h2>
        <div className={style.subheading}>
          <p>{"Listen to audio versions of tweet threads"}</p>
        </div>
      </div>
      <div className={style.courserander} style={{boder:"1px solid red"}}>
        {tweetsdata.map((item) => (
          <Tweetcard {...item} image={"timage.png"} />
        ))}
      </div>
    </div>
  );
}

export default Tweets;
