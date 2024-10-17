import '../../style.css'
import image from '../../images/sajmul.png'
import Btn from '../Btn';
import Span from '../Span';

const Banner = () => {
  return (
    <section className='max-w-screen-xl text-text mx-auto px-4 flex flex-col md:flex-row items-center gap-2 lg:justify-between lg:items-center mt-8'>
      <div className='md:w-2/3'>
        <h1 className='font-black text-3xl text-center lg:text-4xl lg:text-start'> <Span className={'text-accent'} value={'<'}/>Let&apos;s introduce with a web developer<Span className={'text-accent'} value={'/>'}/></h1>

        <hr className='border-accent mt-3 md:hidden' />

        <h2 className='bg-gradient font-bold text-2xl bg-clip-text text-transparent w-fit mt-2 mb-2'>Sajmul Hossain</h2>

        <p className='text-text text-opacity-60 bg-background p-3 rounded-lg lg:w-10/12'>I am a passionate web developer, currently pursuing my BSc. in CSE at Port City International University. With a deep interest in coding and web development, I love creating efficient and visually appealing websites. Explore my work to see how I bring creativity and technical skills together.
        </p>

        <div className='flex gap-2 mt-2'>
          <Btn styleName={'bg-secondary'} btnName={'Hire Me'}></Btn>
          <Btn styleName={'bg-transparent border border-secondary'} btnName={'Download Resume'}></Btn>
        </div>
      </div>

      <div className='md:w-1/3 md:rounded-full rounded-2xl overflow-hidden lg:flex lg:justify-end mt-5 lg:mt-0'>
        <img src={image} className='lg:h-[400px] transform lg:rotate-3 lg:rounded-full' alt="" />
      </div>
    </section>
  );
};

export default Banner;