import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

const Contact = (props: Props) => {
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10
        justify-evenly mx-auto items-center '>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>
                Contact Me
            </h3>

            <div className="mt-20 flex flex-col space-y-10">
                <h4 className=' text-2xl font-semibold text-center'>
                    I have got exactly what you are looking for.
                    <p><span className="text-[#03A9F4] font-medium rounded-lg bg-indigo-50 px-2">Let's chat</span></p>
                </h4>

                <div >

                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className='text-[#03A9F4] h-5 w-5 animate-pulse' />
                        <p className='text-1xl text-left'>khaleel_097@hotmail.com</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className='text-[#03A9F4] h-5 w-5 animate-pulse' />
                        <p className='text-1xl'>Canada</p>
                    </div>
                </div>

                <form className='flex flex-col space-y-2 w-fit mx-auto' action="">
                    <div className='flex space-x-2'>
                        <input placeholder='Name' className='contactInput focus:border-slate-800  hover:border-[#03A9F4]/40' type="text" />
                        <input placeholder='Email' className='contactInput focus:border-slate-800  hover:border-[#03A9F4]/40' type="email" />
                    </div>
                    <input placeholder='Subject' className='contactInput focus:border-slate-800  hover:border-[#03A9F4]/40' type="text" />

                    <textarea placeholder='Message' className='contactInput focus:border-slate-800  hover:border-[#03A9F4]/40' />
                    <button className='bg-[#03A9F4]/50 py-5 px-10 rounded-md text-black'>Submit</button>
                </form>

            </div>

        </div>
    )
}

export default Contact