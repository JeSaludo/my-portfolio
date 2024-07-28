"use client";

import { Saira, Poppins } from "next/font/google";
import Button from "./button";
import Image from "next/image";

import { MdMailOutline } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { VscCalendar } from "react-icons/vsc";
import { VscLocation } from "react-icons/vsc";

const saira = Saira({
  variable: "--saira",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const Hero = () => {
  return (
    <div className={` mt-10 mb-[260px] space-y-4 ${poppins.className}`}>
      <div className="mx-auto w-[250px] rounded-xl h-10 flex justify-center items-center text-center bg-[#232328]">
        <h1 className="text-white">Hi, I am Jan Eris Saludo</h1>
      </div>

      <h1
        className={`text-white ${saira.className} font-bold text-5xl w-[800px] text-center leading-normal mx-auto `}
      >
        Passionate <span className="text-[#3478F6]">full-stack developer</span>{" "}
        with a focus on building
        <span className="text-[#3478F6]"> innovative web solutions</span>
      </h1>

      <Button></Button>
    </div>
  );
};

export default Hero;

export const About = () => {
  return (
    <div
      className={`flex gap-4 mx-auto w-full place-content-center items-center ${poppins.className}`}
    >
      <div className="border border-white/15 w-[329px] h-[709px] rounded-2xl p-8 ">
        <div className="w-[200px] h-[200px] text-center mx-auto my-5">
          <Image
            width={500}
            height={500}
            src={"/resume/profile.png"}
            alt="profile"
            quality={100}
          ></Image>
        </div>

        <h1 className="text-xl font-medium text-white text-center my-4">
          Jan Eris M. Saludo
        </h1>

        <div className="bg-[#2F2F35] w-[111px] h-6 text-white text-[9px] flex justify-center  text-center items-center mx-auto rounded-lg">
          <p>Full Stack Developer</p>
        </div>

        <hr className="my-8 border-white/10" />
        <div className="space-y-4 ml-8">
          <div className="flex gap-5 ">
            <div className="bg-[#1D1D21] text-[#3478F6]  border border-white/10 w-10 h-10 rounded-md flex justify-center place-content-center items-center">
              <MdMailOutline />
            </div>
            <div className="flex  items-center  text-white">
              <div>
                <h3 className="text-[9px] font-light text-[#8E8A8A]">EMAIL</h3>
                <p className="text-[10px]">janerissaludo@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 ">
            <div className="bg-[#1D1D21] text-[#3478F6]  border border-white/10 w-10 h-10 rounded-md flex justify-center place-content-center items-center">
              <IoPhonePortraitOutline />
            </div>
            <div className="flex  items-center  text-white">
              <div>
                <h3 className="text-[9px] font-light text-[#8E8A8A]">PHONE</h3>
                <p className="text-[10px]">+63 927 702 2469</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 ">
            <div className="bg-[#1D1D21] text-[#3478F6]  border border-white/10 w-10 h-10 rounded-md flex justify-center place-content-center items-center">
              <VscCalendar />
            </div>
            <div className="flex  items-center  text-white">
              <div>
                <h3 className="text-[9px] font-light text-[#8E8A8A]">
                  BIRTHDAY
                </h3>
                <p className="text-[10px]">January 19, 2002</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 ">
            <div className="bg-[#1D1D21] text-[#3478F6]  border border-white/10 w-11 h-10 rounded-md flex justify-center place-content-center items-center">
              <VscLocation />
            </div>
            <div className="flex  items-center  text-white">
              <div>
                <h3 className="text-[9px] font-light text-[#8E8A8A]">
                  LOCATION
                </h3>
                <p className="text-[10px]">
                  Makati City, Metro Manila, Philippines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-white/15 w-[815px] h-[755px] rounded-2xl  p-8 ">
        <div className="space-y-3">
          <h1 className="font-bold text-3xl text-white">About Me</h1>
          <div className="bg-[#41A2EB] w-[54px] h-2 rounded-md"></div>
        </div>

        <p>
          Hi there! I recently graduated with a Bachelor of Science and
          Technology in Software Development. I’ve got a solid foundation in
          programming and software creation, and I’m known for being a quick
          learner. I enjoy diving into new technologies and figuring out how
          they work. I’ve tackled a range of projects, from web apps to mobile
          apps, and I’m excited to bring my skills and enthusiasm to a new team.
          Whether it's coding, collaborating, or picking up new tools, I'm
          always ready for the challenge and eager to keep growing.
        </p>
      </div>
    </div>
  );
};
