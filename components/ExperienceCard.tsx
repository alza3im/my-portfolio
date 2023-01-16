import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px]
        snap-always  p-10  hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-y-scroll  '>
            <motion.img
                initial={{
                    y: -100,
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
                className='w-32 h-32 aspect-[3/4] rounded-full xl:w-[200px] xl:h-[200px] object-cover'
                src='/images/pixleeLogo.jpeg'
                alt="company logo"
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-2xl font-light'>Software Engineer</h4>
                <p className='font-bold text-2xl mt-1 '>Pixlee Turnto</p>
                <div className='flex space-x-2 my-2'>
                    <Image src='/images/pixleeLogo.jpeg' className='h-10 w-10 rounded-full' width={50} height={50} alt='' />
                    <Image src='/images/pixleeLogo.jpeg' className='h-10 w-10 rounded-full' width={50} height={50} alt='' />
                    <Image src='/images/pixleeLogo.jpeg' className='h-10 w-10 rounded-full' width={50} height={50} alt='' />
                    <Image src='/images/pixleeLogo.jpeg' className='h-10 w-10 rounded-full' width={50} height={50} alt='' />
                </div>
                <p className='uppercase py-5 text-slate-500'>Started work--- - Ended </p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>point1</li>
                    <li>point1</li>
                    <li>point1</li>
                    <li>point1</li>
                </ul>
            </div>
            {/* Might need to add the object in the center.. we'll see first */}

        </article>

    )
}

export default ExperienceCard