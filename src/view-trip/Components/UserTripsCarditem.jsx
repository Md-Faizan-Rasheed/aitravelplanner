import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripsCarditem({trip}) {
  const [imageUrl, setImageUrl] = useState("");

  const location = trip?.userSelection?.location;
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
  }, [trip]);
  return (
    <Link  to={'/view-trip/'+trip?.id}>
    <div className='object-coverrounded-xl w-60 mt-6'>
        
    <img
  className="rounded-xl object-cover w-[220px] h-[220px]"
  src={
    imageUrl ||
    "https://images.unsplash.com/photo-1558424087-4abfbbc7714b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1aWxkaW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww"
  }
  alt="ari"
/>

    <div>
      <h2 className="font-bold text-xl">{trip?.userSelection?.location}</h2>
      <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noofDays} Days with  {trip?.userSelection?.budget} budget</h2>
    </div>
    </div>
    </Link>
  )
}

export default UserTripsCarditem
