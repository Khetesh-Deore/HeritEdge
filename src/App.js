import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Login/Register";
import ExplorePages from "./Components/ExplorePages";
import HomePage from "./Components/HomePage";
import ExplorePage from "./Components/ExplorePage";
import NearFoodPlace from "./Components/NearFoodPlace";
import TemplePage from "./Components/TemplePage";
import HistoricalPlace from "./Components/HistoricalPlace";
import Trekking from "./Components/Trekking";
import MisalSpot from "./Components/MisalSpot";
import OtherPlace from "./Components/otherPlace";
import HotelRestorant from "./Components/HotelRestorant";
import KumbhPage from "./KumbhPages/KumbhPage";
import UserProfile from "./UserProfile";
 import HeritEdgeDiary from "./Components/HeritEdgeDiary";
import Feedback from "./Feedback";
import VolunteerRegistration from "./KumbhPages/VolunteerRegistration";
import Destination from "./Destination";
import Schedule from "./KumbhPages/Schedule";
import PlanTrip from "./KumbhPages/PlanTrip";
import About from "./About";
import FAQ from "./FAQ";
import VRBooking from "./Components/VRBooking";
import GameSelection from "./Components/GameSelection";
import WordSearch from "./Components/WordSearch";
import CandyCrush from "./Components/CandyCrush";
import Map from "./Map";
import Modal from "./Modal";
import PlanPri from "./KumbhPages/PlanPri";
import Gallery from "./KumbhPages/Gallery";
import VirtualTourPage from './Components/VirtualTourPage';
import DashboardNavBar from "./NavBar/DashboardNavBar";
import Mela from "./Components/Mela"; // The component for About Kumbh
const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // Set interval to show the modal after 45 minutes or 1.5 hours
    const interval = setInterval(() => {
      setModalOpen(true);
    }, 60* 60 * 1000); // 45 minutes

    // You can set another interval for 1.5 hours like this:
    // const interval1_5H = setInterval(() => {
    //   setModalOpen(true);
    // }, 90 * 60 * 1000); // 1.5 hours

    // Clear the interval on component unmount
    return () => clearInterval(interval);
    // return () => clearInterval(interval1_5H);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/KumbhPage" element={<KumbhPage />} />
      <Route path="/aboutkumbh" element={<Mela />} />
        <Route path="/Feedback" Component={Feedback} />
        <Route path="/PlanTrip" Component={PlanTrip} />
        <Route path="/Schedule" Component={Schedule} />
        <Route path="/Destination" Component={Destination} />
        <Route
          path="/VolunteerRegistration"
          Component={VolunteerRegistration}
        />
        <Route path="/VirtualTourPage" element={<VirtualTourPage />} />
        <Route path="/HeritEdgeDiary" Component={HeritEdgeDiary} />
        <Route path="/UserProfile" Component={UserProfile} />
        <Route path="/KumbhPage" Component={KumbhPage} />
        <Route path="/HotelRestorant" Component={HotelRestorant} />
        <Route path="/OtherPlace" Component={OtherPlace} />
        <Route path="/MisalSpot" Component={MisalSpot} />
        <Route path="/Trekking" Component={Trekking} />
        <Route path="/HistoricalPlace" Component={HistoricalPlace} />
        <Route path="/TemplePage" Component={TemplePage} />
        <Route path="/NearFoodPlace" Component={NearFoodPlace} />
        <Route path="/ExplorePages" Component={ExplorePages} />
        <Route path="/HomePage" Component={HomePage} />
        <Route path="/" Component={ExplorePage} />
        <Route path="/Login" Component={Login} />
        <Route path="/Register" Component={Register} />
        <Route path="/Register" Component={Register} />
        <Route path="/About" Component={About} />
        <Route path="/FAQ" Component={FAQ} />
        <Route path="/VRBooking" Component={VRBooking} />
        {/* <Route path="/GameSelection" Component={GameSelection} /> */}
        <Route path="/WordSearch" Component={WordSearch} />
        <Route path="/CandyCrush" Component={CandyCrush} />
        <Route path="/Map" Component={Map} />
        <Route path="/PlanPri" Component={PlanPri} />
        <Route path="/Gallery" Component={Gallery} />
      </Routes>

      {/* Modal component */}
      <Modal isOpen={modalOpen} onClose={closeModal} />
    </BrowserRouter>
  );
};

export default App;
