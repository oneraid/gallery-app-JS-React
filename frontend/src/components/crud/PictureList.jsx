import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PictureList = () => {
  const [Pictures, setPictures] = useState([]);

  useEffect(() => {
    getPictures();
  }, []);

  const getPictures = async () => {
    const response = await axios.get("http://localhost:5000/Pictures");
    setPictures(response.data);
  };

  const deletePicture = async (pictureId) => {
    try {
      await axios.delete(`http://localhost:5000/pictures/${pictureId}`);
      getPictures();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="bg-gradient-to-r from-bg1-500 to-bg2-500 min-h-screen">
      <div className="justify-between items-center" style={{ paddingTop: "120px" }}>
        <h2 className="text-4xl font-bold mb-5 text-center mx-auto">
          Explore Our Gallery
        </h2>
        <Link to="/pictures/add" className="button-wrapper px-5 lg:px-[72px]">
          <button className="button px-6 py-2 bg-light_brown text-black rounded-full hover:bg-brown hover:text-white">
            Add New Image
          </button>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 px-5 lg:px-[72px] ">
          {Pictures.map((picture) => (
            <div
              key={picture.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 flex flex-col "
            >
              <img
                src={picture.url}
                alt="Picture"
                className="w-full h-auto object-cover mx-auto"
              />
              <div className="p-4 flex-grow">
                <p className="text-xl font-bold text-center mb-4">{picture.name}</p>
                <div className="flex justify-between items-center">
                  <Link
                    to={`edit/${picture.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <a
                    href={picture.url}
                    target="_blank"  // Membuka tautan di tab baru
                    rel="noopener noreferrer"  // Rekomendasi untuk keamanan
                    className="button bg-green-600 text-white hover:bg-green-700 rounded-full text-center"
                    style={{ width: "50%" }}
                  >
                    View
                  </a>
                  <button
                    onClick={() => deletePicture(picture.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PictureList;
