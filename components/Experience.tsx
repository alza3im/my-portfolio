import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import useSWR from 'swr';

interface experience {
    companyLogo: string;
    position: string;
    companyName: string;
    skills: string[];
    startDate: string;
    endDate: string;
    summaryPoints: string[];
}

type Props = {}
const fetcher = (url: string) => fetch(url).then((res) => res.json())

function Experience({ }: Props) {
    const { data, error } = useSWR('/api/staticdata', fetcher);

    //Handle the error state
    if (error) return <div className='h-screen flex flex-col relative max-w-full px-10 text-1xl
    mx-auto items-center text-red-400'>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div className='h-screen flex flex-col relative max-w-full px-10 text-1xl
    mx-auto items-center text-yellow-500'>Loading...</div>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const parsedData = JSON.parse(data)
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
            <div className='w-full flex space-x-5 p-10 snap-x snap-mandatory  overflow-x-scroll mt-20 scrollbar scrollbar-track-slate-800 scrollbar-thumb-[#03A9F4]'>
                {
                    Object.values(parsedData).map((experience: experience) => (
                        < ExperienceCard companyLogo={experience.companyLogo} position={experience.position} companyName={experience.companyName} skills={experience.skills} startDate={experience.startDate} endDate={experience.endDate} summaryPoints={experience.summaryPoints} />
                    ))

                }


            </div>
        </motion.div>

    )
}

export default Experience