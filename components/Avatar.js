import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='fixed inset-y-0 left-1/4 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50'>
      <div className='w-80 h-188 relative'>
        <Image
          src={'/Jash.jpeg'}
          width={800}
          height={700}
          alt=''
          className='translate-z-0 w-full h-full rounded-lg'
        />
      </div>
    </div>
  );
};

export default Avatar;

