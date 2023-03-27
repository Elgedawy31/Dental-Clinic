import Link from "next/link";
import img from '../../public/passive.webp'
import Image from "next/image";
type props = {
  data : any
};

function Navbar(props: props) {



  const LogFunc = () =>  {

    localStorage.clear()
    window.location.reload()

  }

  return (
    <div className="flex justify-between py-2  absolute left-0  top-0 h-12  w-full items-center	z-10">
      <div className="left ml-20 text-2xl">Dental</div>
      <div className="right">
        {props.data ? (
          <div className="flex justify-center items-center mr-5 flex-1" style={{display:"flex" , alignItems:'center'}}>
          <Link
            href="/booking"
            className="mr-20 py-1 px-3   bg-slate-50	rounded text-gray-500 "
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Book Now
          </Link>
          <p className="mr-5 text-md ">{props.data.username}</p>
          <Image src={img}  alt="" style={{width:'40px' , height:'40px' , borderRadius:'50%' ,objectFit:'cover'}}></Image>
          <button className=" py-1 px-3 rounded  bg-slate-50	 mx-5 text-sm" onClick={LogFunc}>Logout</button>
          </div>
        ) : (
          <>
            <Link
              href="/login"
              className="mr-20  text-gray-500 py-1 px-3   bg-slate-50	rounded  "
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Login{" "}
            </Link>
            <Link
              href="/register"
              className="mr-20 py-1 px-3  text-gray-500  bg-slate-50	 rounded"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Register{" "}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export { Navbar };
