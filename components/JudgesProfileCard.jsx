import React from "react";
import { Almarai } from "next/font/google";
import Image from "next/image";

const almaraiFont = Almarai({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const JudgeProfileCard = ({ name, designation, company, image, expertise, githubLink, linkedinLink }) => {
  return (
    <div className="flex  mx-10 justify-center">
    <div className="relative flex flex-col items-center justify-center w-60 overflow-hidden">
      {/* Upper Section (Image & Background) */}
      <div className="relative w-auto h-72 rounded-t-xl overflow-hidden">
        {/* <div className="absolute inset-0 top-20  bg-gradient-to-b from-[#0e5671] to-[#063f55] rounded-t-2xl"></div>
        <div className="bg-[#d9d9d9] top-28 ml-12 absolute h-32 w-32 rounded-full"></div> */}
        <Image height={72} width={100} src={image} alt={name} className=" relative w-full h-72 object-cover" />
      </div>

      {/* Lower Detail Section */}
      <div className="flex flex-col items-center justify-center opacity-80 h-32  bg-[#071a25] w-full">
        <div className="flex flex-col justify-center gap-2 items-start text-white">
        <div className="flex items-center gap-4">
          <Image src="/book.png" alt="Book Icon" width={16} height={16} />
          <p className={`${almaraiFont.className} text-xs  uppercase`}>{expertise}</p>
        </div>

        <div className="flex items-center gap-4">
          <Image src="/linkedin.png" alt="Linkedin Icon" width={16} height={16}/>
          <p> {linkedinLink && (
            <a href={linkedinLink} className={`${almaraiFont.className} text-white  text-xs uppercase`}> {linkedinLink.split("/").filter(Boolean).pop()} </a>
          )}
          </p>
        </div>

        </div>
      </div>
    </div>
    <div className="absolute z-10 top-64 right-0 md:right-0 bg-[#177764] py-1.5 px-6  h-9 w-34 font-bold text-base rounded-full uppercase opacity-90 ">{company}</div>
    <div className=" absolute z-10 top-30 left-0 md:left-0  bg-[#177764] py-1.5 px-6  h-9 w-34 font-bold text-base rounded-full uppercase">{name}</div>

    </div>
  );
};

export default JudgeProfileCard; 