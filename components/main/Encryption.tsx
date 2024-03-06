"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";


const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full" id="about-me">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          
          
          
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
         
          
        </div>
       
        <div className="Welcome-box px-[50px] py-[59px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9] flex flex-col justify-center items-center">
          <h1 className="Welcome-text text-[12px]">MY NAME IS WALLABHI SAXENA ,
          I'm not just a coder , innovater 
          I'm a problem solver who relishes the opportunity to tackle  problems and deliver solutions that make a tangible impact
          </h1>
          <h1 className="Welcome-text text-[12px]">  I'm a problem solver who relishes the opportunity to tackle  problems and deliver solutions that make a tangible impact</h1>
          
        </div>
        <div className="Welcome-box px-[50px] py-[59px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9] flex  flex-col justify-center items-center">
          <h1 className="Welcome-text text-[12px]">
           My journey in the tech world began 2022, and since then, I've immersed myself in various facets of the industry.
           <h1 className="Welcome-text text-[12px]">From coding and software architecture to project management and team leadership,</h1>  
           <h1 className="Welcome-text text-[12px]">I've honed a versatile skill set that allows me to navigate the ever-evolving landscape of technology</h1>
          </h1>
        </div>
        <div className="Welcome-box px-[50px] py-[59px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9] flex flex-col justify-center items-center mt-1">
          <h1 className="Welcome-text text-[12px]">Done my schooling (CBSE) from GRM school in bareilly , currently pursuing my undergraduate form Banasthali Vidhyapith</h1>
          <h1>Graduating year  2026</h1>
        </div>
        
        
      </div>
      
     
        
  </div>

   
  );
};

export default Encryption;
