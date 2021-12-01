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
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/images/tg.png`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/assets/images/twitter.png`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/assets/images/server_icon.png`} alt="" />
      </div>
    </div>
  )
}

export default Footer
