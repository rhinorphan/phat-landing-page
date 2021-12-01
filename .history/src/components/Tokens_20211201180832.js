import React from 'react'

function Tokens() {
  return (
    <section name="token" className="h-100 w-100 flex flex-col md:flex-row justify-center md:w-4/5 and md:w-1/5">
      <div className="">
        <img src={`${process.env.PUBLIC_URL}/assets/images/token.gif`} alt="" className="" />
      </div>
      <div className="flex justify-center">
        <p className="header-wrap mb-8">Tokens</p>
      </div>
    </section>
  )
}

export default Tokens
