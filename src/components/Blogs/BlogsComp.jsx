// Import React and useState
import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img7 from "../../assets/places/goldentemple.jpg";
import Img8 from "../../assets/places/Kullu.jpg";
import Img9 from "../../assets/places/KUFRI.jpg";
import Img2 from "../../assets/places/DARJEELING.jpg";
import Img3 from "../../assets/places/MANALI.jpg";
import Img4 from "../../assets/places/NAINITAL.jpg";
import Img5 from "../../assets/places/SHIMLA.jpg";
// Define data for top places in India
const topPlacesInIndia = [
  {
    id: 1,
    image: Img1,
    title: "Taj Mahal, Agra",
    description: "Step into a world of timeless beauty and romance with a visit to the Taj Mahal, a UNESCO World Heritage Site and one of the most iconic monuments in the world. Located on the banks of the Yamuna River in Agra, Uttar Pradesh, this majestic mausoleum is a testament to the enduring love of Emperor Shah Jahan for his beloved wife Mumtaz Mahal",
    author: "John Doe",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: Img7,
    title: "Golden Temple, Amritsar",
    description: "he Golden Temple, also known as Sri Harmandir Sahib, stands as a radiant symbol of Sikhism's rich spiritual and architectural heritage. Located in the heart of Amritsar, Punjab, this revered pilgrimage site is not only a place of worship but also a symbol of equality, peace, and harmony.",
    author: "Jane Smith",
    date: "April 23, 2022",
  },
  {
    id: 3,
    image: Img8,
    title: "Kullu, Himachal Pradesh",
    description: "Nestled amidst the majestic Himalayas, Kullu is a scenic valley town in the state of Himachal Pradesh, India. Renowned for its unparalleled natural beauty, adventurous activities, and vibrant culture, Kullu captivates visitors with its pristine landscapes and serene ambiance.",
    author: "Mike Johnson",
    date: "April 24, 2022",
  },
  {
    id: 4,
    image: Img9,
    title: "Kufri, Himachal Pradesh",
    description: "Nestled amidst the majestic Himalayan ranges, Kufri stands as a serene hill station in the heart of Himachal Pradesh, India. Situated just a short drive away from the bustling town of Shimla, Kufri beckons travelers with its tranquil ambiance, lush landscapes, and panoramic vistas that stretch as far as the eye can see.",
    author: "Emily Brown",
    date: "April 25, 2022",
  },
  {
    id: 5,
    image: Img2,
    title: "Darjeeling, India",
    description: "Nestled amidst the rolling hills of the Eastern Himalayas, Darjeeling stands as a beacon of tranquility and natural splendor. This enchanting hill station, often referred to as the Queen of the Hills,captivates visitors with its majestic mountain vistas, lush tea plantations, and vibrant cultural heritage.",
    author: "Emily Brown",
    date: "April 25, 2022",
  },
  {
    id: 6,
    image: Img3,
    title: "Manali, Himachal Pradesh",
    description: "Manali is a picturesque hill station nestled in the Beas River Valley of Himachal Pradesh, surrounded by snow-capped mountains and verdant forests. Known for its breathtaking natural beauty, adventurous activities, and vibrant culture, Manali attracts tourists from all over the world throughout the year. Visitors can explore attractions such as Hadimba Devi Temple, ",
    author: "Emily Brown",
    date: "April 25, 2022",
  },
  {
    id: 7,
    image: Img4,
    title: "Nainital, India",
    description: "Nainital is a captivating hill station situated around the scenic Naini Lake in the Kumaon region of Uttarakhand. Known as the Lake District of India, Nainital is famous for its pristine lakes, lush forests, and panoramic views of the surrounding Himalayan peaks. ",
    author: "Emily Brown",
    date: "April 25, 2022",
  },
  {
    id: 8,
    image: Img5,
    title: "Shimla, Himachal Pradesh",
    description: "Shimla, the capital city of Himachal Pradesh, is a charming hill station renowned for its colonial architecture, scenic beauty, and pleasant climate. Nestled amidst the majestic Himalayas, Shimla offers panoramic views of snow-capped peaks, lush green valleys, and dense forests. ",
    author: "Emily Brown",
    date: "April 25, 2022",
  },
];

// Define BlogsComp component
const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Top Places to Visit in India
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {topPlacesInIndia.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
