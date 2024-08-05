import React, { useState } from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiOutlineSearch } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleOpenMap = () => setIsMapOpen(true);
  const handleCloseMap = () => setIsMapOpen(false);

  return (
    <React.Fragment>
      <div className="w-full h-screen relative">
        <img
          src="images/mesuem.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <nav className="w-full absolute top-0 p-5 flex justify-between text-white z-10">
        <div>
          <h1 className="text-3xl font-bold cursor-pointer">Travel</h1>
        </div>

        <div>
          <ul className="flex space-x-5 font-bold cursor-pointer text-gray-300">
            <li className="hover:text-white">Doha</li>
            <li className="hover:text-white">Al Wakrah</li>
            <li className="hover:text-white">Al Rayan</li>
            <li className="hover:text-white">Al Khor</li>
          </ul>

          <div className="flex items-center space-x-2 mt-5">
            <AiOutlineSearch className="text-xl cursor-pointer" />
            <input
              className="bg-inherit border-b outline-0 border-gray-300 p-1 w-full"
              type="text"
              placeholder="search"
            />
          </div>
        </div>
      </nav>

      <div className="absolute top-0 h-screen flex flex-col space-y-10 justify-center items-center bg-black opacity-75 xl:w-1/3 sm:w-1/2 z-0">
        <div className="text-white text-center space-y-5">
          <h2 className="text-2xl font-bold cursor-default">D I S C O V E R</h2>
          <h1 className="text-5xl font-bold cursor-default">T R A V E L</h1>
          <p className="mx-10 text-gray-400 cursor-default">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quam
            consequatur, necessitatibus dolorem, provident voluptas esse
            recusandae impedit distinctio laboriosam modi a nulla ratione
            quaerat?
          </p>
        </div>

        <div className="space-x-4">
          <button
            className="bg-gray-300 py-2 px-5 rounded-md hover:bg-white hover:duration-300"
            onClick={handleOpenMap}
          >
            Road Map
          </button>
          <button className="text-gray-300 border rounded-md py-2 px-5 hover:bg-white hover:text-black hover:duration-300">
            Book a Trip
          </button>
        </div>

        <div className="text-white flex space-x-5">
          <AiFillFacebook size={"2rem"} className="cursor-pointer" />
          <AiFillInstagram size={"2rem"} className="cursor-pointer" />
          <AiFillTwitterSquare size={"2rem"} className="cursor-pointer" />
        </div>
      </div>

      <AnimatePresence>
        {isMapOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white p-5 rounded-lg w-3/4 md:w-1/2 lg:w-1/3">
              <button
                className="absolute top-2 right-2 text-xl font-bold text-red-500"
                onClick={handleCloseMap}
              >
                &times;
              </button>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.252889505159!2d-96.8349290843956!3d32.794871556590415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c170cb0aef36b%3A0x827e020b29e3d4f5!2sDallas%2C%20TX%2075206%2C%20USA!5e0!3m2!1sen!2sin!4v1638742150201!5m2!1sen!2sin"
                className="w-full h-60"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default Home;
