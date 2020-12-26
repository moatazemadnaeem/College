import React,{useState,useEffect} from 'react'
import './mainpage.css'
import axios from './axios'
import {Link} from "react-router-dom";
function CurrentTerm() {
    const [userID,SetuserID]=useState("");
    const [userinfo,Setuserinfo]=useState([])
    const [name,Setname]=useState("")
    const [email,Setemail]=useState("")
    const [gpa,Setgpa]=useState("")
    const [subjects,Setsubjects]=useState([])
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
    console.log(userinfo)
    return (
        <div className=" currentTerm">
              <nav class="menu">
     <ul>
         <Link className="link" to="/history">
         History
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
            <h2>Courses you have registered</h2>
         {
              subjects.map((value,key)=>{
                return (
                    <div key={key}>
                    <h4 className="txt">{key+1} ) {value.subject}</h4>
                </div>
                )
            })
         }
            
        <br/>
            <input type="submit" name="" value="Print"/>
        </form>
    </div>
</div>
    )
}

export default CurrentTerm
