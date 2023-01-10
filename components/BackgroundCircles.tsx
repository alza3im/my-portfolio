import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"]
            }}
            transition={{
                duration: 1.5,
            }}
            className='relative flex justify-center items-center'>
            {/* <div className='absolute border border-[#E5E4E2] rounded-full h-[300px] w-[300px] mt-52 animate-ping' /> */}
            <div className='absolute border border-[#E5E4E2] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
            <div className='rounded-full border border-[#E5E4E2] h-[300px] w-[300px] absolute mt-52' />
            <div className='rounded-full border border-[#E5E4E2]  h-[500px] w-[500px] absolute mt-52' />
            <div className='rounded-full border border-[#D3D3D3] opacity-2 absolute h-[650px] w-[650px] mt-52 animate-pulse' />
            {/* <div className='rounded-full border border-[#D3D3D3] opacity-2 absolute h-[450px] w-[450px] mt-52 animate-pulse' /> */}
        </motion.div>
    )
}

export default BackgroundCircles