import React,{useState} from 'react'
import './mainpage.css'
import axios from './axios'
import {Link} from "react-router-dom";
function Mainpage() {
    
const [username,Setusername]=useState("");
const [phonenumber,Setuserphone]=useState("");
const [useremail,Setuseremail]=useState("");
const [usergpa,Setusergpa]=useState("");
const PostData=async()=>{
   await axios.post('/users',{username:username,phonenumber:phonenumber,useremail:useremail,usergpa:usergpa});
}
//   <div className="info">
//   <div className="contentuser">
//        <pre className="txt">user name </pre>
//                <input className="inp" type="text" onChange={(e)=>{Setusername(e.target.value)}}/>
//                <pre className="txt">password </pre>
//                <input  className="inp" type="password" onChange={(e)=>{Setuserpassword(e.target.value)}}/>
//                <pre className="txt">email </pre>
//                <input  className="inp" type="email" onChange={(e)=>{Setuseremail(e.target.value)}}/>
//                <button className="btnu" id="bb" type="submit" onClick={PostData} id="sub">Join</button>
//   </div>

// </div>
    return (
        <div className="mainpage">
            <nav className="menu">
     <ul>
         
     
      <Link className="link" to="/current_term">
         Current Term
      </Link>
      <Link className="link" to="/history">
      History
      </Link>
      <Link className="link" to="/register">
      Register
      </Link>
      
     </ul>
    
 
        
    </nav>
     
    <div className="box">
        
        <h2>Basic Data</h2>
        
        <form>
            
            <div className="inputBox">
             <input type="" name="" required="" onChange={(e)=>{Setusername(e.target.value)}}/>
             <label>Username</label>
            </div>
            <div className="inputBox" >
                <input type="text" name="" required="" onChange={(e)=>{Setuserphone(e.target.value)}}/>
                <label>Phone number</label>
                
            </div>
            <h2>Acadamic Data</h2>
            <div className="inputBox">
             <input type="" name="" required=""onChange={(e)=>{Setuseremail(e.target.value)}}/>
             <label>E-mail</label>
            </div>
            <div className="inputBox">
             <input type="" name="" required="" onChange={(e)=>{Setusergpa(e.target.value)}}/>
             <label>GPA</label>
            </div>
            <input onClick={PostData}  type="submit" name="" value="Submit"/>
        </form>
    </div>

    
    </div>
    )
}

export default Mainpage
