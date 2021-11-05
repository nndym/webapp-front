import { useMenu } from "./Context";
import {motion} from 'framer-motion'

function MegaMenuItem({name,data}){

    let {menuItemHoverStart, menuItemHoverEnd}:any = useMenu();
    
    return (
        <motion.div 
            onHoverStart={()=>{menuItemHoverStart(data)}}
            onHoverEnd={menuItemHoverEnd}
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