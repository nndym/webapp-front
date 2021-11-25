import Button from '@components/Button';
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
        link?: string,
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
                    {index === 0 && <h2 className='text-5xl md:w-3/4 mb-6 font-bold text-blue'>{title}</h2>}
                    {tiles[index].map((item, i) => (
                        <div key={i} className='bg-white mb-4 hover:bg-blue p-8 shadow-sm group hover:shadow-md transition-all hover:text-white'>
                            <h5 className='font-bold text-2xl text-blue group-hover:text-white transition-colors'>{item.title}</h5>
                            <p className="font-light">
                                {item.text}
                            </p>
                            {item.link && <div className='flex my-2'>
                                <Button color='black' href={item.link}>Learn More</Button>
                            </div>}
                        </div>
                    ))}
                </div>
            ))}
        
        </motion.div>
    )
}

export default Tiles
