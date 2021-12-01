import React from 'react'

var myRadios = document.getElementsByName('tabs2');
      var setCheck;
      var x = 0;
      for(x = 0; x < myRadios.length; x++){
          myRadios[x].onclick = function(){
              if(setCheck != this){
                   setCheck = this;
              }else{
                  this.checked = false;
                  setCheck = null;
          }
          };
      }

function Tokens() {
  return (
    <section name="token" className="flex flex-col md:flex-row justify-center">
      <div className="flex">
        <img src={`${process.env.PUBLIC_URL}/assets/images/token.gif`} alt="" />
      </div>
      <div className="flex flex-col text-center md:mr-20 md:w-2/5 items-center">
        <p className="header-wrap mb-20">Tokens</p>
        <p className="text-white pb-10">$PHAT</p>
        <p className="flex text-2xl mb-2 text-white normalText">The current and only Token available to buy and sell is on BSC. This token is for the community and was made for the purpose of helping those who have been scammed or rugpulled. The community will help build this token along side the devs!</p>
        <div class="shadow-md mt-10">
            <div class="tab w-full overflow-hidden border">
               <input class="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2"/>
               <label class="block p-5 leading-normal cursor-pointer text-white" for="tab-single-one">Contract Adress</label>
               <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-pink-400 text-sm">
                  <p class="p-5">0x7756e4d80def722b28ed0cab68f5d132d91a3ea5</p>
               </div>
            </div>
            <div class="tab w-full overflow-hidden border">
               <input class="absolute opacity-0" id="tab-single-two" type="radio" name="tabs2" />
               <label class="block p-5 leading-normal cursor-pointer text-white" for="tab-single-two">Total Supply</label>
               <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-pink-400 text-sm">
                  <p class="p-5">100M $PHAT</p>
               </div>
            </div>
            <div class="tab w-full overflow-hidden border">
               <input class="absolute opacity-0" id="tab-single-three" type="radio" name="tabs2"/>
               <label class="block p-5 leading-normal cursor-pointer text-white" for="tab-single-three">Slippage</label>
               <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-pink-400 text-sm">
                  <p class="p-5">7% of which:</p>
                  <p className="pb-5">6% goes to Liquidity <br />1% goes to Holders of Phat</p>
               </div>
            </div>
          </div>
          <button class="m-2 mt-16 bg-white rounded-full py-4 px-8 shadow-lg uppercase text-sm tracking-wider text-green-500transition duration-300 hover:text-white pushable">
          <a className="front hover:bg-pink-400 " target="_blank" rel="noopener noreferrer" href="https://pancakeswap.finance/swap?outputCurrency=0x7756e4D80DEf722b28ED0cab68f5d132d91a3Ea5">Buy $PHAT</a>
          </button>
          <p className="text-white pt-10 pb-10">$HAT</p>
          <p className="flex text-2xl mb-2 text-white normalText">More details soon!</p>
      </div>
    </section>
  )
}

export default Tokens
