import React from "react";
import Vigovia from "../src/assets/Vigvia logo.png"; // Assuming this is your logo
import Ellipse from "./assets/Ellipse1.png";
import Ellipse1 from "./assets/Ellipse2.png";
import Ellipse2 from "./assets/Ellipse3.png";
import Ellipse3 from "./assets/Ellipse4.png";
import TravelItem from "./components/TravelItem";
import TravelDays from "./components/TravelDays";
import VigoviaFooter from "./components/VigoviaFooter";
import FlightSummary from "./components/FlightSummary";
import HotelBookings2 from "./components/HotelBookings2";
import PaymentPlans from "./components/PaymentsPlans";


const hotelData = [
  {
    title: "City",
    values: ["Singapore", "Singapore", "Singapore", "Singapore"],
    widthClass: "w-1/5 min-w-[100px]",
  },
  {
    title: "Check In",
    values: ["24/02/2024", "24/02/2024", "24/02/2024", "24/02/2024"],
    widthClass: "w-1/5 min-w-[110px]",
  },
  {
    title: "Check Out",
    values: ["24/02/2024", "24/02/2024", "24/02/2024", "24/02/2024"],
    widthClass: "w-1/5 min-w-[110px]",
  },
  {
    title: "Nights",
    values: ["2", "2", "2", "2"],
    widthClass: "w-1/12 min-w-[60px]",
  },
  {
    title: "Hotel Name",
    values: [
      "Super Townhouse Oak\nVashi Formerly Blue",
      "Super Townhouse Oak\nVashi Formerly Blue",
      "Super Townhouse Oak\nVashi Formerly Blue",
      "Super Townhouse Oak\nVashi Formerly Blue",
    ],
    widthClass: "flex-1 min-w-[200px]",
  },
];

const policyData = [
  {
    title: "Point",
    values: [
      "Airlines Standard Policy",
      "Flight/Hotel Cancellation",
      "Trip Insurance",
      "Hotel Check-In & Check Out",
      "Visa Rejection",
    ],
    widthClass: "w-1/3 min-w-[180px]",
  },
  {
    title: "Details",
    values: Array(5).fill(
      "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost."
    ),
    widthClass: "flex-1 min-w-[400px]",
  },
];

const scopeOfServiceData = [
  {
    title: "Service",
    values: [
        "Flight Tickets And Hotel Vouchers",
        "Web Check-In",
        "Support",
        "Cancellation Support",
        "Trip Support"
      ],
      widthClass: "w-1/2 min-w-[240px]"
  },

  {
    title: "Details",
     values: [
        "Delivered 3 Days Post Full Payment",
        "Boarding Pass Delivery Via Email/WhatsApp",
        "Chat Support – Response Time: 4 Hours",
        "Provided",
        "Response Time: 5 Minutes"
      ],
      widthClass: "w-1/2 min-w-[300px]"
  }
]

const inclusionSummary = [
  {
      title: "Category",
      values: ["Flight", "Tourist Tax", "Hotel"],
      widthClass: "w-[120px] min-w-[100px]"
  },
  {
      title: "Count",
      values: ["2", "2", "2"],
      widthClass: "w-[80px]"
    },
    {
      title: "Details",
      values: [
        "All Flights Mentioned",
        "Yotel (Singapore), Oakwood (Sydney), Mercure (Cairns), Novotel (Gold Coast), Holiday Inn (Melbourne)",
        "Airport To Hotel • Hotel To Attractions • Day Trips If Any"
      ],
      widthClass: "flex-1 min-w-[300px]"
    },
    {
      title: "Status / Comments",
      values: ["Awaiting Confirmation", "Awaiting Confirmation", "Included"],
      widthClass: "w-[160px] min-w-[140px]"
    }
]

const ActivitiesData = [
   {
      title: "City",
      values: [
        "Rio De Janeiro",
        "Rio De Janeiro",
        "Rio De Janeiro",
        "Rio De Janeiro",
        "Rio De Janeiro",
        "Rio De Janeiro",
        "Rio De Janeiro",
        "Rio De Janeiro",
        "Rio De Janeiro",
        "Rio De Janeiro",
        "Rio De Janeiro",
        "Rio De Janeiro",
        "Rio De Janeiro",
        "Rio De Janeiro",
        "Rio De Janeiro",
        "Rio De Janeiro",
      ],
      widthClass: "w-[140px] min-w-[120px]"
    },
    {
      title: "Activity",
      values: [
        "Sydney Harbour Cruise & Taronga  Zoo",
        "Sydney Harbour Cruise & Taronga  Zoo",
        "Sydney Harbour Cruise & Taronga  Zoo",
        "Sydney Harbour Cruise & Taronga  Zoo",
        "Sydney Harbour Cruise & Taronga  Zoo",
        "Sydney Harbour Cruise & Taronga  Zoo",
        "Sydney Harbour Cruise & Taronga  Zoo",
        "Sydney Harbour Cruise & Taronga  Zoo",
        "Sydney Harbour Cruise & Taronga  Zoo",
        "Sydney Harbour Cruise & Taronga  Zoo",
        "Sydney Harbour Cruise & Taronga  Zoo",
        "Sydney Harbour Cruise & Taronga  Zoo",
        "Sydney Harbour Cruise & Taronga  Zoo",
        "Sydney Harbour Cruise & Taronga  Zoo",
        "Sydney Harbour Cruise & Taronga  Zoo",
        "Sydney Harbour Cruise & Taronga  Zoo",
      ],
      widthClass: "flex-1 min-w-[200px]"
    },
    {
      title: "Type",
      values: [
        "Sightseeing",
        "Adventure",
        "Leisure",
        "Cultural",
        "Sightseeing",
        "Adventure",
        "Leisure",
        "Cultural",
        "Sightseeing",
        "Adventure",
        "Leisure",
        "Cultural",
        "Sightseeing",
        "Adventure",
        "Leisure",
        "Cultural"

      ],
      widthClass: "w-[160px] min-w-[120px]"
    },
    {
      title: "Time Required",
      values: [
        "2-3 Hours",
        "3 Hours",
        "Full Day",
        "Evening",
        "2-3 Hours",
        "3 Hours",
        "Full Day",
        "Evening",
        "2-3 Hours",
        "3 Hours",
        "Full Day",
        "Evening",
        "2-3 Hours",
        "3 Hours",
        "Full Day",
        "Evening",
      ],
      widthClass: "w-[140px] min-w-[100px]"
    }
]

const installmentScheduleData = [
   {
      title: "Installment",
      values: [
        "Installment 1",
        "Installment 2",
        "Installment 3"
      ],
      widthClass: "flex-1 min-w-[160px]",
    },
    {
      title: "Amount",
      values: [
        "₹3,50,000",
        "₹4,00,000",
        "Remaining"
      ],
      widthClass: "flex-1 min-w-[200px]"
    },
        {
      title: "Due Date",
      values: [
        "Initial Payment",
        "Post Visa Approval",
        "20 Days Before Departure"
      ],
      widthClass: "flex-1 min-w-[220px]"
    },
]




function App() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white pt-10">
      {/* Logo Section */}
      <div className="flex flex-col items-center space-y-2 w-full py-4 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <img
          src={Vigovia}
          alt="Vigovia Logo"
          className="w-48 sm:w-56 md:w-64 lg:w-72"
        />
      </div>

      {/* Info Card */}
      <div className="mt-6 bg-[linear-gradient(to_right,rgba(75,161,235,1),rgba(147,111,224,1))] rounded-2xl px-8 py-6 text-white text-center w-[90%]">
        <h2
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="text-[21px] sm:text-[34px] font-[500]"
        >
          Hi, Rahul!
        </h2>
        <h1
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="text-2xl sm:text-[40px] font-[600] mt-1"
        >
          Singapore Itinerary
        </h1>
        <p className="mt-2 text-sm sm:text-[21px]">6 Days 5 Nights</p>

        {/* Icons Row */}
        <div className="flex justify-center mt-4 gap-4 text-2xl sm:text-3xl">
          <span>✈️</span>
          <span>🏨</span>
          <span>🚉</span>
          <span>🚗</span>
          <span>🚌</span>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[90%] border-[2.37px] rounded-[16px] border-[rgba(84,28,156,1)] px-4 py-4 mt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-evenly sm:items-center h-full text-sm font-poppins text-black">
            <TravelItem label="Departure From" value="Kolkata" />
            <TravelItem label="Departure" value="09/06/2025" />
            <TravelItem label="Destination" value="Singapore" />
            <TravelItem label="Arrival" value="15/06/2025" />
            <TravelItem label="No. Of Travellers" value="4" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center my-10">
        <TravelDays day={1} date={27} image = {Ellipse} />
        <div className="h-[1px] w-[90%] bg-gray-500 my-4 self-center" />
        <TravelDays day={2} date={28} image = {Ellipse1} />
        <div className="h-[1px] w-[90%] bg-gray-500 my-4 self-center" />
        <TravelDays day={3} date={29} image = {Ellipse2} />
        <div className="h-[1px] w-[90%] bg-gray-500 my-4 self-center" />
        <TravelDays day={4} date={30} image = {Ellipse3} />
        <div className="h-[1px] w-[90%] bg-gray-500 my-4 self-center" />
      </div>

      <div className="w-full flex justify-center">
        <VigoviaFooter/>
      </div>

      <div className="w-full flex flex-col justify-center">
      <FlightSummary/>
      <div className="h-[1px] w-[90%] bg-gray-500 my-4 self-center" />
      </div>

      <div className="w-full flex flex-col justify-center">
      <HotelBookings2 title="Hotel" title2= "Bookings" data={hotelData} />
      <div className="h-[1px] w-[90%] bg-gray-500 my-4 self-center" />
      </div>

      <div className="w-full flex justify-center">
        <VigoviaFooter/>
      </div>

      <div className="w-full flex flex-col justify-center">
     <HotelBookings2 title="Important" title2="Notes" data={policyData} />
      <div className="h-[1px] w-[90%] bg-gray-500 my-4 self-center" />
      </div>

      <div className="w-full flex flex-col justify-center">
     <HotelBookings2 title="Scope of" title2= "Service" data={scopeOfServiceData} />
      <div className="h-[1px] w-[90%] bg-gray-500 my-4 self-center" />
      </div>

      <div className="w-full flex flex-col justify-center">
     <HotelBookings2 title="Inclusion" title2= "Summary" data={inclusionSummary} />
     {/* Note */}
      <p style={{fontFamily: 'Roboto'}} className="text-xl sm:text-sm w-[90%] self-center">
          <p className="font-[700]">Transfer Policy(Refundable Upon Claim)</p>
          If any transfer is delayed beyond 15 minutes, customers may book an app-based or  radio taxi and claim a refund for that specific leg.
      </p>
      <div className="h-[1px] w-[90%] bg-gray-500 my-4 self-center" />
      </div>

      <div className="w-full flex justify-center">
        <VigoviaFooter/>
      </div>

       <div className="w-full flex flex-col justify-center">
     <HotelBookings2 title="Activity" title2= "Table" data={ActivitiesData} />
      
      </div>


      <div
      style={{ fontFamily: "Roboto" }}
      className="w-full flex justify-center px-4 sm:px-6 md:px-8 my-10"
    >
      <div className="w-full max-w-7xl">
        <h2 className="text-lg sm:text-xl lg:text-3xl font-[700] text-black mb-6">
          Terms and <span className="text-[#680099]">Conditions</span>
        </h2>
        <h2 className=" text-[#2F80ED] text-lg sm:text-base lg:text-xl font-[700] mb-6">
          View all terms and conditions 
        </h2>
      </div>
    </div>

    <div className="w-full flex flex-col justify-center">
      <div className="h-[1px] w-[90%] bg-gray-500 my-4 self-center" />
        <VigoviaFooter/>
      </div>

    <div className="w-full flex flex-col justify-center">
      <PaymentPlans/>
      <HotelBookings2 title="" title2= "" data={installmentScheduleData} />
      
    </div>

    <div
      style={{ fontFamily: "Roboto" }}
      className="w-full flex justify-center px-4 sm:px-6 md:px-12 lg:px-20 mt-10"
    >
      <div className="w-full space-y-4">
        <h2 className="text-lg sm:text-xl lg:text-3xl font-[700] text-black">
          Visa <span className="text-[#680099]">Details</span>
        </h2>

        <div className="w-full flex justify-center">
          <div className="w-[90%] border-[2.37px] rounded-[16px] border-[rgba(84,28,156,1)] px-4 py-4 mt-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-evenly sm:items-center h-full text-sm font-poppins text-black">
              <TravelItem label="Visa Type:" value="Tourist" />
              <TravelItem label="Validity" value="30 Days" />
              <TravelItem label="Processing Date" value="14/06/2025" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="h-[1px] w-[90%] bg-gray-500 my-4 self-center" />



    <div className="w-full py-12 flex flex-col items-center justify-center bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#541C9C] mb-6">
        PLAN.PACK.GO!
      </h2>
      <button
        className="bg-[#541C9C] text-white font-semibold text-lg sm:text-xl px-10 py-4 rounded-full shadow-lg transition hover:bg-[#680099]"
      >
        Book Now
      </button>
    </div>
    

      
      
    </div>
  );
}

export default App;
