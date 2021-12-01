import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Game from './Game';


function Landing() {
  return (
    <div className="flex flex-col md:flex-row-reverse md:py-20 px-4" name="landing">
      <div className="flex max-w-sm">
        <Game />
      </div>
      <div class="flex flex-col items-center justify-center mx-24 text-center">
        <h2 class="text-xl  font-bold mb-2 text-green-500 md:text-2xl lg:text-4xl">
          Community Arcade Cabinet
        </h2>
        <h3 class="text-l mb-2 text-gray-300 md:text-xl lg:text-2xl">
        With your beloved games.
        </h3>
        <h3 class="text-sm mb-2 text-green-500 md:text-l lg:text-xl">
        Join the revolution!
        </h3>

        <button class="m-2 mt-4 bg-white rounded-full py-4 px-8 shadow-lg uppercase text-sm tracking-wider text-green-500transition duration-300 hover:text-white pushable">
          <a className="front hover:bg-green-400 " target="_blank" rel="noopener noreferrer" href="https://lionell-moore.gitbook.io/crypto-party-hats/introductions/what-is-party-hats">Whitepaper</a>
        </button>
        <button class="m-2 bg-white rounded-full py-4 px-8 shadow-lg uppercase text-sm tracking-wider text-green-500 transition duration-300 hover:text-white pushable">
          <a className='hover:bg-green-400 front' target="_blank" rel="noopener noreferrer" href="#"><Link activeClass="active"
              to="community" spy={true} smooth={true} duration={500}>Learn More</Link></a>
        </button>
      </div>
    </div>
  )
}

export default Landing
