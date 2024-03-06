"use client";
import React from "react";


import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";


const Footer = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full" id="contact">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-3  pt-5">
            {" "}
           CONTACT ME 🕿{" "}
          </span>
          
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
         
          
        </div>
       
        <div className="Welcome-box px-[30px] py-[160px] z-[30] brder my-[2px] border-[#230d648b]  opacity- flex flex-col justify-center items-center">
          <h1 className="Welcome-text text-[20px]">
            ✉ EMAIL:wallabhisaxena234@gmail.com 
         </h1>
         <h1 className="Welcome-text text-[20px] mt-5">
            📞 PHONE NUMBER:9368641303 
         </h1>
         <h1 className="Welcome-text text-[20px] mt-5">
         😸 GITHUB:<a href="https://github.com/wai86788" >https://github.com/wai86788</a>
         </h1>
         <h1 className="Welcome-text text-[20px] mt-5">
         🔗LINKEDIN:<a href="www.linkedin.com/in/wallabhi-saxena-8a84b4248">linkedin-wallabhi-saxena-8a84b4248</a>
         </h1>
         <h1 className="Welcome-text text-[20px] mt-5">
          ▶ YOUTUBE:<a href="www.youtube.com/@mentalmatrix434">MENTAL MATRIX</a>
         </h1>
        
         
          
        </div>
        
      </div>
      
     
        
  </div>

   
  );
};

export default Footer;

        
          
