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
    <section name="token" className="flex flex-col md:flex-row justify-center py-20 px-4">
      <div className="flex">
        <img src={`${process.env.PUBLIC_URL}/assets/images/token.gif`} alt="" />
      </div>
      <div className="flex flex-col text-center md:mr-20 md:w-3/4">
        <p className="header-wrap mb-20">Tokens</p>
        <p className="flex text-2xl mb-2 text-white text-center normalText">The current and only Token available to buy and sell is on BSC.</p>
        <div class="shadow-md">
            <div class="tab w-full overflow-hidden border-t">
               <input class="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2"/>
               <label class="block p-5 leading-normal cursor-pointer text-white" for="tab-single-one">Contract Adress</label>
               <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p class="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
               </div>
            </div>
            <div class="tab w-full overflow-hidden border-t">
               <input class="absolute opacity-0" id="tab-single-two" type="radio" name="tabs2" />
               <label class="block p-5 leading-normal cursor-pointer" for="tab-single-two">Label Two</label>
               <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p class="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
               </div>
            </div>
            <div class="tab w-full overflow-hidden border-t">
               <input class="absolute opacity-0" id="tab-single-three" type="radio" name="tabs2"/>
               <label class="block p-5 leading-normal cursor-pointer" for="tab-single-three">Label Three</label>
               <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p class="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
               </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Tokens
