"use client";
import Image from "next/image"
import { useRef } from "react"
import { useScroll, useTransform,motion, useMotionValue } from "motion/react";

const Scrollanimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target:containerRef

    })
    // useMotionValue(scrollYprogress,"change",(value)=>{
    //     console.log(value);
    // })
    const rotateX = useTransform(scrollYProgress,[0,0.1],[10,0]) ;
    const translateY = useTransform(scrollYProgress,[0,0.1],[0,100]);
    const scale = useTransform(scrollYProgress,[0,0.1],[0.9,1.1]);
    const TextScale = useTransform(scrollYProgress,[0,0.1],[1,0.8]);
    const TextOpacity = useTransform(scrollYProgress,[0,0.1],[1,0.5]);
    const blur = useTransform(scrollYProgress,[0,0.1],[1,0.5]);
    const finalBlur = useTransform(blur, (value) => `blur(${value}px)`);
  return (
    <div  ref = {containerRef} className="h-[400vh] w-full bg-neutral-50 flex flex-col items-center py-80 [perspective:800px] [transform-style:preserve-3d]">
        <motion.h1 style={{
            scale:TextScale,
            opacity:TextOpacity,
            filter:finalBlur
        }} className="text-8xl font-bold text-center">Unleash the power of <br/> scroll animations.</motion.h1>
        <motion.div style={{
           rotateX:rotateX,
           translateZ:"60px",
           y:translateY,
           scale
        }} 
         className="w-[40%] rounded-3xl h-[800px] -mt-6 bg-white shadow-2xl p-2 border-neutral-100">
        <div className="bg-black h-full w-full rounded-[16px] p-2">
            <div className="bg-neutral-100 h-full w-full rounded-[8px]">
                <Image src = "https://assets.aceternity.com/linear-demo.webp" className="h-full w-full object-cover object-left-top" height={1024} width={1024} alt="linear demo"/>
            </div>
        </div>
        </motion.div>

      
    </div>
  )
}

export default Scrollanimation
