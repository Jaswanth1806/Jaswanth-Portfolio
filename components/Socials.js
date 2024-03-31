// links
import Link from 'next/link';

// icons
import {
  RiGithubLine,
  RiMailSendLine,
  RiLinkedinBoxLine,
  RiPhoneLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/jaswanth-reddy-angeri/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxLine />
      </Link>
      <Link href={'https://github.com/Jaswanth1806'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'jaswanthangeri@gmail.com'} className='hover:text-accent transition-all duration-300'>
        <RiMailSendLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiPhoneLine />
      </Link>
    </div>
  );
};

export default Socials;
