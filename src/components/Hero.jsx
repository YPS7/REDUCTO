import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full max-w-3xl flex justify-center items-center flex-col'>
      <nav className='fixed top-0 w-full bg-slate-100 px-6 z-10'>
        <div className='max-w-2xl flex justify-between items-center mx-auto py-3'>
          <a
            href='https://www.linkedin.com/in/yashpratapsingh07/'
            target='_blank'
            rel='noreferrer'
            className='custom_logo'
          >
            S{/* <img src={logo} alt='logo' className='w-10 object-contain' /> */}
          </a>
          <button
            type='button'
            onClick={() => {
              window.open('https://github.com/YPS7');
            }}
            className='custom_btn'
          >
            GitHub
          </button>
        </div>
      </nav>

      <h1 className='head_text'>
        Summarize articles with <br className='max-md:hidden' />
        <span className='custom_gradient'>REDUCTO&nbsp;</span>
      </h1>
      <h2 className='desc'>
        Where words condence, Wisdom expands. The unriveledquill of knowledge.
      </h2>
    </header>
  );
};

export default Hero;

/* 
sm:pl-16 sm:pr-16 pl-6 pr-6
sm:px-16 md:px-12
*/
