


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoIosSend } from "react-icons/io";

function InfoSection({ TripData }) {
  const [imageUrl, setImageUrl] = useState("");

  const location = TripData?.userSelection?.location;
  console.log("location",location);

  useEffect(() => {
    if (location) {
    
      const fetchImage = async () => {
        try {
          const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
              location
            )}&client_id=vexZ532hoZZY8xoU4w4vHDs72PwaXeVwfdWHj0VJ6A4`
          );
          console.log("fetching done");
          console.log(response.data);
      
          // Access results from response.data
          if (response.data.results && response.data.results.length > 0) {
            setImageUrl(response.data.results[0].urls.regular); // Use the first image result
          } else {
            setImageUrl("https://via.placeholder.com/800x340?text=Image+Not+Found"); // Fallback
          }
        } catch (error) {
          console.error("Error fetching the image:", error);
          setImageUrl("https://via.placeholder.com/800x340?text=Image+Error"); // Error fallback
        }
      };
      
      fetchImage();
    }
  }, [location]);

  return (
    <div className=''>
      <img
        src={imageUrl || "https://via.placeholder.com/800x340?text=Loading..."}
        alt="Travel"
        className="object-cover mt-0 w-full h-[400px]  rounded-md"
      />

      <div className="flex flex-row justify-between">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">{location}</h2>

          <div className="flex flex-row gap-10">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg">
              📅 {TripData?.userSelection?.noofDays} Day
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg">
              💸 {TripData?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg">
              👪 No. Of Traveler: {TripData?.userSelection?.traveler} people
            </h2>
          </div>
        </div>

        <button className="bg-black px-4 py-3 text-white text-xs md:text-lg rounded-lg self-end mb-4">
          <IoIosSend />
        </button>
      </div>
    </div>
  );
}

export default InfoSection;

