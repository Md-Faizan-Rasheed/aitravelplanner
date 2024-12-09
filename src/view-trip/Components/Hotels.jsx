
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Hotels({ TripData }) {
  const hotels = TripData?.TripData?.hotels || [];
  const [hotelImages, setHotelImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await Promise.all(
          hotels.map(async (hotel) => {
            try {
              const response = await axios.get(
                `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
                  hotel.HotelName
                )}&client_id=vexZ532hoZZY8xoU4w4vHDs72PwaXeVwfdWHj0VJ6A4`
              );

              if (response.data.results && response.data.results.length > 0) {
                return response.data.results[0].urls.regular; // Use the first image result
              } else {
                return "https://via.placeholder.com/800x340?text=Image+Not+Found"; // Fallback
              }
            } catch (error) {
              console.error("Error fetching the image for hotel:", hotel.HotelName, error);
              return "https://via.placeholder.com/800x340?text=Image+Error"; // Error fallback
            }
          })
        );
        setHotelImages(images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    if (hotels.length > 0) {
      fetchImages();
    }
  }, [hotels]);

  return (
    <div className="">
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>

      <div className="flex flex-wrap gap-4">
        {hotels.length > 0 ? (
          hotels.map((hotel, index) => (
            <Link
              key={index}
              to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                hotel.HotelName + "," + hotel?.HotelAddress
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mt-3 hover:scale-110 transition-all">
                <img
                  className="w-72 rounded-md h-40"
                  src={hotelImages[index] || 'https://plus.unsplash.com/premium_photo-1661962360690-e91cc0df88f1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D'}
                  alt={hotel.HotelName || 'Hotel'}
                />
                <h2 className="font-semibold">{hotel.HotelName}</h2>
                <p className="text-sm text-gray-600">
                  📍 {hotel.HotelAddress.length > 22
                    ? `${hotel.HotelAddress.slice(0, 30)}...`
                    : hotel.HotelAddress}
                </p>
                <p className="text-sm text-black">💰 {hotel.price}</p>
                <p className="text-sm text-black">⭐ {hotel.rating} stars</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-sm text-gray-600">No hotels available</p>
        )}
      </div>
    </div>
  );
}

export default Hotels;

