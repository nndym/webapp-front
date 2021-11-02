import { useMenu } from "./Context";
import {motion} from 'framer-motion'

let timeout;

function MegaMenuItem({name,data}){

    const {setShow, setInfo, show}:any = useMenu();

    return (
        <motion.div 
            onHoverStart={()=>{
                if(show) {
                    clearTimeout(timeout)
                }
                setShow(true)
                setInfo(data)
            }}
            onHoverEnd={()=>{
                timeout = setTimeout(() => {
                    setShow(false)
                }, 400);
            }}
        >
            <motion.span
                
                className="mx-2 lg:mx-4 font-bold transition-colors hover:text-blue cursor-pointer"
            >
                {name} <i className="las la-angle-down"></i>
                
            </motion.span>      
        </motion.div>
    )
}

export default MegaMenuItem;