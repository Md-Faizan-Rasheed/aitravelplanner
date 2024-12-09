
import { FaGoogle } from "react-icons/fa";

import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelesList,
} from "@/constants/options";
import { chatSession } from "@/service/Aimodel";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// const [place,setPlace] = useState();
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseconfig";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


function CreateTrip() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState("");

  const [openDailog, setOpenDailog] = useState(false);
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);

  const [loading, setLoading] = useState(false);

const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.error("Login Failed:", error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        console.log("User Profile:", resp);

        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDailog(false);
        OnGenerateTrip();
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  };

  const notify = () => toast.error("Please Fill All the Details !");

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setOpenDailog(true);
    }

    if (
      (formData?.noOfDays > 5 && !formData?.loction) ||
      !formData?.budget ||
      !formData.traveler
    ) {
      notify();
      return;
    }
    setLoading(true);
    const FINAL_POMPT = AI_PROMPT.replace("{location}", formData?.location)
      .replace("{totalDays}", formData?.noofDays)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noofDays);

    const result = await chatSession.sendMessage(FINAL_POMPT);

    console.log(result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text());
  };

  const handleSearch = async (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.length > 2) {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${input}&format=json&addressdetails=1&limit=5`
      );
      const data = await response.json();
      setResults(data);
      console.log(data);
    } else {
      setResults([]);
    }
  };

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place.display_name);
    setResults([]);
    setQuery(place.display_name);
    console.log("Selected Place:", place);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDailog(true);
  };

  const handleClose = () => {
    setOpenDailog(false);
  };

  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));

    const docId = Date.now().toString();
    await setDoc(doc(db, "aitrips", docId), {
      userSelection: formData,
      TripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);

    console.log(docId);
     navigate('/view-trip/'+docId)
  };
  return (
    <div
      className="p-8 w-full max-w-screen-lg mx-auto "
      style={{ width: "100%" }}
    >
      <h1 className="text-2xl mt-16 font-bold mb-6 text-gray-700">
        Tell us your travel preferences 🌍🌴
      </h1>
      <p className="text-gray-600 mb-6">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      {/* Destination Input */}
      <div className="mb-4">
        <label
          htmlFor="destination"
          className="block text-gray-700 font-semibold mb-2"
        >
          What is your destination of choice?
        </label>
     <input
         onChange={(v) => {
          setPlace(v);
          handleInputChange("location", v.target.value);
        }}

          type="text"
          id="days"
          placeholder="Name of Place you want to visit"
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Trip Duration */}
      <div className="mb-4">
        <label
          htmlFor="days"
          className="block text-gray-700 font-semibold mb-2"
        >
          How many days are you planning your trip?
        </label>
        <input
          onChange={(e) => handleInputChange("noofDays", e.target.value)}
          type="number"
          id="days"
          placeholder="Ex: 3"
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Budget Options */}
      <div className="mb-6">
        <h2 className="text-gray-700 font-semibold mb-2">
          What is your budget?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {SelectBudgetOptions.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-md
              ${formData?.budget == item.title && "shadow-lg border-black"}
              `}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            );
          })}
        </div>
      </div>

      {/* Travel Companions */}
      <div className="mb-6">
        <h2 className="text-gray-700 font-semibold mb-2">
          Who do you plan on traveling with on your next adventure?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SelectTravelesList.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleInputChange("traveler",item.people)} // Update 'traveler' key
                className={`p-4 cursor-pointer rounded-lg hover:shadow-lg border-2

          ${formData?.traveler == item.people && "shadow-2xl border-black"}
          `}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="text-lg font-bold">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            );
          })}
        </div>
      </div>

      {/* Generate Trip Button */}
      <div className="flex justify-end">
        <button
          disabled={loading}
          onClick={OnGenerateTrip}
          className="bg-black text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-800 focus:ring focus:ring-blue-300"
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="h-7 w-7   animate-spin" />
          ) : (
            "Generate Trip"
          )}
        
        </button>
      </div>

      {/* Dialog box code */}
      <Dialog
        className="overflow-x-hidden"
        open={openDailog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* <h2 className='font-bold text-lg mt-4'>Sign Up With Google</h2> */}
            <img
              className="w-40"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xgoX_ZjjoMtfIWZ2JrRTVvijA37sNAbBxA&s"
              alt="trip"
            />
            <h2 className="font-bold text-lg mt-7">Sign Up With Google</h2>
            <p>Sign in to the App with Google authentication securely</p>

            <button
              onClick={() => login()}
              className="w-full bg-black text-gray-200 py-2 rounded-md"
            >
              Sign In With Google
            </button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
