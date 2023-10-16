'use client'
import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { PDF, Social, pageInfoPDF } from "@/typing";
import { motion } from "framer-motion";
import useSocials from "@/hooks/useSocials";
import usePDF from "@/hooks/usePDF";
import { getUrlFromId, urlFor } from "@/sanity";
import SocialIconCustom from "@/components/SocialIconCustom";

interface SocialsProps{
  socials: Social[]
}

export default function FetchSocials() {
  // const [socials, setSocials] = useState<Social[]>([]);
  const { data: {socials = []} = {}, error, isLoading} = useSocials();

  const {data: dataPDF, isLoading: isLoadingPdf} = usePDF();
   
  const pdf: pageInfoPDF = dataPDF?.pdf[0].pdf[0]

  const cv: pageInfoPDF = dataPDF?.pdf[0].pdf[1]

  

  if (isLoading || isLoadingPdf) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching social</div>;
  }
  const urlPDF = getUrlFromId(pdf.title.asset._ref)
  const urlImage = urlFor(pdf.companyImage).url()

  const urlCV = getUrlFromId(cv.title.asset._ref)
  const urlImageCV = urlFor(cv.companyImage).url()
  
  return (
    <motion.div 
      initial = {
        {x: -500,
        opacity: 0,
        scale: 0.5}
      }
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5,

      }}      
      className="flex flex-row items-center">      
        {/* Social Icons https://jaketrent.github.io/react-social-icons/*/}               
      {/* Social Icons */}
      {Array.isArray(socials) ? (
        socials.map((social: Social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))
      ) : (
        <div>Data is not in the expected format.</div>)}
        

        <SocialIconCustom alt="image" backgroundImage={urlImage} href={urlPDF}/>
        <SocialIconCustom alt="image" backgroundImage={urlImageCV} href={urlCV}/>
      
        
        
      </motion.div>    
  );
}