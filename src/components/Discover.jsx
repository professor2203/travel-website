import React, { useState } from "react";
import { motion } from "framer-motion";

const Discover = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    travelPlace: "",
    travelDays: "",
    travelBalance: "",
  });
  const [cards, setCards] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([...cards, formData]);
    setFormData({ name: "", travelPlace: "", travelDays: "", travelBalance: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto cursor-default">
      <h1 className="text-4xl font-bold text-center my-10">Discover</h1>
      <div className="flex flex-col md:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">
        <div className="w-full space-y-5">
          <img
            className="w-full drop-shadow-2xl rounded-lg border-8 border-stone-700 cursor-pointer opacity-80 hover:opacity-100 transition duration-200"
            src="images/safari_desert.jpg"
            alt="Safari Desert"
          />
          <div>
            <h2 className="font-bold">Explore the Majestic Deserts</h2>
            <h1 className="text-2xl font-bold">An Unforgettable Safari Experience</h1>
          </div>
          <p className="text-sm">
            Experience the beauty and tranquility of the desert with our exclusive safari tours. Witness breathtaking sunsets, explore vast sand dunes, and immerse yourself in the rich culture of the region.
          </p>
          <p className="text-sm">
            Our knowledgeable guides will lead you through an adventure of a lifetime, where you'll have the opportunity to see wildlife up close, ride camels, and enjoy traditional cuisine under the stars.
          </p>
        </div>
        <div className="w-full space-y-4 text-left">
          <h2 className="font-bold">Discover Hidden Gems</h2>
          <h1 className="font-bold text-2xl">Unveil the Secrets of the Desert</h1>
          <p className="text-sm">
            Join us on a journey to uncover the hidden treasures of the desert. From ancient ruins to secret oases, there's always something new to discover. Our tours are designed to provide an authentic and enriching experience.
          </p>
          <img
            className="drop-shadow-2xl border-8 border-stone-700 rounded-lg cursor-pointer opacity-80 hover:opacity-100 transition duration-200"
            src="images/desert.jpg"
            alt="Desert"
          />
        </div>
      </div>

      <div className="relative w-full h-[400px] my-10">
        <img
          className="w-full h-full object-cover"
          src="images/image-8.jpg"
          alt="Desert Landscape"
        />
        <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold px-5 py-2 border cursor-pointer hover:bg-white hover:text-gray-500 transition duration-300">
            View Details
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center xl:h-[500px] my-20">
        <div className="hidden lg:block xl:w-[500px] w-1/3">
          <img
            className="w-full h-full object-cover"
            src="images/image-33.jpg"
            alt="Desert Adventure"
          />
        </div>
        <div className="xl:w-[500px] p-5 text-center space-y-5 sm:space-y-2">
          <h1 className="text-xl md:text-xl sm:text-sm">Plan Your Adventure</h1>
          <h2 className="text-4xl md:text-4xl sm:text-base">
            Tailored Experiences Just for You
          </h2>
          <p className="text-base md:text-base sm:text-xs">
            Our customized tours are designed to cater to your preferences and interests. Whether you're looking for a thrilling adventure or a relaxing getaway, we have something for everyone. Book your tour now and create memories that will last a lifetime.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-5 px-5 py-2 border border-black hover:bg-gray-400 transition duration-300"
          >
            Book Now
          </button>
        </div>
        <div className="hidden lg:block xl:w-[500px] w-1/3">
          <img
            className="w-full h-full object-cover"
            src="images/image-33.jpg"
            alt="Desert Adventure"
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Book Your Travel</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full border border-gray-300 p-2 rounded"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="travelPlace">
                  Travel Place
                </label>
                <input
                  className="w-full border border-gray-300 p-2 rounded"
                  type="text"
                  id="travelPlace"
                  name="travelPlace"
                  value={formData.travelPlace}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="travelDays">
                  Travel Days
                </label>
                <input
                  className="w-full border border-gray-300 p-2 rounded"
                  type="number"
                  id="travelDays"
                  name="travelDays"
                  value={formData.travelDays}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="travelBalance">
                  Travel Balance
                </label>
                <input
                  className="w-full border border-gray-300 p-2 rounded"
                  type="number"
                  id="travelBalance"
                  name="travelBalance"
                  value={formData.travelBalance}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-full mt-2 border border-gray-300 py-2 rounded hover:bg-gray-100 transition duration-300"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-gray-300 p-5 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold">{card.name}</h3>
            <p className="text-gray-600">{card.travelPlace}</p>
            <p className="text-gray-600">{card.travelDays} days</p>
            <p className="text-gray-600">${card.travelBalance}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
