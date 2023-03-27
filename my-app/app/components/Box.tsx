import Link from "next/link"

type aha ={
    icon: string ,
    head : string
}

function Box(props : aha) {
  return (
    <div className="border-2 border-slate-100 text-center p-2 rounded">
      <i className={props.icon } style={{color:"#333" , marginBottom:'20px' ,}} ></i>
      <h4 className="text-2xl mb-2">{props.head}</h4>
      <p className="text-sm text-slate-700 mb-5"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo incidunt harum obcaecati, ipsam quod delectus dignissimos ipsa tempore odio. Ab expedita magni nam rem. Quasi nihil praesentium officia atque alias!
      </p>
      <Link href='/'></Link>
    </div>
  )
}

export default Box