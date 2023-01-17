import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

function Experience({ }: Props) {
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
            className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly
        mx-auto items-center">
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>
                Experience
            </h3>
            <div className='w-full flex space-x-5 p-10 snap-x snap-mandatory overflow-x-scroll mt-20 scrollbar scrollbar-track-slate-800 scrollbar-thumb-[#03A9F4]'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />


            </div>
        </motion.div>

    )
}

export default Experience