import React,{useEffect,useRef,useState} from 'react';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

import  {gsap} from 'gsap';
import {  Timeline } from 'react-gsap';
import  MouseMoveController  from './mouseMoveController';



function MenuItem() {

const el=useRef();

const element=useRef();

const [mouseP, mousePe]=useState()

useEffect(() => {
    window.addEventListener("mousemove", (event)=>{
        var trg = event.target;
        if(trg.tagName.toLowerCase() === 'span') {
            var tl = new Timeline();
            
            tl.to.current(trg, 1, {yPercent:-50, ease:Power2.easeInOut});
            tl.to.current(trg, 1, {yPercent:0, ease:Power2.easeInOut});
        }
      })
})





  return (
    <div>
      <nav ref={el} className="menu menu--open">
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
                    </section>
                   </div>
  )
}

export default MenuItem;