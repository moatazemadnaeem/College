import React,{useState,useEffect} from 'react'
import './mainpage.css'
import axios from './axios'
import {Link} from "react-router-dom";
function History() {
    useEffect(()=>{
        axios.get('/current_term').then((response)=>{
            Setuserinfo(response.data)
        })
    },[])
    const getdata=()=>{
        userinfo.map((value,key)=>{
            if(value.username===userID){
                Setname(value.username)
                Setemail(value.useremail)
                Setgpa(value.usergpa)
                Setsubjects(value.Subjects)
            }
        })
    }
const [userinfo,Setuserinfo]=useState([])
const [name,Setname]=useState("")
const [email,Setemail]=useState("")
const [gpa,Setgpa]=useState("")
const [subjects,Setsubjects]=useState([])
const [userID,SetuserID]=useState("");
let hours=0;
    return (
        <div className="history">
            <nav className="menu">
     <ul>
         <Link className="link" to="/">
         Home
         </Link>
    
     </ul>
    
 
        
    </nav>
     
    <div className="box">
        
    <div className="get">
            <h2 >For Basic Data Enter your name</h2>
            <input className="inp"  type="text" name="m2" onChange={(e)=>{SetuserID(e.target.value)}}/>  
        </div>
       <button onClick={getdata}>Get the basic data</button>
   
        
        <form>
            
            <c>Name: {name}</c>
            <c>e-mail: {email}</c>
            <c>GPA:  {gpa}</c>
            {
              subjects.map((value,key)=>{
                  hours=hours+value.hours;
                return (
                    <div key={key}>
                    <h4 className="txt">{key+1} ) {value.subject}</h4>
                </div>
                )
            })
            }
            <br/>
        <c>Credit hours in this term: {hours*14} hours</c>
            <c>Credit hours until this year: {hours*14*2} hours</c>
            <input type="submit" name="" value="Print"/>
        </form>
    </div>
        </div>
    )
}

export default History
