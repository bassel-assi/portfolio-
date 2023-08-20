import React, { useRef, useState } from "react";
import Navbar from "./nabar";
import Hello from "../imgs/helloWorld.jpg"
import AboutMe from "./aboutMe";
import Skills from "./skills";
export default function Sum(){
    const [hello,setHello] = useState(true)
    const x = useRef()
    const time = setTimeout(changeOpacity,1000)
    const timeOut = setTimeout(()=>setHello(false),3000)
    function changeOpacity(){
        if(x.current !== undefined && x.current !== null){
            x.current.style.opacity = 0
        }
    }
    if(hello){
        return(
           <div className="hello" style={{backgroundImage : `url(../imgs/helloWorld.jpg)`}} ref={x} onLoad={changeOpacity()}></div>
           )
    }
    
    else{
        return(
            <>
                <AboutMe/>
                <Navbar/>
                <Skills/>
            </>
           
        )
    }
    
}