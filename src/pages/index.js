import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';


export default function Home() {
  return (
    <div className='grid grid-rows-3 grid-flow-col'>
    <Navbar />

      <div className='row-start-2'>      <Body />
      </div>
    <Footer />


    </div>
  )
}
