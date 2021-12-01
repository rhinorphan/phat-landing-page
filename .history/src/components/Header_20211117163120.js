import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {

  const handleSubmit = (e) => {
    e.preventDefault();
    
		const menu = document.querySelector(".mobile-menu");

		menu.classList.toggle("hidden");
  }
  const scrollToTop = (e) => {
    scroll.scrollToTop();
  };

  return (
    <nav class="bg-white shadow-lg sticky top-0">
			<div class="max-w-6xl mx-auto px-4">
				<div class="flex justify-between">
					<div class="flex space-x-7">
						<div>
							<a href="" class="flex items-center py-4 px-2">
								<img src={`${process.env.PUBLIC_URL}/assets/images/server_icon.png`} alt="Logo" class="inline object-cover w-12 h-12 mr-4 rounded-full"/>
								<span onClick={scrollToTop}class="font-semibold text-gray-500 text-lg">Party Hats</span>
							</a>
						</div>
						<div class="hidden md:flex items-center space-x-1 nobull">
              <li><Link activeClass="active" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 cursor-pointer"
              to="landing" spy={true} smooth={true} duration={500}>Home</Link></li>
							<li><Link activeClass="active" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 cursor-pointer"
              to="community" spy={true} smooth={true} duration={500}>Community</Link></li>
              <li><Link activeClass="active" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 cursor-pointer"
              to="token" spy={true} smooth={true} duration={500}>Tokens</Link></li>
							<li><Link activeClass="active" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 cursor-pointer"
              to="about" spy={true} smooth={true} duration={500}>About</Link></li>
							<a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"><Link activeClass="active"
              to="contact" spy={true} smooth={true} duration={500}>Contact</Link></a>
						</div>
					</div>
					<div class="hidden md:flex items-center space-x-3 ">
						<a target="_blank" rel="noopener noreferrer" href="https://tetr.io/" class="py-2 px-8 font-medium text-white bg-green-500 hover:bg-green-400 transition duration-300 rounded-full">Play</a>
					</div>
					<div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button" onClick={handleSubmit}>
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			<div class="hidden mobile-menu">
				<ul class="">
					<li><Link activeClass="active2" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 hover:text-white cursor-pointer"
              to="landing" spy={true} smooth={true} duration={500}>Home</Link></li>
					<li><Link activeClass="active2" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 hover:text-white cursor-pointer"
              to="community" spy={true} smooth={true} duration={500}>Community</Link></li>
          <li><Link activeClass="active2" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 hover:text-white cursor-pointer"
              to="token" spy={true} smooth={true} duration={500}>Tokens</Link></li>
					<li><Link activeClass="active2" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 hover:text-white cursor-pointer"
              to="about" spy={true} smooth={true} duration={500}>About</Link></li>
					<li><Link activeClass="active2" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 hover:text-white cursor-pointer"
              to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
				</ul>
			</div>
		</nav>
  )
}

export default Header

