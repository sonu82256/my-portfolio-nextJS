"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";
import FooterDock from '../../components/FooterDock'

const page = () => {
    return (
        <>
            <LampContainer className="pt-80 h-auto">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-20 bg-gradient-to-br from-slate-300 to-slate-200 py-6 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    <br />
                    <br /> Contact Me
                    <div className="mt-28"><FooterDock /></div>
                    
                </motion.h1>
            </LampContainer>
        </>
    );
};

export default page;
