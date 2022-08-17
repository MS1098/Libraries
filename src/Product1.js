import React, { useEffect, useRef } from "react";
import "./base.css";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";

function Product1(){
    const img=useRef()
    useEffect(()=>{
      console.log(img)
    })
    return(
        
           <div className="stack-wrap" >
                    <div className="stack" id="stack-1">
                        <img className="stack__img" src={img1} alt="Some image"></img>
                        <img className="stack__img" src={img2} alt="Some image" ></img>
                        <img className="stack__img" src={img3} alt="Some image" ></img>
                        <img className="stack__img" src={img4} alt="Some image" ></img>
                        <img className="stack__img" src={img5} alt="Some image" ></img>
                        <img className="stack__img" src={img6} alt="Some image" ></img>
                        <img className="stack__img" src={img7} alt="Some image" ></img>
                    </div>

        </div>
    )
}

export default Product1;