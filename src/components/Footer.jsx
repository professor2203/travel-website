import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineMessage,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <motion.div
        className="container mx-auto md:flex md:justify-between sm:grid sm:grid-cols-2 sm:justify-center items-center my-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-5 py-5 border-b border-gray-700 md:border-0">
          <motion.h1
            className="text-3xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Travel
          </motion.h1>
          <div className="flex space-x-5">
            <motion.div whileHover={{ scale: 1.1 }}>
              <AiFillFacebook size={"1.5rem"} className="cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <AiFillInstagram size={"1.5rem"} className="cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <AiFillTwitterSquare size={"1.5rem"} className="cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <AiOutlineWhatsApp size={"1.5rem"} className="cursor-pointer" />
            </motion.div>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlinePhone />
            <p>(898)-645-434</p>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineMessage />
            <p>(898)-645-434</p>
          </div>
          <div className="flex items-center space-x-2">
            <CiLocationOn />
            <p>123 Travel St, Adventure City</p>
          </div>
          <div className="flex items-center space-x-2">
            <TfiAlarmClock />
            <p>Mon-Fri: 9am - 6pm</p>
          </div>
        </div>

        <div className="flex flex-col space-y-3 mt-5 md:mt-0">
          <h1 className="font-bold">Company</h1>
          <motion.a
            className="text-xs text-gray-400 hover:text-white transition-transform transform hover:scale-105"
            href="/"
          >
            About Us
          </motion.a>
          <motion.a
            className="text-xs text-gray-400 hover:text-white transition-transform transform hover:scale-105"
            href="/"
          >
            Services
          </motion.a>
          <motion.a
            className="text-xs text-gray-400 hover:text-white transition-transform transform hover:scale-105"
            href="/"
          >
            Blog
          </motion.a>
          <motion.a
            className="text-xs text-gray-400 hover:text-white transition-transform transform hover:scale-105"
            href="/"
          >
            Contact Us
          </motion.a>
        </div>

        <div className="flex flex-col space-y-3 mt-5 md:mt-0">
          <h1 className="font-bold">Account</h1>
          <motion.a
            className="text-xs text-gray-400 hover:text-white transition-transform transform hover:scale-105"
            href="/"
          >
            Signup
          </motion.a>
          <motion.a
            className="text-xs text-gray-400 hover:text-white transition-transform transform hover:scale-105"
            href="/"
          >
            Login
          </motion.a>
          <motion.a
            className="text-xs text-gray-400 hover:text-white transition-transform transform hover:scale-105"
            href="/"
          >
            View Trips
          </motion.a>
          <motion.a
            className="text-xs text-gray-400 hover:text-white transition-transform transform hover:scale-105"
            href="/"
          >
            Support
          </motion.a>
        </div>

        <div className="flex flex-col space-y-3 mt-5 md:mt-0">
          <h1 className="font-bold">Download</h1>
          <p className="text-xs text-gray-400">From App Store and Google Play</p>
          <motion.button
            className="flex items-center space-x-4 text-left px-5 py-1 border rounded-md bg-white text-black"
            whileHover={{ scale: 1.05 }}
          >
            <FaAppStore size={"1.5rem"} />
            <div>
              <p className="text-xs font-bold">Open On</p>
              <span className="font-bold">App Store</span>
            </div>
          </motion.button>
          <motion.button
            className="flex items-center space-x-4 text-left px-5 py-1 border rounded-md bg-white text-black"
            whileHover={{ scale: 1.05 }}
          >
            <FaGooglePlay size={"1.5rem"} />
            <div>
              <p className="text-xs font-bold">Open On</p>
              <span className="font-bold">Google Play</span>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
