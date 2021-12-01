import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

function Contact() {

  return (
    <section 
      className="text-gray-700 body-font h-100" name="contact">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="header-wrap mb-8 text-green-500">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base normalText text-2xl">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="">
                  <label for="name" className="leading-7 text-sm text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out normalText"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out normalText"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out normalText"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto py-2 px-8 font-medium text-white rounded transition duration-300 pushable">
                  <span className="front hover:bg-pink-400">Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact
