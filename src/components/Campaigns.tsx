import React from "react";
import CampaignImg from "../img/campaign.png";
import EyeImg from "../img/eyes.png";
import Vision from "../img/vision.png";
import checkUp from "../img/checkup.jpg";
import cancer2 from "../img/cancer2.png";
import environment from "../img/Environment1.png";
import env from "../img/env.png";
import hunger1 from "../img/hunger1.jpeg";
import hungerRelief from "../img/HungerRelief.png";

function Campaign() {
  return (
    <>
      <div className="relative -z-10 w-full h-[70vh] flex justify-center items-center">
        {/* Responsive background image */}
        <div
          className="absolute inset-0 h-full w-full object-cover bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(${CampaignImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="flex text-white text-2xl  mt-[20vh]  md:mr-auto md:text-4xl lg:text-6xl font-bold md:mt-[15vh] text-center h-4/5 p-8">
            Kindness Matters
          </h1>
        </div>
      </div>

      <div className="w-full">
        <h1 className=" flex  p-5 justify-center items-center font-bold text-4xl">
          Our Expanding Focus Areas
        </h1>
        <div className="grid grid-cols-2 px-5 ">
          <div className="flex flex-col gap-5 justify-center ">
            <div className="flex items-center gap-4">
              <img className="h-16 md:h-20 " src={Vision} alt="Vision" />
              <h1 className=" text-2xl font-bold">Vision</h1>
            </div>
            <div className="flex flex-col">
              <p>
                We are a world leader in the effort to prevent avoidable
                blindness, and we’re diligently working with Lions clubs and
                local partners to help provide the local capacity building,
                training, medications and treatment needed for those with eye
                diseases and to provide disability rehabilitation and education
                for all.
              </p>
            </div>
          </div>
          <div className="flex w-full   ">
            <img
              className="  w-full h-full object-cover hover:-translate-y-4 transition-all duration-300 cursor-pointer "
              src={EyeImg}
              alt="Eye"
              style={{
                clipPath: "polygon(20% 0, 100% 0%, 100% 100%, 0% 100%) ", 
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 px-5 ">
        <div className="flex w-full ">
          <img
            className="w-full h-full object-cover hover:-translate-y-4 transition-all duration-300 cursor-pointer "
            src={checkUp}
            alt="Eye"
            style={{
              clipPath: "polygon(0% 0, 70% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex items-center gap-4">
            <img className="h-16 md:h-20" src={cancer2} alt="checkup" />
            <h1 className=" text-2xl font-bold">Childhood Cancer</h1>
          </div>
          <div className="flex flex-col">
            <p>
              Across the globe, too many children are being affected by cancer.
              We’re helping Lions establish programs and provide greater service
              and access to care for those diagnosed—giving hope to them and
              their families.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 px-5 ">
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex items-center gap-4">
            <img className="h-16 md:h-20" src={environment} alt="environment" />
            <h1 className=" text-2xl font-bold">The Environment</h1>
          </div>
          <div className="flex flex-col">
            <p>
            We are working with Lions to preserve our planet, knowing that the health of our local communities and environments affects us all. Our goal is to help establish a sustainable future for generations to come.


            </p>
          </div>
        </div>
        <div className="flex w-full ">
          <img
            className="w-full h-full object-cover hover:-translate-y-4 transition-all duration-300 cursor-pointer"
            src={env}
            alt="Eye"
            style={{
              clipPath: "polygon(20% 0, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 px-5 ">
        <div className="flex w-full ">
          <img
            className="w-full h-full object-cover hover:-translate-y-4 transition-all duration-300 cursor-pointer "
            src={hunger1}
            alt="Eye"
            style={{
              clipPath: "polygon(0% 0, 70% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex items-center gap-4">
            <img className="h-16 md:h-20" src={hungerRelief} alt="hunger" />
            <h1 className=" text-2xl font-bold">Hunger</h1>
          </div>
          <div className="flex flex-col">
            <p>
            We help provide healthy meals for the hungry and work to establish strategies and greater capacity for communities in which food is scarce.


            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Campaign;
