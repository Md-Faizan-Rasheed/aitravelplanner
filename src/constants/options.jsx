export const SelectTravelesList =[
    {
        id: 1,
        title: 'Just Me',
        desc: 'A solo traveler in exploration',
        icon: '🧍', // Single person icon
        people: '1',
    },
    {
        id: 2,
        title: 'Couple',
        desc: 'Two travelers sharing adventures together',
        icon: '❤️', // Heart icon for couple
        people: '2',
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun-loving adventurers',
        icon: '👨‍👩‍👧‍👦', // Family emoji
        people: '3',
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekers',
        icon: '🎉', // Celebration icon for friends
        people: '4',
    },

]

export const SelectBudgetOptions=[
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs and prioritize savings',
        icon: '💵', // Dollar bill emoji
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Balance affordability and comfort for a great experience',
        icon: '💰', // Money bag emoji
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Indulge in high-end experiences without worrying about costs',
        icon: '💎', // Diamond emoji
    },
]


export const AI_PROMPT = "Generate Travel plan for location :{location}, for {totalDays} Days for {traveler} with a {budget} budget , Give me a Hotels options list with HotelName , Hotel Address , Price  , hotel image url, geo Coordinates , rating , descriptons and suggest itinrary with place Name , place Details, Place image Url , Geo coordinates, ticket Pricing ,Rating,Time travel each of the locations for {totalDays} days with each day plan with best time to visit in JSON format"