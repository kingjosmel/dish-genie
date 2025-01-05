import whiteLogo from '../assets/img/whiteLogo.png';
import Logo from '../components/Logo';
import Video from "../assets/vid/sreenrec.mp4";
import Button from '../components/Button';
import screenrec from '../assets/vid/sreenrec.mp4';
import {Link} from 'react-router-dom';

export default function HomePage() {
  return (
    <>
    <section className="relative overflow-clip">
      <svg
        width="100%"
        height="734"
        className="relative -mt-72 "
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 475L40 511C80 547 160 619 240 647C320 676 400 691 480 691C560 691 640 676 720 662C800 647 880 604 960 568C1040 532 1120 503 1200 532C1280 561 1360 647 1400 691L1440 734V0H1400C1360 0 1280 0 1200 0C1120 0 1040 0 960 0C880 0 800 0 720 0C640 0 560 0 480 0C400 0 320 0 240 0C160 0 80 0 40 0H0V475Z"
          fill="#00FFA6"
        />
      </svg>
     <Logo whiteLogo={whiteLogo} className='absolute top-[32%] left-[4%] md:left-[7%] sm:left-[15%] translate-x-[-50%] z-10 size-40'/>

      <h1 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center font-bold text-6xl md:text-4xl sm:text-1xl sm:w-[300px] mt-6 font-Baloo'>DISH GENIE</h1>
      <p className='absolute top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[510px] text-center font-worksans mt-2 sm:mt-0 sm:text-xs sm:w-[350px]'>An AI recipe generator that helps you create delicious dishes using only the ingredients you have on hand. Just input what’s in your kitchen, and DishGenie will craft a personalized recipe just for you!</p>
    </section>

      <div className='flex items-center justify-center h-full'>
      <video src={screenrec}  autoPlay loop className='max-w-[660px] max-h-[460px] sm:max-w-[320px] sm:max-h-[200px] -mt-44 z-10'>
      </video>
      </div>
      <div>
        <Button title='Get started'/>
      </div>
      </>

  
  );
}
