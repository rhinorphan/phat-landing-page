import React from 'react'

function Tokens() {
  return (
    <section name="token" className="flex flex-col md:flex-row justify-center md:w-4/5 and md:w-1/5">
      <div className="">
        <img src={`${process.env.PUBLIC_URL}/assets/images/token.gif`} alt="" className="min-w-50" />
      </div>
      <div className="flex flex-col justify-center text-center">
        <p className="header-wrap mb-8">Tokens</p>
        <p className="flex text-2xl mb-2 text-white text-center normalText">The current and only Token available to buy and sell is on BSC. This token is for the community and was made for the purpose of helping those who have been scammed or rugpulled. The community will help build this token along side the devs!</p>
      </div>
    </section>
  )
}

export default Tokens
