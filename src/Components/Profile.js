import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Profile=()=>{
    const navigate=useNavigate();
    const[obj2,setObj2]=useState();
    const[obj3,setObj3]=useState();
    const[obj4,setObj4]=useState();
    const[obj5,setObj5]=useState();
    function logout(){
        setObj2('');
        setObj3('');
        setObj4('');
        setObj5('');
        navigate('/');
    }
    useEffect(()=>{
        setObj2(JSON.parse(localStorage.getItem('name')));
        setObj3(JSON.parse(localStorage.getItem('email')));
        setObj4(JSON.parse(localStorage.getItem('password')));
        setObj5(JSON.parse(localStorage.getItem('confirmed')));
        // console.log("olo")
    },[])
    return(
        <div className="profile-container">
            <h1>Profile</h1>
            <h3>Full Name: {obj2}</h3>
            <h3>Email: {obj3}</h3>
            <h3>Password: {obj4}</h3>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default Profile;
