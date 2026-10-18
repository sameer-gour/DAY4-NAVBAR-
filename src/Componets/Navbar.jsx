import { Link } from "react-router"

function Navbar() {
  return (
    <div className='w-full h-18 bg-zinc-600 text-white text-2xl'>
        <div className='flex justify-between p-5'>
            <h1>SHAMIR GOUR</h1>
            <div className=' w-1/3 flex justify-between '>
                <Link to='/'>Home</Link>
                <Link to='/Contect'>Contect</Link>
                <Link to='/About'>About Us</Link>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar