import React from 'react'

function Footer() {
  return (
    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
      <a className="text-green-500">example@email.com</a>
      <p className="leading-normal my-5">
        49 Smith St.
        <br />
        Saint Cloud, MN 56301
      </p>
      <div className="flex flex-row justify-center">
        <img src={`${process.env.PUBLIC_URL}/assets/images/tg.png`} alt="" className="h-12 w-12 mx-2"/>
        <img src={`${process.env.PUBLIC_URL}/assets/images/reddit.png`} alt="" className="h-12 w-12"/>
        <img src={`${process.env.PUBLIC_URL}/assets/images/twitter.png`} alt="" className="h-12 w-12"/>
        <img src={`${process.env.PUBLIC_URL}/assets/images/discord.png`} alt="" className="h-12 w-12"/>
      </div>
    </div>
  )
}

export default Footer
