"use client";
import useProjects from '@/hooks/useProjects';
import { urlFor } from '@/sanity';
import { Project } from '@/typing';
import { motion } from 'framer-motion'
import Link from 'next/dist/client/link';
import React from 'react'

type Props = {
    projects: Project[];
}

const Projects = () => {
    const {data} = useProjects();
    if(!data){return <div>...</div>}
    const projects: Project[] = data?.projects;

    
  return (
    <motion.div 
        initial={{
            opacity:0,
        }}
        whileInView={{
            opacity:1,
        }}
        transition={{duration:2}}
        className='flex flex-col relative overflow-hidden h-screen text-left md:flex-row max-w-full justify-evenly xl:space-y-0 mx-auto items-center z-0'>
            <div className='pl-5 absolute top-[80px] flex w-full h-[80px] items-center justify-center text-center'>
              <h3
              className=' flex text-center uppercase tracking-[20px] text-gray-500 text-2xl '
              >projects</h3>
            </div>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]'>
                
                {projects.map((project, i) => (
                    // eslint-disable-next-line react/jsx-key
                    <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <Link href={project?.linkToBuild}>
                            <motion.img 
                            initial={{
                                y: -200,
                                opacity:0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity:1,
                            }}
                            transition={{duration:2}}
                            src={urlFor(project?.image).url()}
                            className='w-[100px] sm:w-[250px] md:w-[280px] lg:w-[300px] md:mt-28 flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center sm:px-20 '/>  
                        </Link>                 
                    <div className='space-y-2 mt-[-40px] px-0 sm:mt-[-40px] md:mt-[-40px] lg:mt-[-40px] md:px-10 max-w-6xl'>
                        
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>Case Study {i+1} of {projects.length}:</span>{" "}
                            {project?.title}
                        </h4>
                        <div className='flex flex-row space-x-5'>
                        {project?.technologies.map((tech)=>(
                             
                                <motion.img
                                initial={{
                                    x:-100,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration:1,
                                }}
                                whileInView={{opacity:1,x:0}}
                                src={urlFor(tech.companyImage).url()} 
                                alt={`${tech.title}`}
                                className='rounded-full border border-gray-500 object-cover w-[35px] h-[35px] filter group-hover:grayscale
                                transition duration-300 ease-in-out'
                                key={tech._id}
                                />
                                
                                                        
                        ))}
                        </div>
                        <div className='w-full mx-0  h-[100px] sm:h-full'>
                            <p className='text-lg text-justify md:text-left'>
                                {project.summary}
                            </p>
                        </div>
                    </div>
                    </div>
                    
                    
                ))}
                
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>  
            </div>
    </motion.div>
  )
}

export default Projects