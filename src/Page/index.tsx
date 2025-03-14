import {Link, Route, Routes} from 'react-router'
import { Menu } from '../Menu'
import Cart from '../Cart'

const Page = () => {
  return (
    <div>
        <nav className='gap-4'>
            <Link className='font-semibold text-[23px] p-3' to='/product'>Products</Link>
            <Link className='font-semibold text-[23px] p-3' to='/cart'>My List</Link>
        </nav>


        <Routes>
            <Route path='/product' element={<Menu/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default Page