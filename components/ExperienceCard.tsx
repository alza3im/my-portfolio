import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
    companyLogo: string;
    position: string;
    companyName: string;
    skills: string[];
    startDate: string;
    endDate: string;
    summaryPoints: string[];
}

function ExperienceCard({ companyLogo, position, companyName, skills, startDate, endDate, summaryPoints }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
        snap-always  p-10  hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 '>
            <div className='shadow-lg px-10 text-sm relative sm:mt-10 max-w-md'>
                <div className='flex flex-row items-center space-x-2 my-2'>
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
                        className='w-32 h-32  p-5 mx-auto rounded-full xl:w-[150px] xl:h-[150px] object-cover'
                        src={companyLogo}
                        alt="company logo"
                    />
                </div>

                <h4 className='text-2xl font-light mx-auto'>{position}</h4>
                <h3 className='font-bold text-1xl mt-1 '>{companyName}</h3>
                <div className='flex space-x-2 my-2'>
                    {skills.map((skill) => (
                        <Image src={skill} className='h-10 w-10 rounded-full' width={50} height={50} alt='' />

                    ))}
                </div>
                <p className='uppercase py-5 text-slate-500 text-sm'>{startDate} - {endDate} </p>
                <ul className='list-disc space-y-4 ml-5 mb-10 text-xs '>
                    {summaryPoints.map((summaryPoint) => (
                        <li>{summaryPoint}</li>
                    ))}
                </ul>
            </div>
            {/* Might need to add the object in the center.. we'll see first */}

        </article>

    )
}

export default ExperienceCard