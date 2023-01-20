import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Experience } from './Experience'

type Props = {
    experience: Experience
}

function ExperienceCard({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
        snap-always  p-10  hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 mb-'>
            <div className='sm:mt-60 mt-0 h-full sm:h-1/2 shadow-lg px-10 text-sm relative max-w-xs  sm:max-w-md'>

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
                        className='w-32 h-32  p-5 mx-auto rounded-full xl:w-[120px] xl:h-[120px] object-cover'
                        src={experience.companyLogo}
                        alt="company logo"
                    />
                </div>

                <h4 className='text-2xl font-light mx-auto'>{experience.position}</h4>
                <h3 className='font-bold text-1xl mt-1 '>{experience.companyName}</h3>
                <div className='flex space-x-2 my-2'>
                    {experience.skills.map((skill, index) => (
                        <Image key={index} src={skill} className='h-6 w-6 rounded-full animate-pulse' width={50} height={50} alt='' />

                    ))}
                </div>
                <p className='uppercase py-5 text-slate-500 text-sm'>{experience.startDate} - {experience.endDate} </p>

                <div className="overflow-y-scroll h-2/5">
                    <ul className='list-disc space-y-4 ml-5 mb-10 text-sm'>
                        {experience.summaryPoints.map((summaryPoint, index) => (
                            <li key={index}>{summaryPoint}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </article>

    )
}

export default ExperienceCard