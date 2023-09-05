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
    <article className= {`flex flex-col rounded-lg px-6 flex-shrink-0 items-center space-y-7 mt-[20px] snap-center snap-mandatory hover:opacity-100 opacity-40 cursor-pointer duration-200 overflow-y-scroll overflow-x-hidden mx-[-25px]`} style={cardStyle}>
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
        <div className='px-5 md:px-10 '>
            <h4 className='text-2xl sm:text-4xl font-light text-center'>{experience.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1 sm:px-[400px]'>{experience.company}</p>
            <div className='flex space-x-2 my-2 sm:px-[400px]'>
                {/* Tecnology used */}
                {experience.technologies.map((technology)=>(
                    <img key={technology._id} src={urlFor(technology.companyImage).url()} alt="here" className='w-[40px] h-[50px] ml-[30px] sm:ml-0'/>
                ))}
            </div>
            <p className='uppercase py-5 text-gray-300 sm:px-[400px]'>{new Date(experience?.dateStarted).toDateString()} - {""}{experience?.isCurrentlyWorkingHere ? "Present": new Date(experience?.dateEnded).toDateString()}</p>
            <ul className='list-disc text-justify space-y-4 sm:px-[400px] text-lg  overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A] '>
                {experience.points.map((point,i) => (
                    <li key={i}>{point}</li>
                ))}            
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard