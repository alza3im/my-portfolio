import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

function About({ }: Props) {
    return (
        <div className='relative flex flex-rows h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
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
                className='md:inline-flex hidden d-mb-20 md:mb-0 xs sm:mt-20 flex-shrink-0   object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]'
            />

            <div className="max-h-20 md:max-h-80 lg:max-h-80 text-sm relative space-y-10 px-0 md:px-10">
                <h4 className="lg:text-3xl text-4xl font-semibold">Here is a little background</h4>

                <p className="bg-slate-100 p-1 rounded text-slate-500 ">
                    ❝ Meet Khalil, the fun-loving full-stack engineer with a passion for building awesome web applications! With a background in deep learning, cloud engineering and a love for all things tech❞
                </p>
                <p className="p-1 rounded ">
                    I specialize in building and deploying cutting-edge web applications using the latest technologies. <b>My weapon of choice?</b> <span className="text-[#03A9F4] font-medium rounded-lg bg-indigo-50 px-2">Python and its trusty sidekick, Flask.  </span> With them, I've developed robust and scalable Rest APIs that have served as the backbone of many successful projects. But I don't stop there, I love to play with the front-end too, I'm <b>well-versed in Javascript frameworks such as</b> <span className="text-[#03A9F4] font-medium rounded-lg bg-indigo-50 px-2">React and Vue.js</span>, and I use them to create dynamic and responsive user interfaces that provide seamless experiences. And when it comes to deployment, I don't play around, I <b> put my apps in the cloud</b>, <span className="text-[#03A9F4] font-medium rounded-lg bg-indigo-50 px-2">specifically AWS</span>, it allows me to take advantage of the scalability, reliability, and cost-effectiveness that it offers.
                </p>

                <p className="p-1 rounded ">
                    <b> When it comes to data, I'm a real whiz! </b> I have a deep understanding of data management, <span className="text-[#03A9F4] font-medium rounded-lg bg-indigo-50 px-2"> with skills in cleaning, manipulating, and analyzing large datasets</span> using powerful libraries such as Pandas and Numpy. I can turn data into insights and insights into action.
                </p>

                <p className="p-1 rounded ">
                    So <b>if you're looking for a full-stack engineer</b> who is passionate, skilled, and fun, look no further! <span className="text-[#8BC34A] text-lg rounded-lg bg-indigo-50 px-3"> <Link href="#contact"> Hire me</Link> </span> and let's build something amazing together!
                </p>
            </div>
        </div >
    )
}

export default About