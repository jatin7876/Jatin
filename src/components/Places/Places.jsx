import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";
import Img7 from "../../assets/places/goldentemple.jpg"
import Img8 from "../../assets/places/Kullu.jpg"
import Img9 from "../../assets/places/KUFRI.jpg"
const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "With our USA Boat Tour, you'll have the opportunity to see some of the country's most famous attractions from a unique vantage point. Snap photos of historic lighthouses dotting the coastlines, watch as dolphins playfully leap through the waves, or simply relax and enjoy the serene beauty of your surroundings.",
    
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
   
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description:
      "Dive into an enchanting world beneath the surface with our USA Underwater Tour, where you'll embark on an extraordinary journey to explore the hidden wonders of America's underwater realms. ",
    
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "lWelcome to Sydney, USA – a charming coastal city nestled on the picturesque shores of the Pacific Ocean. Join us on an unforgettable journey as we explore the vibrant culture, stunning landscapes, and iconic landmarks that define this captivating destination.",
   
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "Welcome to the vibrant and diverse city of Los Angeles, where dreams come to life and endless adventures await. Our Explore Los Angeles tour offers an immersive journey through the iconic landmarks, cultural gems, and hidden treasures of this dynamic metropolis.",
   
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description:
      "Embark on an exhilarating journey from the vibrant streets of Los Angeles to the dazzling lights of Las Vegas with our Los Angeles to Las Vegas Adventure Tour. Experience the best of both worlds as you explore the iconic landmarks.",
   
  },
  {
    img: Img7,
    title: "Golden Temple",
    location: "Punjab,India",
    description:
      ". Located in the heart of Amritsar, Punjab, the Golden Temple, also known as Sri Harmandir Sahib, stands as a symbol of faith, unity, and timeless beauty.",
   
  },
  {
    img: Img8,
    title: "Kullu",
    location: "Himachal Pradesh,India",
    description:
      "Welcome to the mesmerizing Kullu Valley, nestled amidst the majestic Himalayas in the picturesque state of Himachal Pradesh, India. Embark on a breathtaking journey through this enchanting valley, where every turn reveals a new spectacle of natural beauty, cultural richness, and adventure.",
   
  },
  {
    img: Img9,
    title: "Kufri",
    location: "Himachal Pradesh,India",
    description:
      "Embark on a mesmerizing journey to Kufri, a picturesque hill station nestled in the breathtaking landscapes of Himachal Pradesh. Situated just a short drive from the bustling town of Shimla, Kufri beckons travelers with its serene ambiance.",
   
  },
  

];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
