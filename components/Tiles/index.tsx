import { motion } from 'framer-motion';
import React from 'react'

function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

function Tiles({data, title}:{
    data: Array<{
        title: string,
        text: string,
        image?: string,
    }>,
    title: string,
}) {

    let tiles = sliceIntoChunks(data, data.length/3);

    return (
        <motion.div 
            className='grid md:grid-cols-3 md:gap-4 my-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={ { duration: 0.7, type: "spring" } }
        >
            {tiles.map((tile, index) => (
                <div key={index}>
                    {index === 0 && <h2 className='text-4xl mb-6 font-bold text-blue'>{title}</h2>}
                    {tiles[index].map((item, i) => (
                        <div key={i} className='bg-white mb-4 hover:bg-blue p-8 shadow-sm hover:shadow-md transition-all hover:text-white'>
                            <h5 className='font-bold text-2xl'>{item.title}</h5>
                            <p className="font-light">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        
        </motion.div>
    )
}

export default Tiles
