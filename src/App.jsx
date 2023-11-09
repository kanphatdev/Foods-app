import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import { AiOutlineHeart, AiOutlineUsergroupAdd, AiOutlineWallet } from "react-icons/ai"
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiHelp } from "react-icons/tfi";
import { BsBookmarkCheck, BsInboxes } from "react-icons/bs";
function App() {


  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />
          <Hero />
          <HeadlineCards />
          <Food />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            <li className="btn btn-disabled btn-ghost">
              <h1 className="text-3xl capitalize">
                best <span className="capitalize font-bold">eats</span>
              </h1>
            </li>

            <li className="my-3 ">
              <a className="capitalize text-center flex justify-between text-lg text-black">
                order <CiDeliveryTruck size={30} className="text-orange-500" />
              </a>
            </li>
            <li className="my-3 ">
              <a className="capitalize text-center flex justify-between text-lg text-black">
                favorites <AiOutlineHeart size={30} className="text-pink-500" />
              </a>
            </li>
            <li className="my-3 ">
              <a className="capitalize text-center flex justify-between text-lg text-black">
                wallet   <AiOutlineWallet size={30} className="text-emerald-600" />
              </a>
            </li>
            <li className="my-3 ">
              <a className="capitalize text-center flex justify-between text-lg text-black">
                help   <TfiHelp size={30} className="text-red-600" />
              </a>
            </li>
            <li className="my-3 ">
              <a className="capitalize text-center flex justify-between text-lg text-black">
                promotions   <BsBookmarkCheck size={30} className="text-blue-600" />
              </a>
            </li>
            <li className="my-3 ">
              <a className="capitalize text-center flex justify-between text-lg text-black">
                best one   <BsInboxes size={30} className="text-amber-800" />
              </a>
            </li>
            <li className="my-3 ">
              <a className="capitalize text-center flex justify-between text-lg text-black">
                invite friend   <AiOutlineUsergroupAdd size={30} className="text-gray-400" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
