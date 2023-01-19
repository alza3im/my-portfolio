import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from 'framer-motion'

type Props = {}

function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-30 xl:items-center'>
            <motion.div className='flex flex-row items-center'
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}>
                <SocialIcon bgColor='transparent' fgColor='gray' url="https://www.linkedin.com/in/khalil-tarabulsi/" />
            </motion.div>
            <motion.div className='flex flex-row items-center text-gray-300'
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 2.5,
                }}>
                <SocialIcon className='cursor-pointer' bgColor='transparent' fgColor='gray' network='email' url='#contact' />
                <p className='uppercase hidden md:inline-flex text-xs text-gray-500'>get in touch</p>
            </motion.div></header>
    )
}

export default Header