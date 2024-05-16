import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

const PlaceCard = ({
  img,
  title,
  location,
  description,
  type,
  handleOrderPopup,
}) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleClick = () => {
    setIsConfirmationOpen(true);
    handleOrderPopup(title); // Pass the title of the place to book
  };

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <>
      <div
        className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer"
        onClick={handleClick} // Attach the handleClick function to onClick event
      >
        <div className="overflow-hidden">
          <img
            src={img}
            alt="No image"
            className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>

        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
          <div className="flex items-center gap-2 opacity-70">
            <IoLocationSharp />
            <span>{location}</span>
          </div>
          <p className="line-clamp-2">{description}</p>
          <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
            <div className="opacity-70">
              <p>{type}</p>
            </div>
            <div>
             
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Popup */}
      {isConfirmationOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Tour Confirmed!</p>
            <p className="text-sm mt-2">Your tour to {title} has been confirmed.</p>
            <button
              className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
              onClick={handleCloseConfirmation}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PlaceCard;
