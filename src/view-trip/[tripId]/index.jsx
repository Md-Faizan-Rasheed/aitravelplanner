import { db } from '@/service/firebaseconfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import InfoSection from '../Components/InfoSection';
import Hotels from '../Components/Hotels';
import Place from '../Components/Place';
import Footer from '../Components/Footer';


function ViewTrip() {
    const { tripId } = useParams();
    const [tripData, setTripData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (tripId) {
            GetTripData();
        }
    },[tripId]);

    // Fetch trip information from Firebase
    const GetTripData = async () => {
        setLoading(true);
        try {
            const docRef =  doc(db,'aitrips',tripId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document:",docSnap.data());
                setTripData(docSnap.data());
            } else {
                console.log("No such document");
                toast.error("No trip found");
            }
        } catch (error) {
            console.error("Error fetching trip data:", error);
            toast.error("Failed to fetch trip data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='p-10 md:p-20 lg:p-44 xlg:p'>
            {/* Information Sections  */}
             <InfoSection TripData={tripData}/>

            {/* Recommended hotels */}
            <Hotels TripData = {tripData}/>


            {/* place to visit */}
            <Place TripData={tripData}/>

            {/* Footer section */}
            <Footer TripData={tripData}/>
        </div>
    );
}

export default ViewTrip;
