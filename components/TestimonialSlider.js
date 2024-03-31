// testimonial slider data
export const testimonialSlider = [
  {
    image: '/Servicenow.jpeg',
    name: 'System Administrator',
    position: (
        <div>
          <p>
            <b>
              <a
                href="https://drive.google.com/file/d/1KVeLEEqT8OOMQ_FyE7uGsL9D4D5A-1-L/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded-full"
              >
                View My Certificate
              </a>
            </b>
          </p>
        </div>
      ),
    message:
      'Proficient in managing and optimizing ServiceNow platforms, ensuring seamless workflow automation and effective IT service management. Skilled in configuring, customizing, and maintaining ServiceNow instances to meet organizational needs and enhance operational efficiency.',
  },
  {
    image: '/IBM_logo_in.jpg',
    name: 'IBM Data Science',
    position: (
      <div>
        <p>
          <b>
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/certificate/FM8UVLQPUAWF"
              target="_blank"
              rel="noreferrer"
              className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded-full"
            >
              View My Certificate
            </a>
          </b>
        </p>
      </div>
    ),
    message:
      'In this Professional Certificate, learners developed and honed hands-on skills in Data Science and Machine Learning. Learners started with an orientation of Data Science and its Methodology, became familiar and used a variety of data science tools, learned Python and SQL, performed Data Visualization and Analysis, and created Machine Learning models. In the process, they completed several labs and assignments on the cloud including a Capstone Project at the end to apply and demonstrate their knowledge and skills.',
  },
  {
    image: '/Google.png',
    name: 'Google IT Support',
    position: (
      <div>
        <p>
          <b>
            <a
              href="https://coursera.org/account/accomplishments/professional-cert/PMPLPKZHXVBN"
              target="_blank"
              rel="noreferrer"
              className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded-full"
            >
              View My Certificate
            </a>
          </b>
        </p>
      </div>
    ),
    message:
      'Achieved proficiency through Google IT Support Professional Certificate, mastering essential skills in troubleshooting, networking, system administration, and security. Equipped with hands-on experience and practice-based assessments, I am primed for entry-level IT support roles, bringing a blend of technical expertise and customer service acumen to the table.',
  },
  {
    image: '/MongoDB1.png',
    name: 'Introduction to MongoDB',
    position: (
      <div>
        <p>
          <b>
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/WEQSM2VKBB8Q"
              target="_blank"
              rel="noreferrer"
              className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded-full"
            >
              View My Certificate
            </a>
          </b>
        </p>
      </div>
    ),
    message:
      'Utilized MongoDBs data model for efficient data import, mastering CRUD operations and the Aggregation Framework. Employed Atlas and MongoDB Compass to visualize schemas and manage databases effectively. Leveraged real-world scenarios to enhance skills in data analytics and application development, ensuring practical solutions tailored to business requirements.',
  },
  {
    image: '/Aviatrix.png',
    name: 'Aviatrix Cloud Certified Engineer',
    position: (
      <div>
        <p>
          <b>
            <a
              href="https://drive.google.com/file/d/1bu2M-Hxqfdi6vrUht7PNo8qiJkJcVTG5/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded-full"
            >
              View My Certificate
            </a>
          </b>
        </p>
      </div>
    ),
    message:
      'Multi-Cloud Network Associate certification validates expertise in designing, implementing, and managing multi-cloud network architectures. Demonstrates proficiency in leveraging Aviatrix technologies for seamless connectivity and optimization across diverse cloud environments.',
  },
  {
    image: '/Hackerrank.png',
    name: 'Certified Software Engineer',
    position: (
      <div>
        <p>
          <b>
            <a
              href="https://www.hackerrank.com/certificates/af930ba8d033"
              target="_blank"
              rel="noreferrer"
              className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded-full"
            >
              View My Certificate
            </a>
          </b>
        </p>
      </div>
    ),
    message:
      'I am a certified Software Engineer by Hackerrank, specializing in Problem Solving, SQL, and Rest API development. With proficiency in problem-solving methodologies, I excel in devising efficient algorithms and implementing them in various programming languages. My expertise in SQL enables me to design and optimize database structures, ensuring smooth data retrieval and management. Additionally, I have a strong understanding of Rest API principles, allowing me to develop robust and scalable web services. My Hackerrank certification validates my skills and commitment to continuous learning and problem-solving, making me a valuable asset to any software development team.',
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';
// next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
