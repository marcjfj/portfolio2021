import React from 'react';
import mv from '../motionVariants';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Icon } from '@iconify/react';
import logoGithub from '@iconify-icons/carbon/logo-github';
import contentView from '@iconify-icons/carbon/content-view';
const { heroVariants, fadeVariants } = mv;
interface CardProps {
  title: string;
  desc: string;
  image: string;
  source: string;
  demo: string;
}
const CaseStudies = ({ title, desc, image, source, demo }: CardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <motion.div
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeVariants}
      ref={ref}
      transition={{
        delay: 0,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      }}
      className="case-study flex flex-wrap py-16"
    >
      <div className="col order-first lg:order-last f-full lg:w-2/3 lg:pl-16">
        <motion.img
          variants={heroVariants}
          src={image}
          alt={`Screenshot of ${title}`}
          transition={{
            delay: 0.2,
            when: 'beforeChildren',
            staggerChildren: 0.1,
          }}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="col w-full lg:w-1/3 mt-10">
        <motion.h3
          variants={heroVariants}
          className="text-36 text-white font-bold mb-5"
        >
          {title}
        </motion.h3>
        <motion.p variants={heroVariants} className="text-white mb-8">
          {desc}
        </motion.p>
        <motion.div
          variants={heroVariants}
          className="actions flex justify-stretch"
        >
          <a
            href={source}
            target="_blank"
            rel="noreferrer"
            className="btn shadow bg-white inline-flex items-center justify-center mr-6 py-3 px-6 rounded-lg w-1/2 text-center bg-gradient-to-bl from-white to-gray-mid-light transition-all transform hover:-translate-y-1 hover:shadow-lg hover:bg-white"
          >
            <Icon
              icon={logoGithub}
              className="text-brand-dark mr-2 h-6 w-6 flex-shrink-0"
            />
            <span className="text-brand-dark">Source Code</span>
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="btn bg-white inline-flex items-center justify-center mr-4 py-3 px-6 rounded-lg w-1/2 text-center bg-gradient-to-bl from-white to-gray-mid-light transition-all transform hover:-translate-y-1 hover:shadow-lg hover:bg-white"
          >
            <Icon
              icon={contentView}
              className="text-brand-dark mr-2 h-6 w-6 flex-shrink-0"
            />
            <span className="text-brand-dark">Demo</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CaseStudies;
