import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Game from './Game';


function Landing() {
  return (
    <div className="flex flex-col md:flex-row-reverse md:py-20 px-4" name="landing">
      <div class='flex machine shake-slow'>
        <div class='shine'></div>
        <div class='top'>
          <div class='screwTop'></div>
          <div class='panels'>
            <div class='panel'></div>
            <div class='panel'></div>
            <div class='panel'></div>
          </div>
        </div>
        <div class='screen'></div>
        <div class='table color'>
          <div class='button'></div>
          <div class='stick'></div>
        </div>
        <div class='bottom color'>
          <div class='line'></div>
          <div class='line'></div>
          <div class='screw'></div>
          <div class='panels'>
            <div class='panel'></div>
            <div class='panel'></div>
            <div class='panel'></div>
            <div class='panel'></div>
            <div class='panel'></div>
          </div>
          <div class='screwRight'></div>
        </div>
      </div>
      <div class="flex flex-1 flex-col items-center justify-center mx-24 text-center">
        <h2 class="text-xl  font-bold mb-2 text-green-500 md:text-2xl lg:text-4xl">
          Community Arcade Cabinet
        </h2>
        <h3 class="text-l mb-2 text-gray-300 md:text-xl lg:text-2xl">
        With your beloved games.
        </h3>
        <h3 class="text-sm mb-2 text-green-500 md:text-l lg:text-xl">
        Join the revolution!
        </h3>

        <button class="m-2 bg-white rounded-full py-4 px-8 shadow-lg uppercase text-sm tracking-wider text-green-500 hover:bg-green-400 transition duration-300 hover:text-white">
          <a target="_blank" rel="noopener noreferrer" href="https://lionell-moore.gitbook.io/crypto-party-hats/introductions/what-is-party-hats">Whitepaper</a>
        </button>
        <button class="m-2 bg-white rounded-full py-4 px-8 shadow-lg uppercase text-sm tracking-wider text-green-500 hover:bg-green-400 transition duration-300 hover:text-white">
          <a target="_blank" rel="noopener noreferrer" href="#"><Link activeClass="active"
              to="community" spy={true} smooth={true} duration={500}>Learn More</Link></a>
        </button>
      </div>
    </div>
  )
}

export default Landing
