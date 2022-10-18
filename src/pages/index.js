import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';


export default function Home() {
  return (
    <div className='grid grid-rows-3 grid-flow-col gap-4'>
      <div className='row-start-1'>      <Navbar />
      </div>
      <div className='row-start-2'>      <Body />
      </div>
      <div className='row-start-3'>      <Footer />
      </div>

    </div>
  )
}
