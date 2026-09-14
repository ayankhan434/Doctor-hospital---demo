'use client';
import {motion} from 'framer-motion';
export function AnimatedSection({children,className=''}:{children:React.ReactNode;className?:string}){return <motion.div className={className} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.55,ease:'easeOut'}}>{children}</motion.div>}
