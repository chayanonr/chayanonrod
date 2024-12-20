import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Particles from "react-tsparticles";
import { ReactTyped as Typed } from "react-typed";


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] relative">
      {/* Particle Background */}
      <Particles
        options={{
          background: {
            color: "#0a192f",
          },
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
            move: {
              speed: 1,
            },
            line_linked: {
              enable: true,
              color: "#ffffff",
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative z-10">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Chayanon Rodjanawon
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          <Typed
            strings={[
              "I am a Full Stack Developer",
              "I love building digital solutions",
              "I solve problems with code",
            ]}
            typeSpeed={60}
            backSpeed={50}
            loop
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="work" smooth={true} duration={500} className="flex">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
