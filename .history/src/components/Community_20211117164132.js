import React from 'react'

function Community() {
  return (
    <section className="grid md:flex place-items-center h-100 py-10 px-4" name="community">
      <div className="w-full">
        <img src={`${process.env.PUBLIC_URL}/assets/images/collab.png`} alt="" className="h-full w-full"/>
      </div>
      <div class="mx-16 w-80">
        <h2 class="text-4xl  font-bold mb-2 text-green-500">
        Party Hats?
        </h2>
        <h3 class="text-2xl mb-2 text-gray-300">
        The Party Hats team and our community aims to be a central guild for anyone to join in and spend some time playing games with others as if you were at the arcade with friends. Out community will be more focused on helping fellow members who have either been rugpulled on or scammed by other people in the crypto space.
        </h3>
      </div>
    </section>
  )
}

export default Community
