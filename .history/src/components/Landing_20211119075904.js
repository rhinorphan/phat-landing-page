import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

function Landing() {
  return (
    <section className="flex flex-col sm:flex-row-reverse h-100 py-20 px-4" name="landing">
      <div className="">
        <img src={`${process.env.PUBLIC_URL}/assets/images/landing.png`} alt=""/>
      </div>
      <div class="flex flex-col items-center justify-center mx-24">
        <h2 class="text-2xl  font-bold mb-2 text-green-500 md:text-left md:text-4xl">
          Community Arcade Cabinet
        </h2>
        <h3 class="text-xl mb-2 text-gray-300 md:text-2xl">
        With your beloved games.
        </h3>
        <h3 class="text-l mb-8 text-green-500 md:text-left md:text-xl">
        Join the revolution!
        </h3>

        <button class="m-2 bg-white rounded-full py-4 px-8 shadow-lg uppercase tracking-wider text-green-500 hover:bg-green-400 transition duration-300 hover:text-white">
          <a target="_blank" rel="noopener noreferrer" href="https://lionell-moore.gitbook.io/crypto-party-hats/introductions/what-is-party-hats">Whitepaper</a>
        </button>
        <button class="m-2 bg-white rounded-full py-4 px-8 shadow-lg uppercase tracking-wider text-green-500 hover:bg-green-400 transition duration-300 hover:text-white">
          <a target="_blank" rel="noopener noreferrer" href="#"><Link activeClass="active"
              to="community" spy={true} smooth={true} duration={500}>Learn More</Link></a>
        </button>
      </div>
    </section>
  )
}

export default Landing
