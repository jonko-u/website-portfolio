'use client';
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import { useForm,SubmitHandler } from 'react-hook-form'
import pageInfo from '../../Sanity/schemas/pageInfo'
import { PageInfo } from '@/typing'
type ContactMeProps = {
    pageInfo: PageInfo | undefined;
}

type Inputs = {
name:string;
email:string;
subject:string;
message:string;
}
function ContactMe({pageInfo}: ContactMeProps) {
    const {register,handleSubmit, watch, reset} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        const bodyText = `Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  const encodedBody = encodeURIComponent(bodyText);
  const mailtoLink = `mailto:${pageInfo?.email}?subject=${formData.subject}&body=${encodedBody}`;

  window.location.href=mailtoLink;
      };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-14 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact Me
        </h3>
        <div className='flex flex-col'>
            <h4 className='text-4xl font-semibold text-center'>
                I have got just what you need. <span className='underline decoration-[#F7AB0A] animate-pulse'>Lets have a talk.</span>
            </h4>
        </div>
        <div className='space-y-4 mt-[-80px] md:mt-[80px]'>
            <div className='flex items-center space-x-5 justify-center md:justify-start md:px-20'>
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>{pageInfo?.phoneNumber}</p>
            </div>
            <div className='flex items-center space-x-5 justify-center md:justify-start md:px-20'>
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>{pageInfo?.email}</p>
            </div>
            <div className='flex items-center space-x-5 justify-center md:justify-start md:px-20'>
                <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>{pageInfo?.address}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-[500px] px-20 sm:w-[700px] md:w-[800px]' action="">
                <div className='flex flex-row space-x-2 relative'>
                    <input {...register('name')} id='name' placeholder='Name' className='contactInput w-[120px] sm:w-full' type="text" />
                    <input {...register('email')} id='email' placeholder='Email' className='contactInput w-full' type="email" />
                </div>
                <input {...register('subject')} id='subject' placeholder='Subject' className='contactInput' type="text" />
                <textarea {...register('message')} id='message' placeholder='Message' className='contactInput'/>
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'> Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe