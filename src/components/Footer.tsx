import Card from './Card';
import { motion, AnimateSharedLayout } from 'framer-motion';
interface propTypes {
  scrollPos: string;
}
const Footer = ({ scrollPos }: propTypes) => {
  return (
    <div className="footer-wrapper relative">
      <motion.div layout className="container min-h-screen flex">
        {scrollPos === 'footer' ? (
          <motion.div
            layout
            initial="full"
            transition={{
              type: 'spring',
              duration: 0.8,
            }}
            className="footer-content-wrapper relative w-full dark-grad rounded-xl my-4 md:my-16 lg:my-20 p-8 lg:p-16 shadow-xl flex items-center"
            layoutId="scrim"
          >
            <motion.div
              className="inner flex flex-col lg:flex-row items-center w-full"
              layout
            >
              <div className="message lg:mr-16">
                <h2 className="text-48 leading-none lg:leading-tight text-white font-bold">
                  Feel free to reach out...
                </h2>
                <p className="text-white lg:text-24 mb-8">
                  You can give me a shout if you'd like to talk about a project.
                </p>
              </div>
              <Card />
            </motion.div>
          </motion.div>
        ) : null}
      </motion.div>
      <div className="container">
        <motion.p className="made-in text-white font-bold md:text-brand-dark md:pr-16 mt-8">
          Made with ☕️ in Kansas City
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
