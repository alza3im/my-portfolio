import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({ }: Props) {
    return (
        // <div className='space-y-8  justify-center  overflow-hidden'>

        <div className='relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
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
                className='d-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]'

            />

            <div className="relative space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">Here is a little background</h4>
                <p className="text-base">
                    As an experienced full stack developer, I specialize in building and deploying cutting-edge web applications using the latest technologies and cloud platforms. My expertise in Python and its associated frameworks such as Flask has enabled me to develop robust and scalable Rest APIs, serving as the backbone of many successful projects. I am experienced in building and deploying these applications in cloud platforms like AWS, which allows me to take advantage of the scalability, reliability, and cost-effectiveness that it offers.


                    I am well-versed in Javascript frameworks such as Vue.js and React, which allows me to develop dynamic and responsive front-end interfaces that provide seamless user experiences. I also possess a deep understanding of data management, with skills in cleaning, manipulating, and analyzing large datasets using powerful libraries such as Pandas and Numpy.

                    In addition, my expertise in deep learning models and techniques has allowed me to develop and integrate advanced predictive models into my projects, delivering high-performance results. I am highly adaptable, with a willingness to take on new challenges and continue learning new technologies as the industry evolves. I am also a strong collaborator, with excellent teamwork skills and a commitment to delivering high-quality products on time.
                </p>
            </div>

        </div>
    )
}

export default About