import { db } from '@/service/firebaseconfig';
import UserTripsCarditem from '@/view-trip/Components/UserTripsCarditem';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
//  import UserTripsCarditem from '@/view-trip/Components/UserTripsCarditem';
function Mytrips() {
  const [userTrips, setUserTrips] = useState([]);
//   const navigate = useNavigate();

  useEffect(() => {
    GetUserTrips();
  }, []);

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      navigate('/');
      return;
    }

    const q = query(collection(db, 'aitrips'), where('userEmail', '==', user?.email));

    try {
      const querySnapshot = await getDocs(q);
      const trips = querySnapshot.docs.map(doc => doc.data());
      setUserTrips(trips);
    } catch (error) {
      console.error("Error fetching user trips:", error);
    }
  };

  return (
    <div className='p-8 w-full max-w-screen-lg mx-auto'>
      <h2 className='font-bold text-3xl mt-16'>My Trips</h2>

      <div className='gird grid-cols-2 md:grid-cols-3 flex flex-wrap gap-8 '>

        
        {userTrips?.length>0?userTrips.map((trip, index) => (
          <UserTripsCarditem key={index} trip={trip} className="w-[220px] h-[220px]" />
        ))
        :[1,2,3,4,5,6].map((item,index)=>{
          <div key={index} className='h-[220px] w-full bg-slate-200 rounded-md'></div>
        })
      }
      </div>
    </div>
  );
}

export default Mytrips;
