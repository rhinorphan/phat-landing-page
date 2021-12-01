import React from 'react'

function Tokens() {
  return (
    <section name="token" className="flex flex-col md:flex-row justify-center py-20 px-4">
      <div className="flex justify-end md:w-1/2 object-none object-bottom">
        <img class="object-bottom" src={`${process.env.PUBLIC_URL}/assets/images/token.gif`} alt="" />
      </div>
      <div className="flex flex-col justify-center text-center md:w-1/2 md:mr-20">
        <p className="header-wrap mb-20">Tokens</p>
        <p className="flex text-2xl mb-2 text-white text-center normalText">The current and only Token available to buy and sell is on BSC. This token is for the community and was made for the purpose of helping those who have been scammed or rugpulled. The community will help build this token along side the devs!</p>
        <p></p>
      </div>
    </section>
  )
}

export default Tokens
