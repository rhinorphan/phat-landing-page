import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

function Landing() {
  return (
    <section className="grid md:flex place-items-center h-screen py-10 px-4" name="landing">
      <div class="flex flex-col mx-auto justify-center">
        <h2 class="text-4xl  font-bold mb-2 text-green-500 justify-center">
          Community Arcade Cabinet
        </h2>
        <h3 class="text-2xl mb-2 text-gray-300">
        With your beloved games.
        </h3>
        <h3 class="text-2xl mb-8 text-green-500">
        Join the revolution!
        </h3>

        <button class="m-2 bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider text-green-500 hover:bg-green-400 transition duration-300 hover:text-white">
          <a target="_blank" rel="noopener noreferrer" href="https://lionell-moore.gitbook.io/crypto-party-hats/introductions/what-is-party-hats">Whitepaper</a>
        </button>
        <button class="m-2 bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider text-green-500 hover:bg-green-400 transition duration-300 hover:text-white">
          <a target="_blank" rel="noopener noreferrer" href="#"><Link activeClass="active"
              to="community" spy={true} smooth={true} duration={500}>Learn More</Link></a>
        </button>
      </div>
      <div className="w-full">
        <img src={`${process.env.PUBLIC_URL}/assets/images/landing.png`} alt="" className="h-full w-full"/>
      </div>
    </section>
  )
}

export default Landing
