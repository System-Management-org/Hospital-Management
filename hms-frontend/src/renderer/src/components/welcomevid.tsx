// import { FullScreen, useFullScreenHandle} from "react-full-screen"
import welcomevid from '../assets/welcomevid.mp4'
import { Link } from 'react-router-dom'



function Welcomevid(){
    // const handle = useFullScreenHandle();
    return(
        <div className='w-full h-screen bottom-0'>
        <div className="h-full w-full object-cover p-0 object-center top-0 left-0 right-0 bottom-0 absolute bg-stone-950 overlay">    
            <video autoPlay loop muted src={welcomevid} className='object-cover overscroll-none h-full w-full bottom-0'/>
            <div className='absolute w-3/4 h-full top-1/3 left-56 bottom-1/4 content-center translate-2/4 flex-col justify-center items-center text-center'>
                <h2 className="wlc">Welcome</h2>
                <h1 className="title">Seamless Hospital Management</h1>
                <Link to="/login"><button>Log In</button></Link>
            </div>
            </div>
        </div>
    )
}
export default Welcomevid