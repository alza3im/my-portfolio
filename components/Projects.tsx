import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
    const projects = [1, 3, 2]
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                opacity: 1,
            }}
            viewport={{ once: true }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full 
        justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden scrollbar 
    scrollbar-track-slate-800 scrollbar-thumb-[#03A9F4] snap-x snap-mandatory z-20'>
                {/* {projects.map((project) => ( */}
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
                    items-center justify-center p-20 md:p-44 h-screen'>
                    {/* <Link href="https://www.dmc.com/us/p-tik-tok-gallery.html">
                            <div className=' hover:opacity-70 opacity-100 cursor-pointer transition-opacity duration-200'> */}
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.2
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{ once: true }}

                        // src='https://media.istockphoto.com/id/843847560/photo/coming-soon.jpg?s=612x612&w=0&k=20&c=HyKGZr3jnqTKJyHjsa6nmgrOwZ8O3unnyLqmlD5Ggb0='
                        src='images/pixleeTiktokWidget.png'
                        // src='images/comingSoon.jpg'
                        alt='Project'
                        width={800}
                        height={500}
                    //Just find yourself a large image and fit it into the same width
                    />
                    {/* <Image
                                    src='/images/pixleeTiktokWidget.png'
                                    alt="Author's Picture"
                                    width={900}
                                    height={400}
                                    style={{ position: "relative", objectFit: "cover" }}

                                /> */}
                    <div className="space-y-10 px-0 md:px-10 max-w-2xl">
                        <h4 className='text-2xl font-semibold text-center'>
                            Pixlee Turnto&apos;s Shoppable TikTok gallery

                        </h4>
                        <div className='text-sm text-center md:text-left'>
                            <p>Delivered a TikTok Uploader for Pixlee Turnto&apos;s Widgets, used across 100s of clients with over 1000s of widgets, to display TikTok content that generates increased click-through rate.
                            </p>
                        </div>

                    </div>

                    {/* </div>
                        </Link> */}
                </div>


                {/* )) */}
                {/* } */}

            </div>

            <div className='w-full absolute top-[25%] bg-[#03A9F4]/10 left-0 h-[500px] -skew-y-12'>

            </div>
        </motion.div>
    )
}

export default Projects