import React from 'react'
import { SocialIcon } from "react-social-icons"

type Props = {}

function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-30 xl:items-center'>
            <div className='flex flex-row items-center'>
                <SocialIcon bgColor='transparent' fgColor='gray' url="https://www.linkedin.com/in/khalil-tarabulsi/" />
            </div>
            <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon className='cursor-pointer' bgColor='transparent' fgColor='gray' network='email' />
                <p className='uppercase hidden md:inline-flex text-xs text-gray-500'>get in touch</p>
            </div></header>
    )
}

export default Header