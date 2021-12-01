import React from 'react'

function Footer() {
  return (
    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
      <a className="text-green-500">example@email.com</a>
      <p className="text-xs my-5 text-gray-400">
      Copyright © CryptoPartyHats 2021
      </p>
      <div className="flex flex-row justify-center">
        <img src={`${process.env.PUBLIC_URL}/assets/images/tg.png`} alt="" className="h-8 w-8 mx-2 cursor-pointer"/>
        <img src={`${process.env.PUBLIC_URL}/assets/images/reddit.png`} alt="" className="h-8 w-8 mx-2 cursor-pointer"/>
        <img src={`${process.env.PUBLIC_URL}/assets/images/twitter.png`} alt="" className="h-8 w-8 mx-2 cursor-pointer"/>
        <img src={`${process.env.PUBLIC_URL}/assets/images/discord.png`} alt="" className="h-8 w-8 mx-2 cursor-pointer"/>
      </div>
    </div>
  )
}

export default Footer
