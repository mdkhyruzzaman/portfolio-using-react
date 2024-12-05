import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import MailMeButton from "../components/MailMeButton";

import mypicture from "../assets/me.jpg";

function Home() {
  return (
    <div className="w-screen h-screen bg-[#1F1F1F] text-[#3B6A3A] font-mono">
      <div
        id="container"
        className="w-10/12 h-full mx-auto flex flex-col justify-between"
      >
        <header className="py-4 flex justify-between text-[#A9B7A0]">
          <div>
            <h1 className="font-bold text-2xl">K.</h1>
          </div>
          <nav></nav>
          <div className="text-2xl">
            <a href="https://linkedin.com/in/khyruzzamanbm" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </header>
        <main>
          <div className="w-full h-full flex flex-col md:flex-row-reverse justify-between items-center">
            <div className="w-full flex justify-center">
              <img
                src={mypicture}
                alt="it's me"
                className="h-72 md:h-96 w-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div
              id="text"
              className="text-[#3B6A3A] mt-6 md:mt-0 flex flex-col items-center md:items-start"
            >
              <h5 className="">Assalamualaikum, I'm</h5>
              <h1 className="text-4xl lg:text-6xl xl:text-8xl font-bold">
                Khyruzzaman
              </h1>
              <h2 className="text-lg lg:text-2xl xl:text-3xl font-bold text-[#A9B7A0]">
                Software Engineer
              </h2>
              <div className="mt-4">
                <MailMeButton />
              </div>
            </div>
          </div>
        </main>
        <footer className="py-4 flex justify-center text-[#A9B7A0]">
          <div className="text-xl flex gap-4">
            <a href="https://facebook.com/khyruzzamanbm" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com/khyruzzamanbm" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/mdkhyruzzaman" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
