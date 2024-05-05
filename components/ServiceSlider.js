import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';
import { SiIbm, SiFedex, SiLospec, SiKongregate  } from "react-icons/si";
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

export const serviceData = [
  {
    icon: <RxDesktop />,
    path: '/cybervigilancellc_logo.jpeg',
    title: 'Software Engineer Intern',
    description: 'Richordson, USA',
    date: 'May 2023 - Aug 2023',
    text: (
      <div style={{ textAlign: 'left' }}>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
          <li>Collaborated with a senior developer to meticulously optimize JavaScript, HTML, and CSS on the website front-end, which significantly contributed to a 25% increase in website traffic</li>
          <li>Achieved a 10% reduction in page load times by optimizing front-end assets through image compression and code minification, improving user experience and SEO ranking</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <RxDesktop />,
    path: 'UB.jpeg',
    title: 'Technical Student Assistance',
    date: 'Oct 2022 - Apr 2023',
    description: 'Buffalo, USA',
    text: (
      <div style={{ textAlign: 'left' }}>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
          <li>Spearheaded resolution of complex technical issues for students, ensuring seamless connectivity by troubleshooting WiFi connectivity problems and resolving login issues for university-related sites and the DUO authentication app.</li>
          <li>Elevated user experience by creating new designs and maintaining the "UB CDS" website, employing cutting-edge technologies including JavaScript, CSS, HTML, React.js, and PostgreSQL database, streamlining issue reporting and resolution processes.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <SiIbm />,
    path: '/IBM_logo_in.jpg',
    title: 'Senior Software Engineer',
    date: 'Jun 2021 - Jun 2022',
    description: 'Bangalore, IND',
    text: (
      <div style={{ textAlign: 'left' }}>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
          <li>Developed and deployed multiple projects for clients within the Banking/Finance sector using modern JavaScript and React Framework, ensuring high performance and timely delivery.</li>
          <li>Orchestrated a client needs assessment and solution design for a major Banking client, leading to a customized integration that increased the client's operational efficiency by 30% within the first year.</li>
          <li>Migrated Java/Node.js/React.js based applications to AWS, utilizing various AWS services like Lambda, Step functions, S3 bucket, CloudFront, WAF, API Gateway.</li>
          <li>Established optimized team workflows, enhancing productivity in specific scenarios and fostering efficient project completion.</li>
          <li>Maintained regular collaboration with backend, testing, and business analyst teams, as well as stakeholders, to ensure clearcommunication, set correct expectations, and efficiently deliver project outcomes.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <SiIbm />,
    path: '/IBM_logo_in.jpg',
    title: 'Software Engineer',
    date: 'May 2019 - Jun 2022',
    description: 'Bangalore, IND',
    text: (
      <div style={{ textAlign: 'left' }}>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
          <li>Spearheaded the transformation of 5 enterprise-level React applications, achieving a 30% improvement in performance metrics and enhancing user experience.</li>
          <li>Collaborated with UX and Business Analysts to translate business requirements into 10+ robust React solutions, ensuring alignment with project goals and customer needs.</li>
          <li>Led the migration of 3 large-scale applications across JavaScript frameworks, minimizing downtime by 25% and reducing technical debt by 20%.</li>
          <li>Implemented CSS pre-processors like SASS and LESS in 8 projects, optimizing stylesheet management and reducing development time by 15%.</li>
          <li>Contributed to the adoption of React Testing Library and Jest in QC activities, increasing test coverage by 40% and ensuring the reliability of 12 critical applications.</li>
          <li>Applied Agile/Scrum methodology in project management for 15+ initiatives, facilitating efficient team communication, iteration planning, and sprint execution.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <SiIbm />,
    path: '/IBM_logo_in.jpg',
    title: 'Software Developement Intern',
    date: 'May 2018 - Apr 2020',
    description: 'Bangalore, IND',
    text: (
      <div style={{ textAlign: 'left' }}>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
          <li>Collaborated with senior leads on 4 strategic initiatives, contributing to the development of 8 microservices using Java and scripting technologies, resulting in a 30% improvement in system modularity.</li>
          <li>Assisted in the implementation of CI/CD pipelines using Git, Jira, and Jenkins for 2 product ideas, reducing deployment errors by 20% and accelerating time-to-market by 15%.</li>
          <li>Participated in API architecture discussions, proposing optimizations that led to a 25% decrease in latency and a 20% improvement in throughput for 3 incubation projects.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <RxDesktop />,
    path: 'KL.jpeg',
    title: 'Student Teaching Assistance',
    date: 'Sep 2017 - Apr 2018',
    description: 'Guntur, IND',
    text: (
      <div style={{ textAlign: 'left' }}>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
          <li>Worked as a peer mentor for courses ’Operating Systems,’ ’Analysis and design of algorithms,’ and ’Enterprise Programming,’ supporting over 70 students. where I helped in collaborative learning among my peers and assisted my faculty in the lab work.</li>
          <li>Solved students concerns about their projects, assignments and labs in HTML, CSS, Javascript, Java, Unix and Linux concepts and logic building.</li>
        </ul>
      </div>
    ),
  },
];

const ServiceSlider = () => {
  const [popupContent, setPopupContent] = useState(null);

  const handleArrowClick = (item) => {
    setPopupContent(item);
  };

  const handleClosePopup = () => {
    setPopupContent(null);
  };

  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className='h-[240px] sm:h-[340px]'
      >
        {serviceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight
                  className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'
                  onClick={() => handleArrowClick(item)}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
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
              <h2 className='text-black mb-4'>{popupContent.description}</h2>
              <h2 className='text-black mb-4'>{popupContent.date}</h2>
              <p className='text-black mb-4'>{popupContent.text}</p>
              <button
                onClick={handleClosePopup}
                className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceSlider;
