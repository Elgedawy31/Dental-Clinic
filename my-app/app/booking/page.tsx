'use client'
import React, { useState } from "react"
import axios from "axios"
import Link from "next/link"
function Booking() {

    const [fullName  , setYourName] = useState('')
    const [problem , setproblem] = useState('')
    const [time , settime] = useState('')
    const [bookdata , setbookdata] = useState('')

    const arr : number [] = [ 9.5 , 10 , 10.5 , 11 , 11.5 , 12  ,12.5 , 1 , 1.5 , 2 , 2.5 , 3 , 3.5 , 4 , 4.5 , 5 , 5.5 , 6 , 6.5 , 7 , 7.5]


function handleFunc (e : React.FormEvent<HTMLFormElement>) : void {

  e.preventDefault()

   console.log(e.target)

}

function ahaFunc (e : React.ChangeEvent<HTMLSelectElement>) : void  {
  settime(e.target.value)
}



const BookHandler = async (e : React.MouseEvent<HTMLButtonElement>) => {

  e.preventDefault()



  const data = {fullName , problem , time}

const boo = await axios.post('http://localhost:4000/book/11111' , data)

setbookdata(boo.data)

}



  return (
    <div className='container mt-52 m-auto'>
        
        <form onSubmit={handleFunc} >
  <div className="mb-3">
    <label htmlFor="text" className="form-label">Your Full Name</label>
    <input type="text" className="form-control" id="text" aria-describedby="emailHelp" value={fullName} onChange={(e) => {setYourName(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">enter Your Problem</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={problem} onChange={(e) => {setproblem(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="expresctions" className="form-label">choose Your Suitable Time</label>
    <select id=""  onChange={ahaFunc} >
      {arr.map(e => {
        return (
          <option value={e} key={e} >{e}</option>
        )
      })}
    </select>
  </div>
  <div className="mb-3 form-check">
  </div>
  <button type="submit" className="btn btn-success "  onClick={BookHandler} >Book Now</button>
</form>

{
  bookdata &&<Link href='/details' className="btn btn-secondary absolute right-20 bottom-8 z-11" >Show Your Book</Link>
}
</div>

  )
}

export default Booking