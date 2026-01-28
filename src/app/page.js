import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTools, FaBriefcaseMedical, FaCogs } from "react-icons/fa";

function page() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="bg-blue-950 h-[500px] text-white border-b border-white">
        {/* Navbar */}
        <div className="flex justify-between py-[20px] px-[80px]">
          <h1 className="text-[20px] font-bold">NEXTJS</h1>
          <button className="bg-blue-300 px-[40px] py-1 rounded-3xl text-black font-semibold">
            CV
          </button>
        </div>

        {/* Profile Section */}
        <div className="w-[30%] m-auto text-center space-y-[15px]">
          <h1 className="font-bold text-blue-300 text-[24px]">JOHN WICK</h1>
          <h2 className="font-bold">Actor and Artist</h2>
          <p className="text-sm">
            John Wick is a fictional character and the titular protagonist of
            the John Wick film series. He is portrayed as a retired but deadly
            hitman seeking vengeance.
          </p>

          <div className="flex justify-between w-[150px] m-auto text-xl">
            <FaFacebookSquare />
            <FaYoutube />
            <FaLinkedin />
          </div>

          <img
              src="/images.webp"
              alt=""
              className="h-[150px] w-[150px] rounded-full m-auto mt-6"
          />

        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="bg-blue-950 min-h-screen text-white px-[80px] py-[40px]">
        <h1 className="font-bold text-[30px] mb-2">Services I Offer</h1>
        <p className="mb-8 max-w-[800px]">
          Legendary assassin John Wick is known for his unparalleled skills in
          combat, strategy, and protection. Below are some of the professional
          services offered.
        </p>

        {/* Cards */}
        <div className="flex justify-center gap-3">
          {/* Card 1 */}
          <div className="bg-white text-black w-[300px] p-6 rounded-xl shadow-lg text-center space-y-3">
            <FaTools className="text-3xl m-auto" />
            <h2 className="font-bold">Dummy Text</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              impedit modi, et.
            </p>
            <p className="text-sm font-semibold">Dummy text</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-black w-[300px] p-6 rounded-xl shadow-lg text-center space-y-3">
            <FaBriefcaseMedical className="text-3xl m-auto" />
            <h2 className="font-bold">Dummy Text</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              impedit modi, et.
            </p>
            <p className="text-sm font-semibold">Dummy text</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-black w-[300px] p-6 rounded-xl shadow-lg text-center space-y-3">
            <FaCogs className="text-3xl m-auto" />
            <h2 className="font-bold">Dummy Text</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              impedit modi, et.
            </p>
            <p className="text-sm font-semibold">Dummy text</p>
          </div>
        </div>
        {/* Image Gallery Section */}
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white pt-6">
            <img
              src="/jon1.jpg"
              alt="John Wick Art 1"
              className="w-full h-[250px] object-cover rounded-lg"
            />

            <img
              src="/jon2.jpg"
              alt="John Wick Art 2"
              className="w-full h-[250px] object-cover rounded-lg"
            />

            <img
              src="/jon3.jpg"
              alt="John Wick Art 3"
              className="w-full h-[250px] object-cover rounded-lg"
            />

            <img
              src="/jon4.jpg"
              alt="John Wick Art 4"
              className="w-full h-[250px] object-cover rounded-lg"
            />

            <img
              src="/jon5.jpg"
              alt="John Wick Art 5"
              className="w-full h-[250px] object-cover rounded-lg"
            />

            <img
              src="/jon6.jpg"
              alt="John Wick Art 6"
              className="w-full h-[250px] object-cover rounded-lg"
            />
          </div>

      </div>
      
    </div>
  );
}

export default page;
