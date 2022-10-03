import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';


export default function Home() {
  return (
    <div className='flex-col flex'>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}
