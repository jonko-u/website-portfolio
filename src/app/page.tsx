"use client";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import React from 'react';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/dist/client/link';


import usePageInfo from '../hooks/usePageInfo'
import RootLayout from './layout';
import { urlFor } from '@/sanity';
import Loading from '../components/Loading';

export default function Home(){

  
  const {data: pageInfo, isLoading} = usePageInfo();
  if(isLoading){
    return (<Loading/>)
  }
  return (
    <RootLayout>
      <div className='h-screen w-full snap-y snap-mandatory overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400 scrollbar-thumb-[#F7AB0A]'>

      <Header />
      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero pageInfo = {pageInfo?.pageInfo}/>
      </section>
      {/* About */}
      <section id="about" className='snap-center h-screen'>
        <About pageInfo ={pageInfo?.pageInfo} />
      </section>
      <section id="experience" className='snap-center h-screen'>
        <WorkExperience />
      </section>
      <section id="skills" className='snap-start h-full'>
        <Skills/>
      </section>
      <section id="projects" className='snap-start h-full'>
        <Projects />
      </section>
      <section id="contactme" className='snap-start h-full'>
        <ContactMe pageInfo={pageInfo?.pageInfo}/>
      </section>
      
        <footer className='sticky bottom-28 ms-2 sm:ms-0 sm:bottom-2'>
          <div className='flex items-center justify-start sm:justify-center'>
            <div className='h-[50px] w-[50px]'>
              <Link href="#hero">
                <img className='w-full h-full rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src={urlFor(pageInfo?.pageInfo.heroImage).url()} alt="" />
              </Link>            
            </div>
          </div>
        </footer>
      
      </div>
    </RootLayout>
  );
};
