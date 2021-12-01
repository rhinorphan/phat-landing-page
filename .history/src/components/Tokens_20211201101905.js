import React from 'react'

function Tokens() {
  return (
    <section name="token" className="h-100 container px-5 py-20 mx-auto flex justify-center">
      <div className="">
        <img src={`${process.env.PUBLIC_URL}/assets/images/token.gif`} alt="" className="mx-auto max-w-sm" />
      </div>
      <div>
        <p className="header-wrap mb-8">Tokens</p>
      </div>
    </section>
  )
}

export default Tokens
