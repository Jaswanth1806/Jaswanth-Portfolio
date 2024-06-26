// components
import EducationSliders from '../../components/EducationSliders.js';

// framer motion
import { motion } from'framer-motion';
import { fadeIn } from '../../variants';

const Education = () => {
    return (
        <div className='h-full bg-primary/30 py-32 text-center'>
          <div className='container mx-auto h-full flex flex-col justify-center'>
            {/* title */}
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 mb-8 xl:mb-0'
            >
              Educa<span className='text-accent'>tion.</span>
            </motion.h2>
            {/* slider */}
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
            >
              <EducationSliders />
            </motion.div>
          </div>
        </div>
      );
    };

export default Education;
