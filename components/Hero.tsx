import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link';

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hey .. My name is Khalil",
            "I am a Full Stack Engineer",
            "Don't hesitate to reach out"
        ],
        loop: true,
        delaySpeed: 2500,
    })


    return (

        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                className='rounded-full -2 mx-auto'
                src='/images/portfolio.jpeg'
                alt="Author's Picture"
                width={130}
                height={130}
                style={{ position: "relative", objectFit: "cover" }}

            />

            <div className='z-20'>
                <h2 className='text-sm uppercase text-grey-500 pb-2 tracking-[12px]'>
                    Full Stack Software Engineer
                </h2>
                <h1 className='text-2xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton hover:text-[#242424]'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton hover:text-[#242424]'>Experience</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton hover:text-[#242424]'>Projects</button>
                    </Link>
                    <Link href="#contact">
                        <button className='heroButton hover:text-[#242424]'>Contact Me</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero