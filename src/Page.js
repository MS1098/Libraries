import React, { useEffect,useState,useRef } from "react";
import "./base.css"
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";
import img10 from "./img/10.jpg";
import img11 from "./img/11.jpg";
import img12 from "./img/12.jpg";
import img13 from "./img/13.jpg";
import img14 from "./img/14.jpg";
import img15 from "./img/15.jpg";
import img16 from "./img/16.jpg";
import img17 from "./img/17.jpg";
import { gsap } from 'gsap';
import { map, lerp, getMousePos, calcWinsize } from './utils';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from 'splitting';
import {motion} from "framer-motion";
import Product1 from "./Product1";
import {Link} from "react-router-dom";
// import { MouseMoveController } from './mouseMoveController';
// import { Menu } from './menu';



function Page() {
    Splitting()

// const Menue= useRef(Menu)


    // useEffect(()=>{
    //    


    // })
 
   


    return (
        <div  className="loading">
            <main>
                <div className="frame">
                    <h1 className="frame__title">Menu Thumb Stack Animation</h1>
                    <nav className="frame__links">
                        <a className="hover-line" href="http://tympanus.net/Tutorials/SurfaceSampling/">Previous demo</a>
                        <a className="hover-line" href="https://tympanus.net/codrops/?p=56500&preview=true">Article</a>
                        <a className="hover-line" href="https://github.com/codrops/MenuThumbStackAnimation">GitHub</a>
                    </nav>
                    <div className="frame__author"><a href="https://www.twitter.com/codrops">@codrops</a></div>
                </div>
                <div className="stack-wrap" aria-hidden="true">
                    <div className="stack" id="stack-1">
                        <img className="stack__img" src={img1} alt="Some image" />
                        <img className="stack__img" src={img2} alt="Some image" />
                        <img className="stack__img" src={img3} alt="Some image" />
                        <img className="stack__img" src={img4} alt="Some image" />
                        <img className="stack__img" src={img5} alt="Some image" />
                        <img className="stack__img" src={img6} alt="Some image" />
                        <img className="stack__img" src={img7} alt="Some image" />
                    </div>
                    <div className="stack" id="stack-2">
                        <img className="stack__img" src={img8} alt="Some image" />
                        <img className="stack__img" src={img9} alt="Some image" />
                        <img className="stack__img" src={img10} alt="Some image" />
                        <img className="stack__img" src={img11} alt="Some image" />
                        <img className="stack__img" src={img12} alt="Some image" />
                        <img className="stack__img" src={img13} alt="Some image" />
                        <img className="stack__img" src={img14} alt="Some image" />
                    </div>
                    <div className="stack" id="stack-3">
                        <img className="stack__img" src={img15} alt="Some image" />
                        <img className="stack__img" src={img16} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                    </div>
                    <div className="stack" id="stack-4">
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                    </div>
                    <div className="stack" id="stack-5">
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                    </div>
                    <div className="stack" id="stack-6">
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                        <img className="stack__img" src={img17} alt="Some image" />
                    </div>
                </div>
                <nav   className="menu menu--open">
                    <a className="menu__item" data-stack="stack-1" data-content="content-1">Cogno Frank</a>    
                    <a  className="menu__item" data-stack="stack-2" data-content="content-2">Loca di Marta</a>
                    <a  className="menu__item" data-stack="stack-3" data-content="content-3">Missy Mac Blue</a>
                    <a  className="menu__item" data-stack="stack-4" data-content="content-4">Luxtroc Chunk</a>
                    <a  className="menu__item" data-stack="stack-5" data-content="content-5">Muck Galli</a>
                    <a  className="menu__item" data-stack="stack-6" data-content="content-6">Iris Catapult</a>
                </nav>
                <section className="content-wrap">
                    <div className="content" id="content-1">
                        <h2 className="content__title">Cogno Frank</h2>
                        <p className="content__text">
                            My cold human, you inspire me to write.<br />
                            I love the way you pray, resist and fly,<br />
                            Invading my mind day and through the night,<br />
                            Always dreaming about the hot hereby.<br />
                        </p>
                    </div>
                    <div className="content" id="content-2">
                        <h2 className="content__title">Loca di Marta</h2>
                        <p className="content__text">
                            Let me compare you to a green balloon?<br />
                            You are more dandy, bandy and freaky.<br />
                            Big sun heats the handy peaches of June,<br />
                            And summertime has the randy rekey.<br />
                        </p>
                    </div>
                    <div className="content" id="content-3">
                        <h2 className="content__title">Missy Mac Blue</h2>
                        <p className="content__text">
                            How do I love you? Let me count the ways.<br />
                            I love your lovely heart, soul and head.<br />
                            Thinking of your sandy soul fills my days.<br />
                            My love for you is the cheeky embed.<br />
                        </p>
                    </div>
                    <div className="content" id="content-4">
                        <h2 className="content__title">Luxtroc Chunk</h2>
                        <p className="content__text">
                            My cold human, you inspire me to write.<br />
                            I love the way you pray, resist and fly,<br />
                            Invading my mind day and through the night,<br />
                            Always dreaming about the hot hereby.<br />
                        </p>
                    </div>
                    <div className="content" id="content-5">
                        <h2 className="content__title">Muck Galli</h2>
                        <p className="content__text">
                            Let me compare you to a green balloon?<br />
                            You are more dandy, bandy and freaky.<br />
                            Big sun heats the handy peaches of June,<br />
                            And summertime has the randy rekey.<br />
                        </p>
                    </div>
                    <div className="content" id="content-6">
                        <h2 className="content__title">Iris Catapult</h2>
                        <p className="content__text">
                            How do I love you? Let me count the ways.<br />
                            I love your lovely heart, soul and head.<br />
                            Thinking of your sandy soul fills my days.<br />
                            My love for you is the cheeky embed.<br />
                        </p>
                    </div>
                    <div className="content" id="content-7">
                        <h2 className="content__title">Iris Catapult</h2>
                        <p className="content__text">
                            My cold human, you inspire me to write.<br />
                            I love the way you pray, resist and fly,<br />
                            Invading my mind day and through the night,<br />
                            Always dreaming about the hot hereby.<br />
                        </p>
                    </div>
                    <div className="content" id="content-8">
                        <h2 className="content__title">Anthony Gun</h2>
                        <p className="content__text">
                            Let me compare you to a green balloon?<br />
                            You are more dandy, bandy and freaky.<br />
                            Big sun heats the handy peaches of June,<br />
                            And summertime has the randy rekey.<br />
                        </p>
                    </div>
                    <button className="unbutton close"><span className="close__cross">&#10539;</span><span>Close</span></button>
                </section>
                <svg className="circle" vector-effect="non-scaling-stroke" width="1600" height="1600"><circle vector-effect="non-scaling-stroke" cx="800" cy="800" r="330" data-svg-origin="800 800" transform="matrix(1,0,0,1,0,0)" style={{transformorigin:"0px 0px"}}></circle></svg>
            </main>
        </div>
    )
}
export default Page;