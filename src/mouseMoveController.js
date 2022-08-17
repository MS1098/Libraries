import React, { useState, useRef, useEffect } from 'react'
import gsap from "gsap";
import { map, lerp, getMousePos, calcWinsize } from './utils';
import "./base.css";
import MenuItem from './menuItem';

 function MouseMoveController() {
    let winsize = calcWinsize();
    const [mousepos, setmousepos] = useState({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    })

    useEffect(() => {
      window.addEventListener("mousemove", (e)=>{
        setmousepos(mousepos.x = e.clientX)
        setmousepos(mousepos.y = e.clientY)

        console.log(mousepos);
      })

      render()
    }, [])
    


    let el = useRef();
    let boundaries = {x:-100,y:-100,r:0}
    const [transformVals, settransformVals] = useState({
        tx: 0,
        ty: 0,
        r: 0
    })
    const start = (requestId) => {
        if (!requestId) {
            requestId = requestAnimationFrame(() => render());
        }
    }

    const stop = (requestId) => {
        if (requestId) {
            window.cancelAnimationFrame(requestId);
            let requestId = undefined;
        }
    }

    const render = () => {
        let requestId = undefined;

        // calculate the amount to move/rotate.
        // using linear interpolation to smooth things out. 
        // translation values will be in the range of [-boundaries.x, boundaries.x] for a cursor movement from 0 to the window's width. Also the same applies for the height and rotation
        transformVals.tx = lerp(transformVals.tx, map(mousepos.x, 0, winsize.width, -boundaries.x, boundaries.x), 0.07);
        transformVals.ty = lerp(transformVals.ty, map(mousepos.y, 0, winsize.height, -boundaries.y, boundaries.y), 0.07);
        transformVals.r = lerp(transformVals.r, map(mousepos.x, 0, winsize.width, -boundaries.r || 0, boundaries.r || 0), 0.07);

        gsap.set(el.current, { x: transformVals.tx, y: transformVals.ty, rotation: transformVals.r });
        // console.log(transformVals);
        // loop
        start();
    }



    return (
        <div style={{textAlign:"center"}}>
         <svg ref={el} className="circle" vector-effect="non-scaling-stroke" width="1600" height="1600"><circle vector-effect="non-scaling-stroke" cx="800" cy="800" r="330" data-svg-origin="800 800" transform="matrix(1,0,0,1,0,0)" style={{transformorigin:"0px 0px"}}></circle></svg>
        {/* <h1 ref={el} style={{fontSize:"6rem"}}>Movement Of Somwthing</h1> */}
         <MenuItem/>
        </div>
    )
}
export default MouseMoveController;
