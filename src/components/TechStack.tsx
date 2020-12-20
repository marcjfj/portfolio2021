import { motion } from 'framer-motion';
import mv from '../motionVariants';
const { heroVariants } = mv;

interface propTypes {
  scrollPos: string;
}
const TechStack = ({ scrollPos }: propTypes) => {
  const techs = [
    'HTML5',
    'CSS3',
    'Sass',
    'PostCSS',
    'Tailwind',
    'JavaScript',
    'ES6+',
    'React',
    'Vue',
    'GSAP3',
    'NodeJS',
    'Express',
    'PHP',
    'Laravel',
    'webpack',
    'Babel',
    'MongoDB',
    'MySQL',
    'Nginx',
    'Git',
  ];

  const listTech = (stack: string[]) => {
    return stack.map((tech: string, i) => (
      <motion.div
        variants={heroVariants}
        initial="hidden"
        className="px-4 rounded-lg mb-4 mr-4 bg-gray-mid-light"
        key={i}
      >
        <span className="text-24 lg:text-36 font-bold text-transparent bg-clip-text dark-grad ">
          {tech}
        </span>
      </motion.div>
    ));
  };
  return (
    <div className="tech-wrapper relative">
      {scrollPos === 'tech' ? (
        <motion.div layoutId="scrim" className="tech-scrim"></motion.div>
      ) : null}
      <div className="container relative">
        <div className="flex min-h-screen flex-wrap items-center flex-col lg:flex-row">
          <motion.div
            className="col w-full lg:w-1/3 lg:pr-16"
            variants={heroVariants}
            initial="hidden"
            animate={scrollPos === 'tech' ? 'visible' : 'hidden'}
          >
            <h3 className="title text-48 text-white font-bold mb-3">
              Tech Stack
            </h3>
            <p className="text-white font-regular mb-6">
              I use many different technologies when developing web
              applications. I am strong believer in taking the time to determine
              the right tool for the job. Here are some my favorites.
            </p>
          </motion.div>
          <motion.div
            animate={scrollPos === 'tech' ? 'visible' : 'hidden'}
            initial="hidden"
            variants={heroVariants}
            transition={{
              delay: 0,
              when: 'beforeChildren',
              staggerChildren: 0.05,
            }}
            className="col w-full lg:w-2/3 lg:px-16 relative flex flex-wrap"
          >
            {scrollPos === 'tech' ? listTech(techs) : null}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
