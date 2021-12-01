import React from 'react'

function Community() {
  return (
    <section className="flex flex-col place-items-center h-100 py-20 px-4" name="community">
      <div className="w-min-50">
        <img src={`${process.env.PUBLIC_URL}/assets/images/collab.png`} alt=""/>
      </div>
      <div class="mx-16 w-50">
        <h2 class="text-4xl  font-bold mb-8 text-green-500 text-center">
        Party Hats?
        </h2>
        <h3 class="flex text-2xl mb-2 text-gray-300 text-center normalText">
        The Party Hats team and our community aims to be a central guild for anyone to join in and spend some time playing games with others as if you were at the arcade with friends. Our community will be more focused on helping fellow members who have either been rugpulled on or scammed by other people in the crypto space.
        </h3>
      </div>
      <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/alien2.png`}class=""/>
                  </div>
                  <h6 class="text-l font-semibold text-green-500">Community Driven</h6>
                  <p class="mt-2 mb-4 text-gray-500 normalText">
                  Our goal is primarily to help people who have lost money to get back on their feet. And to create a community that helps each other besides just themselves.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div class="flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/geek.png`}class=""/>
                  </div>
                  <h6 class="text-l font-semibold text-green-500">Transparency</h6>
                  <p class="mt-2 mb-4 text-gray-500 normalText">
                  Complete Transparency with the Community.
                  Devs and Staff team will always talk with the members to make sure the community stays informed.
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/alien1.png`}class=""/>
                  </div>
                  <h6 class="text-l font-semibold text-green-500">Easy to Reach</h6>
                  <p class="mt-2 mb-4 text-gray-500 normalText">
                  You will be able to talk to the developers and owners of the project at anytime as long as they are available to talk! Any Questions, Feedback and Suggestions are always welcomed!
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
