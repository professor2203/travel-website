import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Places = () => {
  const [places, setPlaces] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    img: null,
  });
  const [mapLocation, setMapLocation] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const savedPlaces = JSON.parse(localStorage.getItem("places")) || [];
    setPlaces(savedPlaces);
  }, []);

  useEffect(() => {
    localStorage.setItem("places", JSON.stringify(places));
  }, [places]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      img: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlace = {
      ...formData,
      img: formData.img || "images/default.jpg", // Fallback image if no file is uploaded
    };

    if (editingIndex !== null) {
      const updatedPlaces = [...places];
      updatedPlaces[editingIndex] = newPlace;
      setPlaces(updatedPlaces);
      setEditingIndex(null);
    } else {
      setPlaces([...places, newPlace]);
    }

    setMapLocation(formData.location);
    setFormData({
      title: "",
      location: "",
      description: "",
      img: null,
    });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setFormData(places[index]);
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updatedPlaces = places.filter((_, i) => i !== index);
    setPlaces(updatedPlaces);
  };

  return (
    <div className="w-4/5 m-auto cursor-default">
      <div className="w-full xl:w-1/2 m-auto text-center my-10 space-y-5">
        <h1 className="text-4xl font-bold">Places Not to Be Missed</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, a quibusdam. Et nostrum accusamus sunt fugiat, corrupti aut sint totam.
        </p>
      </div>

      <div className="inline md:grid grid-rows-3 lg:grid-rows-2 grid-flow-col gap-4 w-full lg:h-[450px] pb-10 border-b space-y-6 md:space-y-0">
        {places.map((place, index) => (
          <motion.div
            key={index}
            className="relative row-span-1 col-span-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
              src={place.img}
              alt={place.title}
            />
            <div className="absolute top-2 right-2">
              <button
                className="bg-blue-500 text-white py-1 px-3 rounded-md mr-2"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white py-1 px-3 rounded-md"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="my-10 text-center">
        <h1 className="text-4xl font-bold">Our Recommendation</h1>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-10 my-10 justify-items-center items-center pb-10 border-b">
          {places.map((place, index) => (
            <motion.div
              key={index}
              className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-full h-1/2 object-cover rounded-t-lg"
                src={place.img}
                alt={place.title}
              />
              <div className="p-4 space-y-4">
                <div className="flex justify-between">
                  <p className="text-sm text-red-400">{place.title}</p>
                  <p className="font-bold">$500</p>
                </div>
                <p className="font-semibold">{place.title}</p>
                <p className="text-sm text-gray-600">{place.description}</p>
                <div className="flex justify-between items-center">
                  <h2>15 days tour</h2>
                  <p className="flex items-center space-x-2 text-orange-400">
                    <AiFillStar />
                    <span>4.8</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>

      <button
        className="bg-blue-500 text-white py-2 px-5 rounded-md"
        onClick={() => setShowForm(!showForm)}
      >
        {editingIndex !== null ? "Update Place" : "Add New Place"}
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-5 rounded-lg w-3/4 md:w-1/2 lg:w-1/3 relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold text-red-500"
              onClick={() => setShowForm(false)}
            >
              &times;
            </button>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Title"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Location"
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="w-full p-2 border rounded"
                rows="4"
                required
              />
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-2"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-5 rounded-md"
              >
                {editingIndex !== null ? "Update" : "Submit"}
              </button>
            </form>
            {mapLocation && (
              <div className="mt-4">
                <LoadScript
                  googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your Google Maps API key
                >
                  <GoogleMap
                    mapContainerStyle={{ height: "400px", width: "100%" }}
                    center={{ lat: 25.276987, lng: 55.296249 }} // Default center, update based on location
                    zoom={10}
                  >
                    <Marker position={{ lat: 25.276987, lng: 55.296249 }} /> {/* Replace with actual location */}
                  </GoogleMap>
                </LoadScript>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Places;
