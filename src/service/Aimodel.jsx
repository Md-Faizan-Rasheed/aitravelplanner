// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = import.meta.env.VITE_GOGGLE_GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash-8b",
// });

// const generationConfig = {
//   temperature: 1.1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "application/json",
// };

// export const chatSession = model.startChat({
//   generationConfig,
//   history: [
//     {
//       role: "user",
//       parts: [
//         {
//           text: "Generate Travel plan for location :Las Vegas, for 3 Days for Couple with a cheap budget , Give me a Hotels options list with HotelName , Hotel Address , Price  , hotel image url, geo Coordinates , rating , descriptons and suggest itinrary with place Name , place Details, Place image Url , Geo coordinates, ticket Pricing ,Rating,Time travel each of the locations for 3 days with each day plan with best tiem to visit in JSON format",
//         },
//       ],
//     },
//     {
//       role: "model",
//       parts: [
//         {
//           text: '```json\n{\n  "trip_details": {\n    "destination": "Las Vegas",\n    "duration": "3 Days",\n    "travelers": "Couple",\n    "budget": "Cheap"\n  },\n  "hotels": [\n    {\n      "hotelName": "Red Rock Inn & Suites",\n      "hotelAddress": "3720 Las Vegas Blvd South, Las Vegas, NV 89109",\n      "price": "$$ (Average $100-$150 per night)",\n      "hotelImageUrl": "https://images.unsplash.com/photo-1599006415646-386c4021f011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFzIHZlYXNzIGhvdGxlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",\n      "geoCoordinates": "36.1038° N, 115.1678° W",\n      "rating": "4.0",\n      "description": "A budget-friendly option, near the Strip with amenities like an outdoor pool. Check reviews for exact current prices."\n    },\n\t\t{\n\t\t\t"hotelName": "The Cosmopolitan",\n\t\t\t"hotelAddress": "3708 Las Vegas Blvd South, Las Vegas, NV 89109",\n\t\t\t"price": "$$$(Can be found cheaper depending on dates)",\n\t\t\t"hotelImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cosmopolitan_of_Las_Vegas_hotel_exterior_2018.jpg/1280px-Cosmopolitan_of_Las_Vegas_hotel_exterior_2018.jpg",\n\t\t\t"geoCoordinates": "36.1037° N, 115.1677° W",\n\t\t\t"rating": "4.5",\n      "description": "Luxurious Hotel on The Strip, occasional discounts and last-minute deals can make this option cheap."\n\t\t},\n    {\n      "hotelName": "Circus Circus Hotel and Casino",\n      "hotelAddress": "2880 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "price": "$$ (Average $80-$120 per night)",\n      "hotelImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Circus_Circus_Hotel_and_Casino_2019.jpg/1280px-Circus_Circus_Hotel_and_Casino_2019.jpg",\n      "geoCoordinates": "36.1022° N, 115.1700° W",\n      "rating": "3.5",\n      "description": "Another budget-friendly option, located on the Strip, but may not have the same amenities as others."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": 1,\n      "theme": "Downtown Exploration",\n      "best_time": "Late afternoon/early evening (Avoid peak hours)",\n      "places": [\n        {\n          "placeName": "Fremont Street Experience",\n          "placeDetails": "A lively pedestrian area with a free, spectacular light and music show at night.",\n          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Fremont_Street_Experience_at_night.jpg/1280px-Fremont_Street_Experience_at_night.jpg",\n          "geoCoordinates": "36.1701° N, 115.1785° W",\n          "ticketPricing": "Free",\n          "rating": "4.5",\n          "time_to_spend": "3-4 hours"\n        },\n\t\t\t\t{\n\t\t\t\t\t"placeName": "Mob Museum",\n\t\t\t\t\t"placeDetails": "Museum focused on organized crime in Las Vegas history.",\n\t\t\t\t\t"placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Mob_Museum_Las_Vegas_2019.jpg/1280px-Mob_Museum_Las_Vegas_2019.jpg",\n\t\t\t\t\t"geoCoordinates": "36.1695° N, 115.1773° W",\n\t\t\t\t\t"ticketPricing": "$20-$25",\n\t\t\t\t\t"rating": "4.2",\n\t\t\t\t\t"time_to_spend": "2-3 hours"\n\t\t\t\t}\n      ]\n    },\n    {\n      "day": 2,\n      "theme": "Strip and Shows",\n      "best_time": "Morning/early afternoon",\n      "places": [\n        {\n          "placeName": "The Strip",\n          "placeDetails": "Walk the famed Las Vegas Strip and see the extravagant hotels.",\n          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Las_Vegas_Strip_at_night.jpg/1280px-Las_Vegas_Strip_at_night.jpg",\n          "geoCoordinates": "36.12° N, 115.17° W",\n          "ticketPricing": "Free (walking)",\n          "rating": "4.0",\n          "time_to_spend": "4-5 hours"\n        },\n        {\n          "placeName": "Show (choose one):",\n          "placeDetails": "Pick a less expensive show (e.g., Cirque du Soleil\'s smaller shows, or a magic show).",\n          "placeImageUrl": null,\n          "geoCoordinates": null,\n          "ticketPricing": "$50 - $150 (depends on the show)",\n          "rating": "4.0",\n          "time_to_spend": "2 hours + show duration"\n        }\n      ]\n    },\n\t\t{\n      "day": 3,\n      "theme": "Nature and Relaxation",\n      "best_time": "Early morning or late afternoon",\n      "places": [\n        {\n          "placeName": "Red Rock Canyon National Conservation Area",\n          "placeDetails": "Beautiful desert landscape with hiking trails and scenic views.",\n          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Red_Rock_Canyon_NCA.jpg/1280px-Red_Rock_Canyon_NCA.jpg",\n          "geoCoordinates": "36.0695° N, 115.0272° W",\n          "ticketPricing": "$30 (entrance fee)",\n          "rating": "4.8",\n          "time_to_spend": "4-6 hours"\n        }\n      ]\n    }\n  ]\n}\n```',
//         },
//       ],
//     },
//   ],
// });

// // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// // console.log(result.response.text());



import { GoogleGenerativeAI } from "@google/generative-ai";


// const apiKey = import.meta.env.VITE_GOGGLE_GEMINI_API_KEY;
const apiKey ="AIzaSyCXHXmYvqZ-TwrFL4PEh_dvPolSuC_PgrQ"
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-8b",
});


const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


 export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Travel plan for location :Las Vegas, for 3 Days for Couple with a cheap budget , Give me a Hotels options list with HotelName , Hotel Address , Price  , hotel image url, geo Coordinates , rating , descriptons and suggest itinrary with place Name , place Details, Place image Url , Geo coordinates, ticket Pricing ,Rating,Time travel each of the locations for 3 days with each day plan with best tiem to visit in JSON format\n\n\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"trip_details\": {\n    \"destination\": \"Las Vegas, Nevada\",\n    \"duration\": \"3 Days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\"\n  },\n  \"hotels\": [\n    {\n      \"HotelName\": \"The Plaza Hotel & Casino\",\n      \"HotelAddress\": \"3950 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$70-120\",\n      \"hotelImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/The_Plaza_Hotel_exterior_2022.jpg/1200px-The_Plaza_Hotel_exterior_2022.jpg\",  \n      \"geoCoordinates\": \"36.1281° N, 115.1688° W\",\n      \"rating\": \"3.5\",\n      \"description\": \"Historic hotel with a classic Vegas vibe.  Great location.  Possible to get deals on rooms.\"\n    },\n\t{\n      \"HotelName\": \"Circus Circus Hotel and Casino\",\n      \"HotelAddress\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$60-100\",\n      \"hotelImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circus_Circus_exterior_2019.jpg/1200px-Circus_Circus_exterior_2019.jpg\",  \n      \"geoCoordinates\": \"36.1185° N, 115.1812° W\",\n      \"rating\": \"3.0\",\n      \"description\": \"A good budget option with fun atmosphere. Might be a little less glamorous than other options.\"\n    },\n\t{\n      \"HotelName\": \"Excalibur Hotel & Casino\",\n      \"HotelAddress\": \"3850 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$75-110\",\n      \"hotelImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Excalibur_Hotel_2019.jpg/1200px-Excalibur_Hotel_2019.jpg\",  \n      \"geoCoordinates\": \"36.1204° N, 115.1748° W\",\n      \"rating\": \"3.2\",\n      \"description\": \"Attractive castle-themed hotel with a broad range of price points.   Good value for the budget.\"\n    }\n\n\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"theme\": \"Downtown Delights\",\n      \"best_time\": \"Morning to late afternoon (avoid peak heat)\",\n      \"places\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A pedestrian-only area with lights, shows, and shops. A great place for people-watching.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Fremont_Street_Experience_at_night.jpg/1200px-Fremont_Street_Experience_at_night.jpg\",\n          \"geoCoordinates\": \"36.1213° N, 115.1687° W\",\n          \"ticketPricing\": \"Free to enter, shows are ticketed\",\n          \"rating\": \"4.2\",\n          \"time\": \"3-4 hours\"\n        },\n        {\n          \"placeName\": \"Downtown Las Vegas Las Vegas\",\n          \"placeDetails\": \"Explore the many shops and restaurants in this vibrant area.\",\n\t\t  \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Las_Vegas_Strip_2019.jpg/1200px-Las_Vegas_Strip_2019.jpg\",\n          \"geoCoordinates\": \"36.1117° N, 115.1654° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"4.0\",\n          \"time\": \"2-3 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"theme\": \"Strip Wonders\",\n      \"best_time\": \"Early morning or late afternoon to avoid crowds and heat\",\n      \"places\": [\n        {\n          \"placeName\": \"The Bellagio Fountains\",\n          \"placeDetails\": \"Watch the choreographed water shows.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Bellagio_fountains.jpg/1200px-Bellagio_fountains.jpg\",\n          \"geoCoordinates\": \"36.1108° N, 115.1718° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"4.5\",\n          \"time\": \"1 hour\"\n        },\n        {\n          \"placeName\": \"High Roller Observation Wheel\",\n          \"placeDetails\": \"Get a breathtaking panoramic view of the city.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/High_Roller_observation_wheel_2018.jpg/1200px-High_Roller_observation_wheel_2018.jpg\",\n          \"geoCoordinates\": \"36.1097° N, 115.1690° W\",\n          \"ticketPricing\": \"$30-40\",\n          \"rating\": \"4.0\",\n          \"time\": \"1.5 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"theme\": \"Theme Park Fun\",\n      \"best_time\": \"Morning or early afternoon\",\n      \"places\": [\n        {\n          \"placeName\": \"New York New York Hotel\",\n          \"placeDetails\": \"Enjoy the rides and atmosphere.\",\n\t\t  \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/New_York_New_York_hotel_casino_exterior_2018.jpg/1200px-New_York_New_York_hotel_casino_exterior_2018.jpg\",\n          \"geoCoordinates\": \"36.1151° N, 115.1751° W\",\n          \"ticketPricing\": \"Attraction tickets vary\",\n          \"rating\": \"4.0\",\n          \"time\": \"6-8 hours\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Important Considerations & Notes:**\n\n* **Pricing:**  Ticket prices and hotel costs are estimates.  Prices fluctuate greatly. Use online booking tools to get the latest pricing.\n* **Image URLs:**  Ensure the images load correctly.  Consider using more specific image URLs if possible.\n* **GeoCoordinates:** The precision is good for general location, but for very specific spots, more detailed coordinates might be needed.\n* **Budget:** This itinerary focuses on budget-friendly options.  Consider alternative activities like free walking tours, using public transportation, and packing your own snacks to further reduce costs.\n* **Crowds:** Las Vegas is very popular.  Timing visits to avoid peak hours is crucial for a better experience.\n* **Heat:** Vegas can get very hot. Be prepared and stay hydrated, especially during the day.\n* **Transportation:**  Consider using ride-sharing services or the monorail to get around the Strip efficiently.  Walking is possible within close proximity to the hotels.\n* **Flexibility:**  This is a template.  Adjust the itinerary based on your interests and preferences.\n\n\nThis JSON structure provides a starting point for your Las Vegas trip planning.  Be sure to do thorough research and book in advance, especially during peak season. Remember to factor in travel time between locations. Remember to check for any special events or shows that might be happening during your visit.\n"},
        ],
      },
    ],
  });

