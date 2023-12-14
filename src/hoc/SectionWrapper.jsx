import React from "react";
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { staggerContainer } from "../utils/motion";


// Higher order wrapper for most components
const SectionWrapper = (Component, idName) => 
    function HOC(){
        return (
            // Wrap in motion section for flyins and universal containers
            <motion.section variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.25}}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                {/* Link to idname (scrolls to invisible span lol) */}
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>

                <Component/>
            </motion.section>
        )
    }


export { SectionWrapper }