import React, { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../style.css"
import "./background.css"
export default function AboutMe(props){
    const [state,setChange]=useState(true)
    const [changeOpacity,setOpacity]=useState(1)
    const [dinamicaIntro,setIntro]=useState(false)
    const change = useCallback(()=>{
        setChange((prev)=>!prev)
    },[])
    function bringback(){
        setChange(true)
    }
    useEffect(()=>{
        if(!props.showButton && window.innerWidth>980){
            setIntro(true)
        }
        else{
            setIntro(false)
        }
    },[props.showButton,window.innerWidth])
    let numbers = []
    class List{
        static count = -1
        constructor (){
            this.index = List.count++
            this.list=[]
            this.start = Math.floor(Math.random()*51)
            this.opacity=1
            this.createList= ()=>{
                for(let i= 0; i<window.innerHeight/16;i++){
                    this.list[i]=Math.floor(Math.random()*2)
                }
            }
            this.renderList = ()=>{
                let i=-1
                return (
                    this.list.map((number)=>{
                        i++
                        if(i>this.start){
                            return(
                                <span style={{opacity: changeOpacity %2==0 ? "0" : "1"}} >{number}</span>
                            )
                        }
                        else if(0<i<this.start){
                            return(
                                <span style={{opacity: changeOpacity %2==0? "1" : "0"}} >{number}</span>
                            )
                        }
                        else{
                            return(
                                <span style={{opacity:`${1}`}} >{number}</span>
                            )
                        }
                    })
                )
            }
        }
    }
    for(let i=0;i<window.innerWidth/16;i++){
        let list =new List
        list.createList()
        numbers.push(list)
    }
    function renderCntent(){
        return(
            numbers.map((list)=>{
                return (
                <div className="numbers" onMouseEnter={change} >
                    {list.renderList()}
                </div>
                )
            })
        )
    }
    return(
    <>
        <div className="empty-div" style={{left:"0%"}} onMouseMove={change}></div>
        <div className="empty-div" style={{left:"5%"}} ></div>
        <div className="empty-div" style={{left:"10%"}} onMouseMove={change}></div>
        <div className="empty-div" style={{left:"15%"}} ></div>
        <div className="empty-div" style={{left:"20%"}} onMouseMove={change}></div>
                
        <div className="empty-div flex-column align-items-center" style={{width:"50%",left:"25%",justifyContent:"flex-end",display:"flex"}}onMouseEnter={bringback}>
            <button style={{opacity:dinamicaIntro ? "0" : "1",transition:"opacity ease-out 1s", backgroundColor:"rgba(184, 133, 133, 0.5)" }} className="btn" >HIT ME UP</button>
        </div>
        <div className="empty-div" style={{left:"75%"}} onMouseMove={change}></div>
        <div className="empty-div" style={{left:"80%"}} onMouseMove={change}></div>
        <div className="empty-div" style={{left:"85%"}} onMouseMove={change}></div>
        <div className="empty-div" style={{left:"90%"}} onMouseMove={change}></div>
        <div className="empty-div" style={{left:"95%"}} onMouseMove={change}></div>
        <section  className=" section  row align-content-center sticky" style={{zIndex:"-1",color:"rgb(15, 98, 146)"}} >
            <div   className="lists" style={{backgroundColor:"black"}}>
                    {renderCntent()}
            </div>
            <div className="col-6 intro">
                <h1 className=" h-25 flex-box-column title" style={{color: !dinamicaIntro ? "rgb(232, 249, 253)":"green"}}>
                    <span>{!dinamicaIntro ? "Bassel Assi": "01101000  01101100 01101111"}</span>
                    <br></br> {!dinamicaIntro ? "Frontend Devoloper / Process And Material Engineer": "01101000  01101100 01101111 01101000 01101111"} </h1>
                <div></div>
            </div>
        </section>
    </>
    )
}