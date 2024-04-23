import React, { useState } from 'react';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { BiLogoCPlusPlus, BiLogoTypescript, BiLogoFlask, BiLogoSpringBoot } from "react-icons/bi";
import { SiCodio } from "react-icons/si";
import { FaHtml5,FaJava, FaPython, FaCss3, FaJs, FaAngular, FaReact, FaGitSquare, FaLinux, FaAws } from 'react-icons/fa';
import { FaNodeJs } from "react-icons/fa6";
import { SiNextdotjs, SiRedis, SiMongodb, SiMysql, SiPostgresql, SiDocker, SiKubernetes, SiApachekafka, SiApachespark, SiApachejmeter, SiApachemaven, SiSelenium , SiPostman, SiEclipseide, SiMicrosoftazure, SiGooglecloud} from 'react-icons/si';
import { TbBrandVscode } from "react-icons/tb";
import { DiSpark } from "react-icons/di";

export const aboutData = [
  
  {
    title: 'skills',
    info: [
      {
        title: 'Programming Languages',
        icons: [
          <FaJava />,
          <FaPython />,
          <BiLogoCPlusPlus />,
          <SiCodio />,
        ],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <BiLogoTypescript />,
          <FaAngular />,
          <FaReact />,
          <SiNextdotjs />,
          <FaNodeJs />,
          <BiLogoFlask />,
          <BiLogoSpringBoot />
        ],
      },
      
      {
        title: 'Databases',
        icons: [<SiMysql />, <SiRedis />, <SiMongodb />, <SiPostgresql />],
      },
      {
        title: 'Tools',
        icons: [
          <FaGitSquare />,
          <TbBrandVscode />,
          <SiEclipseide />,
          <SiApachekafka />,
          <DiSpark />,
          <FaLinux />,
          <SiApachemaven />,
        ],
      },
      {
        title: 'Cloud',
        icons: [<FaAws />, <SiMicrosoftazure />, <SiDocker />, <SiKubernetes />, <SiGooglecloud /> ],
      },
      {
        title: 'Testing',
        icons: [<SiApachejmeter />, <SiSelenium />, <SiPostman />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: '#include National Level Coding Competion - RunnerUp',
        stage: '2020',
      },
      {
        title: 'Best Idea present of the year - IBM',
        stage: '2021',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Engineer Inter - Cybervigillance',
        stage: '2022 - 2023',
      },
      {
        title: 'Technical Student Assistance - UB, CDS',
        stage: '2022 - 2023',
      },
      {
        title: 'Senior Software Engineer - IBM',
        stage: '2021 - 2022',
      },
      {
        title: 'Software Engineer - IBM',
        stage: '2019 - 2021',
      },
      {
        title: 'Software Developer Inter - IBM',
        stage: '2018 - 2019',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'MSCS - University at Buffalo SUNY, Buffalo, USA',
        stage: '2023',
      },
      {
        title: 'B.Tech CSE  - K L Univeristy, Guntur, IND',
        stage: '2019',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Software <span className='text-accent'>Development</span> Engineer.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            I'm a skilled software developer with experience in Java and Typescript, 
            and expertise in frameworks like React and Spring Boot. 
            I'm a quick learner and collaborate closely with clients to create efficient, scalable, 
            and user-friendly solutions that solve real-world problems. 
            Let's work together to bring your ideas to life!
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className='text-2xl text-white'>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
