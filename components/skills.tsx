"use client";

import React, { use } from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView("Skills");

  return (
    <section ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40" id="skills">
        <SectionHeading>My Skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {
                skillsData.map((skill, index) => (
                    <motion.li key={index} className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-gray-100/80 transition-colors duration-500"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
            ))}
        </ul>
    </section>
  )
}
