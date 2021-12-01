import React from 'react'

function Community() {
  return (
    <section className="grid md:grid place-items-center h-100 py-10 px-4" name="community">
      <div className="w-min-50">
        <img src={`${process.env.PUBLIC_URL}/assets/images/collab.png`} alt=""/>
      </div>
      <div class="mx-16 w-50">
        <h2 class="flex text-4xl  font-bold mb-2 text-green-500 justify-center">
        Party Hats?
        </h2>
        <h3 class="flex text-2xl mb-2 text-gray-300 flex-wrap">
        The Party Hats team and our community aims to be a central guild for anyone to join in and spend some time playing games with others as if you were at the arcade with friends. Out community will be more focused on helping fellow members who have either been rugpulled on or scammed by other people in the crypto space.
        </h3>
      </div>
    </section>
  )
}

export default Community
