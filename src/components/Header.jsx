import image from '../images/sajmul.png';
import '../style.css';
import Btn from './Btn'

function Header() {
  return (
    <header className='py-3 max-w-screen-xl mx-auto grid grid-cols-12 grid-rows-2 lg:flex lg:justify-between px-4 items-center'>
      <div className='h-10 w-10 col-start-1 col-span-1 rounded-full overflow-hidden'>
        <img src={image} alt="" />
      </div>
      
      <nav className='col-span-full row-start-2 row-span-1'>
        <ul className='flex lg:gap-8 justify-between'>
          <li><a className='active' href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Project</a></li>
        </ul>
      </nav>

      <div className='col-start-6 col-span-7 justify-self-end'>
        <Btn styleName="bg-primary text-white" btnName = 'Download Resume'/>
      </div>
    </header>
  )
}

export default Header;