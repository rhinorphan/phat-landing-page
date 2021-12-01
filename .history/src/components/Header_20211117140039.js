import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {

  const handleSubmit = (e) => {
    e.preventDefault();
    
		const menu = document.querySelector(".mobile-menu");

		menu.classList.toggle("hidden");
  }

  return (
    <nav class="bg-white shadow-lg">
			<div class="max-w-6xl mx-auto px-4">
				<div class="flex justify-between">
					<div class="flex space-x-7">
						<div>
							<a href="#" class="flex items-center py-4 px-2">
								<img src={`${process.env.PUBLIC_URL}/assets/images/server_icon.png`} alt="Logo" class="inline object-cover w-12 h-12 mr-4 rounded-full" />
								<span class="font-semibold text-gray-500 text-lg">Crypto Party HAT</span>
							</a>
						</div>
						<div class="hidden md:flex items-center space-x-1">
							<a 
                href={
                  `<Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >`} 
                class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold">
                Home
              </a>
							<a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Community</a>
              <a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Token</a>
							<a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
							<a href="#" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
						</div>
					</div>
					<div class="hidden md:flex items-center space-x-3 ">
						<a href="#" class="py-2 px-8 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300 rounded-full">Play</a>
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
					<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#community" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 hover:text-white">Community</a></li>
          <li><a href="#token" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 hover:text-white">Token</a></li>
					<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 hover:text-white">About</a></li>
					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 hover:text-white">Contact Us</a></li>
				</ul>
			</div>
		</nav>
  )
}

export default Header

