import React from 'react'

function Tokens() {
  return (
    <section name="token" className="h-100 w-100 flex flex-col md:flex-row justify-center">
      <div className="">
        <img src={`${process.env.PUBLIC_URL}/assets/images/token.gif`} alt="" className="w-min" />
      </div>
      <div className="flex justify-center">
        <p className="header-wrap mb-8">Tokens</p>
      </div>
    </section>
  )
}

export default Tokens
