import React from 'react'

function Tokens() {
  return (
    <section name="token" className="h-100 container px-5 py-20 flex flex-col md:flex-row flex-grow">
      <div className="">
        <img src={`${process.env.PUBLIC_URL}/assets/images/token1.gif`} alt="" className="mx-auto max-w-md" />
      </div>
      <div className="flex text-center">
        <p className="header-wrap mb-8">Tokens</p>
      </div>
    </section>
  )
}

export default Tokens
