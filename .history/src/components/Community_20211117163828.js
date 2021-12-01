import React from 'react'

function Community() {
  return (
    <section className="grid md:flex place-items-center h-100 py-10 px-4" name="community">
      <div className="w-full">
        <img src={`${process.env.PUBLIC_URL}/assets/images/collab.png`} alt="" className="h-full w-full"/>
      </div>
      <div class="mx-16">
        <h2 class="text-4xl  font-bold mb-2 text-green-500">
          Community Arcade Cabinet
        </h2>
        <h3 class="text-2xl mb-2 text-gray-300">
        With your beloved games.
        </h3>
        <h3 class="text-2xl mb-8 text-green-500">
        Join the revolution!
        </h3>
      </div>
    </section>
  )
}

export default Community
