
// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Hallucination-in-Chat-bots',
          path: '/Hallu.jpeg',
          text: (
            <div style={{ textAlign: 'left' }}>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                <li>Investigated and addressed the issue of hallucinations in chatbot responses, fine-tuned the model for reduced hallucination, resulting in responses up to 82% hallucination-free, contributing to heightened chat-bot reliability</li>
                <li>Developed a robust model built on RoBERTa for hallucination detection and VRM classification in chat-bot responses and achieved an accuracy of 87.4%</li>
              </ul>
              <p><span className='text-orange-500'>#nlp </span><span className='text-blue-500'>#ai#ml </span><span className='text-green-500'>#dl</span></p>
            </div>
          ),
          githubLink: 'https://github.com/BaluHarshavardan99/Hallucination-in-Chat-bots/blob/main/baluhars.pdf',
        },
        {
          title: 'Bank Management System',
          path: '/Bank.jpeg',
          text: (
            <div style={{ textAlign: 'left' }}>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                <li>Devised an efficient Java-based bank management desktop application, using OOP principles, Java Swings, AWT, JLabel, and JFrame, resulting in a 35% enhanced user experience and 20% reduction in system errors</li>
                <li>Merged a MySQL database with expert Java-MySQL connectivity, incorporating robust exception handling, and contributing to a 15% improvement in query response times, showcasing comprehensive Java proficiency</li>
              </ul>
              <p><span className='text-orange-500'>#java </span><span className='text-blue-500'>#swing#jframe#jlabel </span><span className='text-green-500'>#mysql</span></p>
            </div>
          ),
          githubLink: 'https://github.com/BaluHarshavardan99/Hallucination-in-Chat-bots/blob/main/baluhars.pdf',
        },
        {
          title: 'Colour Guessing Game',
          path: '/color.png',
          text: (
            <div style={{ textAlign: 'left' }}>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                <li>Created an engaging RGB Color Guessing Game, captivating active users and doubling average session by incorporating Flexbox, Grid and ES6</li>
                <li>Implemented HTML5, CSS3, JavaScript, jQuery, Bootstrap, and local storage, resulting in a responsive web app that was 100% based on vanilla JS and deployed on GitHub</li>
              </ul>
              <p><span className='text-orange-500'>#javascript </span><span className='text-blue-500'>#html </span><span className='text-green-500'>#css</span></p>
            </div>
          ),
          githubLink: 'https://github.com/BaluHarshavardan99/Hallucination-in-Chat-bots/blob/main/baluhars.pdf',
        },
        {
          title: 'GameMaster Hub: React Application',
          path: '/game.jpeg',
          text: (
            <div style={{ textAlign: 'left' }}>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                <li>Constructed a responsive video gaming application using React 16, Chakra UI, and RAWG API, enhancing performance for desktop, tablet, and mobile devices, enriching user experience across 3 platforms</li>
                <li>Applied robust CRUD operations, advanced filtering, and sorting features to efficiently organize and access 1000+ games based on compatibility, resulting in a 50% faster search experience for users and incorporated WAI-ARAI practices</li>
                <li>Leveraged Postman for thorough API testing, ensuring seamless integration, and built application to Vercel, yielding a 25% faster deployment and increased reliability</li>
              </ul>
              <p><span className='text-orange-500'>#react </span><span className='text-blue-500'>#chakraUI </span><span className='text-green-500'>#api</span></p>
            </div>
          ),
          githubLink: 'https://github.com/BaluHarshavardan99/Hallucination-in-Chat-bots/blob/main/baluhars.pdf',
        },
      ],
    },
    {
      images: [
        {
          title: 'Hallucination-in-Chat-bots',
          path: '/Hallu.jpeg',
          text: (
            <div style={{ textAlign: 'left' }}>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                <li>Investigated and addressed the issue of hallucinations in chatbot responses, fine-tuned the model for reduced hallucination, resulting in responses up to 82% hallucination-free, contributing to heightened chat-bot reliability</li>
                <li>Developed a robust model built on RoBERTa for hallucination detection and VRM classification in chat-bot responses and achieved an accuracy of 87.4%</li>
              </ul>
              <p><span className='text-orange-500'>#nlp </span><span className='text-blue-500'>#ai#ml </span><span className='text-green-500'>#dl</span></p>
            </div>
          ),
          githubLink: 'https://github.com/BaluHarshavardan99/Hallucination-in-Chat-bots/blob/main/baluhars.pdf',
        },

      ],
    },
  ],
};

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

const handleImageClick = (content) => {
  setPopupContent({
    title: content.title,
    text: content.text,
    githubLink: content.githubLink,
  });
};
const WorkSlider = () => {
  const [popupContent, setPopupContent] = useState(null);

  const handleImageClick = (content) => {
    setPopupContent(content);
  };

  const handleClosePopup = () => {
    setPopupContent(null);
  };

  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='h-[280px] sm:h-[480px]'
      >
        {workSlider.slides.map((slide, slideIndex) => {
          return (
            <SwiperSlide key={slideIndex}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.images.map((image, imageIndex) => {
                  return (
                    <div
                      className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                      key={imageIndex}
                      onClick={() => handleImageClick(image)}
                    >
                      <div className='flex items-center justify-center relative overflow-hidden group'>
                        {/* image */}
                        <Image src={image.path} width={500} height={300} alt='' />
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                        {/* title */}
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            {/* title part 1 */}
                            <div className='delay-100'>LIVE</div>
                            {/* title part 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                              PROJECT
                            </div>
                            {/* icon */}
                            <button
                              className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 focus:outline-none'
                              onClick={(e) => {
                                e.stopPropagation();
                                handleImageClick(image);
                              }}
                            >
                              <BsArrowRight />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* Popup Content Box */}
      {popupContent && (
        <div className='fixed inset-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50'>
          <div className='bg-white p-8 flex flex-col items-center max-w-[35vw] max-h-[90vh] overflow-y-auto' style={{ borderRadius: '20px' }}>
            <img
              src={popupContent.path}
              alt='Logo'
              className='w-40 h-40 rounded-full mb-4'
            />
            <div className='text-center'>
              <h1 className='text-black text-2xl font-semibold mb-4'>
                {popupContent.title}
              </h1>
              <p className='text-black mb-4'>{popupContent.text}</p>
            {/* GitHub button */}
            <a
            href={popupContent.githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-block mt-4'
            >
            GitHub
            </a>
            {/* Close button */}
            <button
              onClick={handleClosePopup}
              className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block mt-4'
            >
              Close
            </button>
            </div>
          </div>
        </div>
     ) }
    </>
  );
};

export default WorkSlider;

