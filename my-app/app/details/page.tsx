"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";



function Details() {

    const [state , setState] = useState<any[]>([])

    useEffect (()=> {

        const aha =async () => {

            const res = await axios.get('http://localhost:4000/book')


            setState(res.data)


        }
        aha()

    } , [])


    const CancelHandler = async(e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        axios.delete(`http://localhost:4000/book/${e.target.value}`)

        window.location.reload()
    }


  return <div className="container mt-52 m-auto">
    {state.map(e => {
        return(
            <div key={e._id} className='flex justify-between items-center mb-20 mt-10 rounded p-4' style={{border:'1px solid #ccc'}}>

                <div>
                <h3>hello Mr {e.fullName}</h3>
                <p>Your Problem Is {e.problem}</p>
                <p>Your Particular Time Is {e.time}</p>
                </div>
                <button className="btn btn-danger h-fit" value={e._id} onClick={CancelHandler}>Cancel</button>
            </div>
        )
    })}

    {state.length ===0 && <Link href='/booking' className="btn btn-success mt-5 mx-auto w-fit">Booking</Link>}
  </div>;
}

export default Details;
