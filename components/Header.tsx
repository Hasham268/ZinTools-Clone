import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Image from 'next/image';

const Header = () => {
    return (
      <div>
        <div className="flex justify-between items-center py-4 px-6">
          <div className="flex">

            <Image src="/assets/i.jpg" width={32} height={32} alt="icon" className='rounded-md'/>
            <h2 className="font-bold text-lg cursor-pointer ml-2">ZinTools</h2>
          </div>

          <div className="flex items-center w-[35%]">
            <input
              type="text"
              placeholder="Search for Movies, TV Shows, Themes & Cast"
              className="bg-gray-300 rounded-3xl w-full p-2"
            />
            <IoIosSearch size={26} className="ml-[-36px] cursor-pointer" />
          </div>

          <div className="flex items-center text-sm">
            <div className="cursor-pointer">Log in</div>
            <button className="rounded-3xl bg-blue-600 w-20 h-10 ml-4 text-white">
              Sign Up
            </button>
          </div>
        </div>

        <div className="flex justify-between p-4 text-base w-[95%] m-auto cursor-pointer">
          <div>Stock Video</div>
          <div>Video Templates</div>
          <div>Music</div>
          <div>Sound Effects</div>
          <div>Graphic Templates</div>
          <div>Graphics</div>
          <div>Presentation Templates</div>
          <div>Photos</div>
          <div>Fonts</div>
          <div>Add-ons</div>
          <div>More</div>
        </div>
      </div>
    );
}

export default Header