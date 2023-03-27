'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
function Register() {

    const [username , setUserName] = useState('')
    const [password , setPassword] = useState('')
    const [email , setEmail] = useState('')
    const [CPass , setCPass] = useState('')
    const [phone , setphone] = useState('')
    const [userData , setuserData] = useState(null)




    const RegisterFunc = async(e: React.MouseEvent<HTMLButtonElement>) => {

      e.preventDefault()
      
      const data = {
        username , password , CPass , email  , phone
      }

      const mydata = await axios.post('http://localhost:4000/user/signup' , data)



      setuserData(mydata.data)



    }


  return (
    <div className='container mt-5'>
        
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">username</label>
    <input  type="text"  name='username' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={(e) => {setUserName(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">email</label>
    <input  type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => {setEmail(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input  type="password" name='password' className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="confirm" className="form-label">Confirm Password</label>
    <input  type="password" name='CPass' className="form-control" id="confirm" value={CPass} onChange={(e) => {setCPass(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="hone" className="form-label">Phone</label>
    <input  type="text"  name='phone' className="form-control" id="hone" aria-describedby="emailHelp" value={phone} onChange={(e) => {setphone(e.target.value)}} />
  </div>



  <button type="submit" className="btn btn-primary " onClick={RegisterFunc} >Submit</button>
</form>

 <div style={{display:'block' , width:'300px' , margin:'30px auto'}}> You Have Allready Email ? <Link href='/login'>Login</Link></div>

 {userData !== null && <Link href='/login'><button className="btn btn-success">To LoginPage</button></Link>}


    </div>
  )
}

export default Register