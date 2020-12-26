import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from './axios'
import './mainpage.css'
function Register() {
    const [subjectsuser,Setusersubject]=useState([]);
    const [users,Setusers]=useState([]);
    const [userID,SetuserID]=useState("");
    const [user,Setuser]=useState("");
 //   const [test,Setest]=useState([]);

    const UpdateData=async(userID)=>{
       
        await axios.put('/register',{username:userID,subjects:[...subjectsuser]});
    }
    useEffect(()=>{
        axios.get('/register').then((response)=>{
            Setusers(response.data)
        })
    },[])
    console.log(users);
   
    return (
        <div className="register">
             <nav className="menu">
     <ul>
         <Link className="link" to="/current_term">
         Current Term
         </Link>
         <Link className="link" to="/history">
         History
         </Link>
     
     </ul>
    
 
        
    </nav>
     
    <div className="box">
      
        <h4 className="txt">
        Enter your name to choose the subjects
        </h4>
        <button onClick={()=>{Setuser(userID)}}>Get the Subjects</button>
        <input type="text" name="m2" onChange={(e)=>{SetuserID(e.target.value)}}/> 
       
           {
                users.map((value,key)=>{
                    if(user===value.username){
                        return(
                            <form>
                            <h2>Chosse your courses</h2>
                            <lable class="mm">OOP</lable>
                            <input type="checkbox" name="m0" onChange={(e)=>{e.target.checked?Setusersubject([...subjectsuser,{subject:"OOP",hours:3}]):Setusersubject([...subjectsuser,{subject:""}])}}/>
                            <lable class="mm">Technical writing</lable>
                            <input type="checkbox" name="m2"onChange={(e)=>{e.target.checked?Setusersubject([...subjectsuser,{subject:"Technical writing",hours:2}]):Setusersubject([...subjectsuser,{subject:""}])}}/>
                            <lable class="mm">Computer ethics</lable>
                            <input type="checkbox" name="m0"onChange={(e)=>{e.target.checked?Setusersubject([...subjectsuser,{subject:"Computer ethics",hours:2}]):Setusersubject([...subjectsuser,{subject:""}])}}/>
                            <lable class="mm">Discreat</lable>
                            <input type="checkbox" name="m0"onChange={(e)=>{e.target.checked?Setusersubject([...subjectsuser,{subject:"Discreat",hours:3}]):Setusersubject([...subjectsuser,{subject:""}])}}/>
                            <lable class="mm">IS</lable>
                            <input type="checkbox" name="m0"onChange={(e)=>{e.target.checked?Setusersubject([...subjectsuser,{subject:"IS",hours:3}]):Setusersubject([...subjectsuser,{subject:""}])}}/>
                            <lable class="mm">project managment</lable>
                            <input type="checkbox" name="m0"onChange={(e)=>{e.target.checked?Setusersubject([...subjectsuser,{subject:"project managment",hours:2}]):Setusersubject([...subjectsuser,{subject:""}])}}/>
                            <input type="submit" name="" value="Register" onClick={()=>UpdateData(userID)}/>
                        </form>
                        )
                    }
                   
                })

            }
       
    </div>

        </div>
    )
}

export default Register
