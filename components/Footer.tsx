import React from "react";
import { FiMoon } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 p-10 mt-28 ">
      <div className="flex mb-10 gap-6 items-center">
        <div className="font-bold text-base">Follow us</div>
        <FaYoutube />
        <FaTwitter />
        <FaFacebookF />
      </div>

      <div className="flex text-gray-800 text-sm gap-20 border-t-2 border-gray-300 py-10">
        <div className="flex flex-col gap-4">
          <a href="" className="font-bold mb-2 text-base">
            Internal Links
          </a>
          <a href="">Documentaries</a>
          <a href="">Themes</a>
          <a href="">Chrome casts</a>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <a href="" className="font-bold mb-2 text-base">
            Enterprise
          </a>
          <a href="">Download Chrome Browser</a>
          <a href="">Chrome Browser for Enterprise</a>
          <a href="">Chrome Browser Devices</a>
          <a href="">Chrome OS</a>
          <a href="">Google Cloud</a>
          <a href="">Google Workspace</a>
        </div>

        <div className="flex flex-col gap-4 text-sm">
          <a href="" className="font-bold mb-2 text-base">
            Internal Links
          </a>
          <a href="">Documentaries</a>
          <a href="">Themes</a>
          <a href="">Chrome casts</a>
        </div>

        <div className="flex flex-col gap-4 text-sm">
          <a href="" className="font-bold mb-2 text-base">
            Enterprise
          </a>
          <a href="">Download Chrome Browser</a>
          <a href="">Chrome Browser for Enterprise</a>
          <a href="">Chrome Browser Devices</a>
          <a href="">Chrome OS</a>
          <a href="">Google Cloud</a>
          <a href="">Google Workspace</a>
        </div>

        <div className="flex flex-col gap-4 text-sm">
          <a href="" className="font-bold mb-2 text-base">
            Internal Links
          </a>
          <a href="">Documentaries</a>
          <a href="">Themes</a>
          <a href="">Chrome casts</a>
        </div>
      </div>

      <div className="flex justify-between border-t-2 border-gray-300 pt-10">
        <div className="font-bold text-3xl flex items-center">
          Similar{" "}
          <span className="ml-2 text-2xl text-white text-center bg-black rounded-xl p-1 w-[96px]">
            Watch
          </span>
        </div>

        <div className="flex justify-between w-[80%] items-center">
          <div className="flex text-sm gap-6 text-gray-800">
            <a href="">Privacy Policy</a>
            <a href="">Terms and Conditions</a>
            <a href="">Cookies Policy</a>
            <a href="">About Us</a>
            <a href="">EULA</a>
            <a href="">Contact</a>
          </div>

          <div className="w-10 h-10 bg-gray-300 rounded-full ">
            <FiMoon size={20} className="ml-[10px] mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
