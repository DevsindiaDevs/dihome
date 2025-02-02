"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "./components/ui/aurora-background";
import Footer from "./components/Footer";
export function AuroraBackgroundDemo() {
  return (
    <>
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold text-white text-center">
          Building something amazing. <br /> Will get back soon. Stay tuned!
        </div>
        <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
          Exciting updates are on the way.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-3 text-lg font-medium"
        onClick={()=>{
          window.open("mailto:founder.devsindiaorg@gmail.com")
        }}
        >
          Contact Us
        </button>
      </motion.div>
      <div className="w-full absolute bottom-0">
      <Footer />
      </div>
      
    </AuroraBackground>
    
    </>
  );
}
export default AuroraBackgroundDemo;
