import React from 'react';

function TweetCard({ image, title, tag, name }) {
  const cardStyle = {
    display: "flex",
    width: "100%",
    gap:"10px",
 

   
  };

  const imageContainerStyle = {
    display:"flex",
    flexDirection:"column",
 
    fontSize:"14px",
    maxWidth: '100%',
    minheight:"auto",

   
  };

  const imageStyle = {
height:"100%",
    objectFit: 'cover',
    backgroundColor: 'white', 
  };

  const detailsStyle = {
    display:"flex",
    flexDirection:"column",
  padding:"0 30px 0 10px",
  gap:"10px",
  fontSize:"12px",
  maxWidth: '100%',
  minheight:"auto",

   


    

  };
const tagbody={
    width: "fit-content",
    padding: "2px 5px 2px 5px",
    height:"14px",
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    textAlign:"canter",
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    borderRadius:"10px",
}
  return (
    <div style={cardStyle}>
      <div style={imageContainerStyle}>
        <img
          src={image} // Replace with the actual URL of your image
          alt="Tweet Image"
          style={imageStyle}
        />
      </div>
      <div style={detailsStyle}>
        <div style={tagbody}><p style={{fontSize:"10px"}} >{tag}</p>
            </div>
        <h4 style={{ width:"178px", display:"flex",flexShrink:"0"}} >{title}</h4>
        <p style={{fontSize:"10px",color:"rgba(255, 255, 255, 0.5)"}}>{name}</p>
      </div>
    </div>
  );
}

export default TweetCard;
