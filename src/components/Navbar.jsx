import { AiOutlineSearch } from "react-icons/ai";
import { BsCart3, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineUsergroupAdd, AiOutlineWallet } from "react-icons/ai"
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiHelp } from "react-icons/tfi";
import { BsBookmarkCheck, BsInboxes } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="lg:hidden md:flex  ">
          <MobileMenu />

        </div>
        <h1 className="capitalize text-2xl mx-2 text-black md:text-3xl lg:text-4xl">
          best <span className="capitalize font-bold">easts</span>
        </h1>
        <p className="text-sm capitalize px-6 py-2 hidden lg:flex bg-gray-200 rounded-full">
          <span className="badge badge-md p-4 text-white bg-black ">delivery</span>
          <span className="badge badge-md badge-ghost p-4 ">pickup</span>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="bg-gray-200 flex  rounded-full p-2 w-[200px] sm:w-[400px] lg:w-[500px] mx-2">
          <AiOutlineSearch size={20} className="mx-2" />

          <input type="text" className="bg-transparent outline-none" />
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline">
          cart <BsCart3 size={25} />
        </button>
        <div className=" lg:flex hidden ">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost   btn-circle  m-1">
              <BsThreeDotsVertical size={20} />
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 capitalize ">
              <li><a className="flex justify-between">order <CiDeliveryTruck size={20} /> </a></li>
              <li><a className="flex justify-between">favorites <AiOutlineHeart size={20} /> </a></li>
              <li><a className="flex justify-between">wallet <AiOutlineWallet size={20} /> </a></li>
              <li><a className="flex justify-between">help <TfiHelp size={20} /> </a></li>
              <li><a className="flex justify-between">promotions <BsBookmarkCheck size={20} /> </a></li>
              <li><a className="flex justify-between">best one<BsInboxes size={20} /> </a></li>
              <li><a className="flex justify-between">invite friend <AiOutlineUsergroupAdd size={20} /> </a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar