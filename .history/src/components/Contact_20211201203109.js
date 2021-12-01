import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

function Contact() {

  return (
    <section 
      className="text-white body-font h-100" name="contact">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12 items-center">
            <img src={`${process.env.PUBLIC_URL}/assets/images/question.png`}alt="" className="max-h-20 max-w-20 mb-10" />
            <h1 className="header-wrap mb-8 text-green-500">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed normalText md:text-2xl">
            We would love to hear from you.
            Don't be shy, ask the $PHAT Squad!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <button className="flex mx-auto py-2 px-8 font-medium text-white rounded transition duration-300 pushable">
                  <a href="mailto:info@example.com" className="front hover:bg-pink-400">Get in Touch</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact
