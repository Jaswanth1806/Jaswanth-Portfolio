

export const educationsliders = [
  {
    image: '/UB1.jpeg',
    name: (
      <span>Universtiy at Buffalo, <span className="text-blue-500">SUNY</span></span> // Applying the "text-accent" class
    ),
    message:(
      <div>
        <h1 style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Master of Science, Computer and Information Science</h1>
        <h2>
        <span>Aug 20<span className="text-blue-500">22</span></span> -
        <span> Dec 20<span className="text-blue-500">23</span></span> {/* Applying the class for blue color */}
        </h2>
        <h3 style={{ textDecoration: 'underline' }}>Relevant Coursework:</h3> {/* Underline style */}<p>Data Modelling & Query Language, Analysis of Algorithms, Data Intensive Computing, Modern Network</p>
      </div>

    )
  },
  {
    image: '/KL.jpeg',
    name: (
      <span>K L Univer<span className="text-accent">Sity</span></span> // Applying the "text-accent" class
    ),
    message:(
      <div>
        <h1 style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Bachelor of Engineering, Computer Science & Engineering</h1>
        <h2>
        <span>Jul 20<span className="text-accent">15</span></span> -
        <span> May 20<span className="text-accent">29</span></span> {/* Applying the class for blue color */}
        </h2>
        <h3 style={{ textDecoration: 'underline' }}>Relevant Coursework:</h3><p>Fundamentals of Operating Systems, Object Oriented Programming, Data Structures and Algorithms</p>
      </div>

    )
  },

];
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import Image from 'next/image';


// Accent Line Component
const AccentLine = () => {
  return (
    <div className="h-4/5 w-1 bg-accent absolute top-12 left-0"></div>
  );
};

const EducationSlider = ({ person }) => {
  return (
    <div className="relative overflow-hidden">
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className='h-[400px]'
      >
        <SwiperSlide>
          <div className='flex flex-col md:flex-row items-center gap-4 h-full px-4 md:px-8'> {/* Adjusted padding and added gap */}
            <div className='w-full max-w-[150px] md:max-w-[200px] flex-shrink-0'>
              <div className='flex flex-col justify-center text-center'>
                <div className='mb-2 mx-auto'>
                  <Image src={person.image} width={150} height={150} alt='' />
                </div>
                <div className='text-lg'>{person.name}</div>
              </div>
            </div>
            <div className='flex-1 flex flex-col justify-center'>
              <div className='text-lg text-center md:text-left'>
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const EducationPage = () => {
  return (
    <div className="mx-4 my-8 relative">
      <EducationSlider person={educationsliders[0]} />
      <AccentLine /> {/* Add the Accent Line component */}
      <EducationSlider person={educationsliders[1]} />
    </div>
  );
};

export default EducationPage;



