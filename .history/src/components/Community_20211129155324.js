import React from 'react'

function Community() {
  return (
    <section className="flex flex-col place-items-center h-100 py-20 px-4" name="community">
      <div className="w-min-50">
        <img src={`${process.env.PUBLIC_URL}/assets/images/community1.png`} alt="" className="center" />
      </div>
      <div class="mx-16 w-50">
        <h2 class="header-wrap mb-8 text-green-500">
        Party Hats?
        </h2>
        <h3 class="flex text-2xl mb-2 text-gray-300 text-center normalText">
        The Party Hats team and our community aims to be a central guild for anyone to join in and spend some time playing games with others as if you were at the arcade with friends. Our community will be more focused on helping fellow members who have either been rugpulled on or scammed by other people in the crypto space.
        </h3>
      </div>
      <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="flex bg-transparent w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto neon-box neon-box__1">
                  <div class="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full neon-box__1">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/alien2.png`}class=""/>
                  </div>
                  <h6 class="text-l font-semibold">Community Driven</h6>
                  <p class="mt-2 text-white mb-4 normalText">
                  Our goal is primarily to help people who have lost money to get back on their feet. A community helping each other.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col md:flex-row gap-4">
              <div class="">
                <div class="px-4 py-5 flex-auto neon-box neon-box__2">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400 neon-box__2">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/pixel.png`}class=""/>
                  </div>
                  <h6 class="text-l font-semibold ">Transparency</h6>
                  <p class="mt-2 mb-4 text-white normalText">
                  Complete Transparency with the Community.
                  Devs and Staff team will always talk with the members to make sure the community stays informed.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col md:flex-row gap-4">
              <div class="">
                <div class="px-4 py-5 flex-auto neon-box neon-box__3">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400 neon-box__3">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/alien1.png`}class=""/>
                  </div>
                  <h6 class="text-l font-semibold ">Easy to Reach</h6>
                  <p class="mt-2 mb-4 text-white normalText">
                  You will be able to talk to the developers and owners of the project at anytime as long as they are available to talk!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Community
