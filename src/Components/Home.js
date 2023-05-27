import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[confirmedPassword,setConfirmedPassword]=useState('')
  const[msg1,setMsg1]=useState('')
  const[msg2,setMsg2]=useState('')
  function signup(){
    if(password!=="" && confirmedPassword!=="" && password===confirmedPassword && name && email){
    //  let obj={
    //   'name': name,
    //   'email': email,
    //   'password': password,
    //   'confirmedPassword': confirmedPassword
    //  }
     
    //  localStorage.setItem("obj",JSON.stringify(obj))
    localStorage.setItem('name',JSON.stringify(name))
    localStorage.setItem('email',JSON.stringify(email))
    localStorage.setItem('password',JSON.stringify(password))
    localStorage.setItem('confirmedPassword',JSON.stringify(confirmedPassword))
      setMsg1('Signup Successfully!')
      navigate('/profile')
    }
    else{
      setMsg2("Error: All The Fields Are Mendatory!")
    }
  }
  return (
    <div className='main-container'>

      <h1>Signup</h1>

      <input type='text' placeholder='Full Name' onChange={(e)=>setName(e.target.value)} required></input><br></br><br></br>
      <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} required></input><br></br><br></br>
      <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required></input><br></br><br></br>
      <input type='password' placeholder='Confirmed Password' onChange={(e)=>setConfirmedPassword(e.target.value)} required></input><br></br><br></br><br></br>
       <button onClick={signup}>Signup</button>

       <p className='msg1'>{msg1}</p>
       <p className='msg2'>{msg2}</p>

    </div>
  );
}

export default Home;
