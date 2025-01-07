import React, { useState } from "react";
import "./ARVRPage.scss";
import { useNavigate } from "react-router-dom";
import apkFile from "../Images/ARmandir3.apk";

// Importing specific images for each section
import arImage from "../Images/ARImage.jpg";
import vrImage from "../Images/vr.jpeg.jpg";
import virtualTourImage from "../Images/virtualTourImage.jpg"; // New image for third card

const ARVRPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigate();

  // Function to handle the download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = apkFile;
    link.download = "ARVRApp.apk";
    link.click();
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsVisible(false);
  };

  // Function to show the download modal for AR
  const showARModal = () => {
    setIsVisible(true);
  };

  // Function to handle VR access
  const handleVRAccess = () => {
    navigation("/VRBooking", { state: { destination: "/VRPage" } });
  };

  return (
    <div className="ARVR">
      <h1 className="ARVRheading">Try These Features</h1>
      <div className="Container">
        {/* AR Section */}
        <div className="AR" onClick={showARModal}>
          <img src={arImage} alt="AR" />
          <h1 className="heading">AR</h1>
          <div className="ARInfo">
            <p>Experience the wonders of Augmented Reality with our app. Explore historical landmarks and cultural artifacts in an immersive and interactive way!</p>
          </div>
        </div>

        {/* VR Section */}
        <div className="VR" onClick={handleVRAccess}>
          <img src={vrImage} alt="VR" />
          <h1 className="heading">VR</h1>
        </div>

        {/* Virtual Tour Section */}
        <a href="/VirtualTour.html" className="VirtualTour">
          <img src={virtualTourImage} alt="Virtual Tour" />
          <h1 className="heading">Virtual Tour</h1>
        </a>
      </div>
      <p className="Comming">New Features Coming Soon</p>

      {/* Modal for AR App download */}
      {isVisible && (
        <div className="Modal">
          <div className="Modal-content">
            <div className="Modal-header">
              <button onClick={closeModal} className="CloseButton">
                &times;
              </button>
            </div>
            <div className="ModalContainer">
              <div className="Modal-body">
                <p>Click below to download the AR app:</p>
                <button onClick={handleDownload} className="DownloadButton">
                  Download APK
                </button>
              </div>
              <div className="Modal-body1">
                <img src={arImage} alt="AR App" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ARVRPage;
