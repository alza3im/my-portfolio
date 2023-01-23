import React from 'react'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {

        window.location.href = `mailto:khaleel_097@hotmail.com?subject=${formData.subject}&body=${formData.message}`
    }

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10
        justify-evenly mx-auto items-center '>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>
                Contact Me
            </h3>

            <div className="mt-28 w-3/5 sm:w-1/2 flex flex-col space-y-10">
                <h4 className=' text-1xl font-semibold  text-center'>
                    I have got exactly what you are looking for.
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
                    {/* <div className="flex items-center space-x-5 justify-center">
                        <p><span className="text-[#03A9F4] font-medium rounded-lg bg-indigo-50 px-2">Let&apos;s chat</span></p>
                    </div> */}
                </div>

                <form className="space-y-2 bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="form-input focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            {...register('name')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="form-input focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="johndoe@example.com"
                            {...register('email')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            className="form-input focus:outline-none focus:shadow-outline"
                            id="subject"
                            type="text"
                            placeholder="johndoe@example.com"
                            {...register('subject')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                            Message
                        </label>
                        <input
                            className="form-input focus:outline-none focus:shadow-outline"
                            id="message"
                            type="text"
                            placeholder="Hey Khalil, I am in love with your profile..."
                            {...register('message')}
                        />
                    </div>
                    <div className="text-center">
                        <button
                            className="bg-[#03A9F4]/50 text-white py-2 px-4 rounded-lg hover:bg-[#03A9F4]"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Contact