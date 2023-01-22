import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import useSWR from 'swr';
import { fetcher } from '../utilities/fetcher';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

export interface Project {
    image: string;
    title: string;
    description: string;
    link: string;
}

type Props = {}

const Projects = (props: Props) => {
    const { data, error } = useSWR('/api/projectsData', fetcher);

    //Handle the error state
    if (error) return <div className='h-screen flex flex-col relative max-w-full px-10 text-1xl
    mx-auto items-center text-red-400'>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div className='h-screen flex flex-col relative max-w-full px-10 text-1xl
    mx-auto items-center text-yellow-500'>Loading...</div>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const parsedData: Project[] = JSON.parse(data)

    var slider = React.createRef<HTMLDivElement>()

    function scrollLeft() {
        slider.current!.scrollLeft -= 850;
    }

    function scrollRight() {
        slider.current!.scrollLeft += 850;
    }

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
            className='h-screen relative flex overflow-hidden flex-col text-left sm:flex-row max-w-full 
        justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>
                Projects
            </h3>

            <ArrowLeftIcon onClick={scrollLeft} className='text-[#03A9F4] -mr-40 hidden sm:inline-flex md:inline-flex h-7 w-7 cursor-pointer animate-pulse z-40' />
            <div ref={slider} className='relative w-full flex overflow-x-scroll overflow-y-hidden scrollbar 
    scrollbar-track-slate-800 scrollbar-thumb-[#03A9F4] snap-x snap-mandatory z-20'>
                {Object.values(parsedData).map((project, index) => (
                    <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
                                    items-center justify-center p-20 md:p-44 h-screen'>
                        <Link href={project.link}>
                            <div className='relative mt-28 hover:opacity-70 opacity-100 cursor-pointer transition-opacity duration-200'>
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

                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-52 sm:w-[750px] sm:h-[350px]"
                                />
                                <div className="mx-auto space-y-10 px-0 h-36 md:px-10 max-w-2xl">
                                    <h4 className='sm:text-2xl text-1xl  font-semibold text-center'>
                                        {project.title}

                                    </h4>
                                    <div className='sm:text-sm text-xs  text-center '>
                                        <p>
                                            {project.description}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </Link>
                    </div>

                ))}

            </div>
            <ArrowRightIcon onClick={scrollRight} className='text-[#03A9F4] -ml-40  hidden  md:inline-flex sm:inline-flex h-7 w-7 cursor-pointer animate-pulse z-40' />
            <div className='w-full absolute top-[25%] bg-[#03A9F4]/10 left-0 h-[500px] -skew-y-12'>

            </div>
        </motion.div >
    )
}

export default Projects