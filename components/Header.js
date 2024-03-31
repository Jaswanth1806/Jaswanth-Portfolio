// next image

// next link
import Link from 'next/link';
import Image from 'next/image'; // Don't forget to import Image from 'next/image'

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          {/* logo */}
          <div className="flex items-center"> {/* New div to contain both logo and text */}
            <Link href={'/'}>
              <Image
                src={'/logo.svg'}
                width={220}
                height={48}
                alt=''
                priority={true}
              />
            </Link>
            <span className="ml-2 text-3xl text-accent font-bold flex items-center h-full mt-1">FOlio.</span> {/* Text beside the logo */}
          </div>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;