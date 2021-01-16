import { motion } from 'framer-motion';
import CaseStudy from './CaseStudy';
import { Icon } from '@iconify/react';
import workData from '../workdata';
import arrowRight from '@iconify-icons/carbon/arrow-right';
import mv from '../motionVariants';
const { heroVariants } = mv;
const listCS = (data: Array<any>) => {
  return data.map((d, i) => (
    <div className="work-item" key={i}>
      <CaseStudy
        title={d.title}
        desc={d.description}
        source={d.source}
        demo={d.demo}
        image={d.image}
      />
    </div>
  ));
};
interface propTypes {
  scrollPos: string;
}
const Work = ({ scrollPos }: propTypes) => {
  return (
    <div className="work-wrapper relative">
      {scrollPos === 'work' ? (
        <motion.div
          className="work-scrim"
          layout
          layoutId="scrim"
          initial="full"
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
        />
      ) : null}
      <div className="container relative py-16">
        <div className="flex flex-col">
          <h2 className="text-48 text-white font-bold">Projects</h2>
          <div className="work-list">{listCS(workData)}</div>
        </div>
        <motion.div
          className="py-10"
          initial="hidden"
          animate={scrollPos === 'work' ? 'visible' : 'hidden'}
          variants={heroVariants}
        >
          <a
            href="https://github.com/marcjfj"
            className="inline-flex items-center group"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-24 text-white mr-2">
              See more of my work on GitHub
            </span>
            <div className="arrow-wrapper transition-all transform-gpu group-hover:translate-x-2 ">
              <Icon
                icon={arrowRight}
                className="fill-current text-white h-10 w-10 inline-block"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
