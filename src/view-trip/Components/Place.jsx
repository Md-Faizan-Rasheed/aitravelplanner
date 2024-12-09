
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Place({ TripData }) {
  const place = TripData?.TripData?.itinerary || [];
  console.log(place);
  const [placeImages, setPlaceImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await Promise.all(
          place.flatMap((dayData) =>
            dayData?.places?.map(async (placeData) => {
              try {
                const response = await axios.get(
                  `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
                    placeData?.placeName
                  )}&client_id=vexZ532hoZZY8xoU4w4vHDs72PwaXeVwfdWHj0VJ6A4`
                );

                if (response.data.results && response.data.results.length > 0) {
                  return response.data.results[0].urls.regular; // Use the first image result
                } else {
                  return "https://via.placeholder.com/800x340?text=Image+Not+Found"; // Fallback
                }
              } catch (error) {
                console.error("Error fetching the image for place:", placeData?.placeName, error);
                return "https://via.placeholder.com/800x340?text=Image+Error"; // Error fallback
              }
            })
          )
        );
        setPlaceImages(images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    if (place.length > 0) {
      fetchImages();
    }
  }, [place]);

  let imageIndex = 0;

  return (
    <div>
      <h1 className="mt-10 font-bold text-2xl">Places to Visit</h1>

      <div className="flex flex-col gap-8">
        {place.map((dayData, dayIndex) => (
          <div
            key={dayIndex}
            className="w-full p-4 rounded-lg"
          >
            <h2 className="text-xl font-bold mb-4">Day {dayData?.day}</h2>
            <p className="text-rose-600 mb-4">{dayData?.best_time}</p>

            <div className="flex flex-wrap justify-between gap-6">
              {dayData?.places?.map((placeData, placeIndex) => (
                <Link
                  to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeData?.placeName)}`}
                  target="_blank"
                  key={`${dayIndex}-${placeIndex}`}
                  className="w-full md:w-[45%]"
                >
                  <div className="flex hover:scale-105 flex-row gap-6 border-2 shadow-lg border-gray-200 p-2 rounded-md">
                    <div>
                      <img
                        className="w-32 h-32 rounded-lg"
                        src={
                          placeImages[imageIndex++] || 
                          "https://plus.unsplash.com/premium_photo-1665311515201-d92f7fb4c016?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlzaXQlMjBwbGFjZXMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
                        }
                        alt={placeData?.placeName || "Visit"}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-lg">{placeData?.placeName}</h3>
                      <p className="text-sm text-gray-500">{dayData?.theme}</p>
                      <p className="text-[15px]">🕣 {placeData?.time}</p>
                      <p className="text-[15px]">🈚 {placeData?.ticketPricing}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Place;
