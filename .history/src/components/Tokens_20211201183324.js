import React from 'react'

function Tokens() {
  return (
    <section name="token" className="flex flex-col md:flex-row justify-center py-20 px-4">
      <div className="flex justify-end md:w-1/2">
        <img class="object-bottom" src={`${process.env.PUBLIC_URL}/assets/images/token.gif`} alt="" />
      </div>
      <div className="flex flex-col text-center md:w-1/2 md:mr-20">
        <p className="header-wrap mb-20">Tokens</p>
        <p className="flex text-2xl mb-2 text-white text-center normalText">The current and only Token available to buy and sell is on BSC.</p>
        <p></p>
      </div>
    </section>
  )
}

export default Tokens
