import { motion } from 'framer-motion';
import mv from '../motionVariants';
import Card from './Card';
const { heroVariants } = mv;
interface propTypes {
  scrollPos: string;
}
const Hero = ({ scrollPos }: propTypes) => {
  return (
    <div className="hero-wrapper relative">
      {scrollPos === 'hero' ? (
        <motion.div
          layout
          className="hero-scrim"
          layoutId="scrim"
          initial="full"
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
        />
      ) : null}
      <div className="container relative">
        <div className="flex flex-wrap items-stretch flex-col lg:flex-row min-h-screen xl:pl-12">
          <motion.div
            initial="hidden"
            animate={scrollPos === 'hero' ? 'visible' : 'hidden'}
            variants={heroVariants}
            className="w-full lg:w-1/2 flex items-center py-6"
          >
            <Card />
          </motion.div>
          <div className="w-full lg:w-1/2 py-6 flex flex-col justify-start lg:justify-center">
            <motion.p
              initial="hidden"
              animate={scrollPos === 'hero' ? 'visible' : 'hidden'}
              variants={heroVariants}
              className="big-text lg:px-10 xl:px-0 text-24 lg:text-24 xl:text-36 xl:-ml-10 font-bold"
            >
              <strong>Hi, Im Marc.</strong> I love building applications and
              creating <strong>great user experiences</strong>. I work as a web
              developer at<strong> Lifted Logic</strong> in Kansas City and also
              as an Adjunct Instructor at
              <strong> The University of Wisconsin's</strong> Full Stack Web
              Development program.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
