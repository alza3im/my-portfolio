import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

function About({ }: Props) {
    return (
        <div className='relative flex flex-col h-screen text-center md:text-left lg:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>
                About

            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                viewport={{ once: true }}
                src='/images/portfolio.jpeg'
                className='hidden sm:block lgmt-10 mt-40 xl:mt-10 lg:mt-10 h-32 w-32 object-cover md:rounded-lg xl:w-[300px] xl:h-[400px] lg:w-[300px] lg:h-[400px]'
            />
            <div className="text-sm relative mt-28 sm:mt-10  lg:mb-0 space-y-10 px-0 md:px-10">
                <h4 className="hidden sm:block md:block text-3xl sm:text-1xl font-semibold text-center sm:text-left md:text-left">Here is a little background</h4>
                <p className="bg-slate-100 text-slate-500 font-serif">
                    ❝ Meet Khalil, the fun-loving full-stack engineer with a passion for building awesome web applications! With a background in deep learning, cloud engineering and a love for all things tech❞
                </p>
                <p>
                    I specialize in building and deploying cutting-edge web applications using the latest technologies. <b>My weapon of choice?</b> <span className="text-[#03A9F4] font-medium rounded-lg bg-indigo-50 px-2">Python and its trusty sidekick, Flask.  </span> With them, I&apos;ve developed robust and scalable Rest APIs that have served as the backbone of many successful projects.
                </p>

                <p>But I don&apos;t stop there, I&apos;m <b>well-versed in Javascript frameworks such as</b> <span className="text-[#03A9F4] font-medium rounded-lg bg-indigo-50 px-2">React and Vue.js</span>, and I use them to create dynamic and responsive user interfaces that provide seamless experiences. When it comes to deployment, I <b> put my apps in the cloud</b>, <span className="text-[#03A9F4] font-medium rounded-lg bg-indigo-50 px-2">specifically AWS</span>, taking advantage of its scalability, reliability, and cost-effectiveness.</p>
                <p>
                    <b> When it comes to data, I&apos;m a real whiz! </b> I have a deep understanding of data management, <span className="text-[#03A9F4] font-medium rounded-lg bg-indigo-50 px-2"> with skills in cleaning, manipulating, and analyzing large datasets</span> using powerful libraries such as Pandas and Numpy. I can turn data into insights and insights into action.
                </p>

            </div>
        </div >
    )
}

export default About