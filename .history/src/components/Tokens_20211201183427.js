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
        <p className="lex text-2xl mb-2 text-white text-center normalText">Slippage is set at 7%
6% Goes to Liquidity
1% Goes to Holders of Phat
PHAT has a supply of 100m Tokens
This Token will not mint any more tokens
Token Contract: 0x7756e4d80def722b28ed0cab68f5d132d91a3ea5</p>
      </div>
    </section>
  )
}

export default Tokens
