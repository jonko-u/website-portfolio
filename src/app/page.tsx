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

export default function Home(){

  
  const {data: pageInfo} = usePageInfo();
  if(!pageInfo){
    return (<RootLayout><div>Loading</div></RootLayout>)
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
      <section id="about" className='snap-center'>
        <About pageInfo ={pageInfo?.pageInfo} />
      </section>
      <section id="experience" className='snap-center '>
        <WorkExperience />
      </section>
      <section id="skills" className='snap-start'>
        <Skills/>
      </section>
      <section id="projects" className='snap-start'>
        <Projects />
      </section>
      <section id="contactme" className='snap-start'>
        <ContactMe pageInfo={pageInfo?.pageInfo}/>
      </section>
      <Link href='#hero'>
        <footer className='sticky bottom-28 ms-6 sm:ms-0 sm:bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-start sm:justify-center'>
            <img className='h-[50px] w-[50px] rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src={urlFor(pageInfo?.pageInfo.heroImage).url()} alt="" />
          </div>
        </footer>
      </Link>
      </div>
    </RootLayout>
  );
};
