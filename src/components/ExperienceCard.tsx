import { urlFor } from '@/sanity'
import { Experience } from '@/typing'
import { motion } from 'framer-motion'
import React from 'react'
import useResize from '@/hooks/useResize'

type Props = {   
    experience: Experience 
}

const ExperienceCard = ({experience}: Props) => {
    const { width, height } = useResize();
    const imgStyle = {
        height: `${height/3}px`, // Set the height dynamically
        width: `${width/3}px`,   // Set the width dynamically
      };
    console.log(width,height);
    const cardStyle = {
        height: `${height-170}px`, // Set the height dynamically
        width: `${width}px`,   // Set the width dynamically
      };
    return (
    <article className= {`flex flex-col rounded-lg  flex-shrink-0 items-center space-y-7 sm:space-y-3 mt-[20px] snap-center snap-mandatory hover:opacity-100 opacity-40 cursor-pointer duration-200 overflow-x-hidden  lg:mx-0`} style={cardStyle}>
        <motion.img 
        initial={{
            y: -70,
            opacity:0,
        }}
        whileInView={{
            y: 0,
            opacity:1,
        }}
        transition={{duration:2}}
        className={`pt-[70px]`}
        style={imgStyle}
        src={urlFor(experience.companyImage).url()} alt="" />
        <div className='px-1 w-full md:px-10 lg:px-0  lg:w-[1000px] flex flex-col items-center lg:flex lg:flex-col lg:items-center'>
            <h4 className='text-2xl sm:text-4xl font-light text-center'>{experience.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1 md:px-0 lg:px-0'>{experience.company}</p>
            <div className='flex h-[40px] space-x-2 my-2 md:px-0 lg:px-0'>
                {/* Tecnology used */}
                {experience.technologies.map((technology)=>(
                    <img key={technology._id} src={urlFor(technology.companyImage).url()} alt="here" className='w-[40px] h-full  sm:ml-0'/>
                ))}
            </div>
            <p className='uppercase py-5 text-gray-300 sm:px-0'>{new Date(experience?.dateStarted).toDateString()} - {""}{experience?.isCurrentlyWorkingHere ? "Present": new Date(experience?.dateEnded).toDateString()}</p>
            <div className='w-full h-full'>
                <ul className='list-disc flex flex-col items-start text-justify justify-center mx-6'>
                    {experience.points.map((point,i) => (
                        <li key={i} className='ml-0'>{point}</li>
                    ))}            
                </ul>
            </div>
        </div>
    </article>
  )
}

export default ExperienceCard