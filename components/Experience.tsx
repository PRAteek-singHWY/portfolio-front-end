
'use client'
"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

export default function Experience({ }: Props) {
  return (
    <motion.div suppressHydrationWarning 

      initial={{
        opacity: 0
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory snap-center scrollbar-thin scrollbar-thumb-[orange]/80">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
