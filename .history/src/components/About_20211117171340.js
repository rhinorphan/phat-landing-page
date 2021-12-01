import React from 'react'

// shadow-lg border border-gray-200 rounded-full overflow-hidden - picture TEAM div className

function About() {
  return (
    <section name="about" className="h-100 container px-5 py-24 mx-auto flex-col">
      <div>
        <p className="flex justify-center sm:text-4xl text-2xl font-medium title-font mb-10 text-green-500">Meet the Team</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">

			<div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
				<div class="inline-flex h-40 w-40">
					<img src={`${process.env.PUBLIC_URL}/assets/images/team1.png`}
						 alt=""
						 class="h-full w-full"/>
				</div>

				<h2 class="mt-4 font-bold text-xl">John Smith</h2>
				<h6 class="mt-2 text-sm font-medium text-green-500">Founder</h6>

				<p class="text-xs text-gray-500 text-center mt-3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
				</p>

				<ul class="flex flex-row mt-4 space-x-2">
					<li>
						<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
							<i class="fab fa-facebook"></i>
						</a>
					</li>
					<li>
						<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
							<i class="fab fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
							<i class="fab fa-instagram"></i>
						</a>
					</li>
				</ul>
			</div>

			<div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
				<div class="inline-flex h-40 w-40">
					<img src={`${process.env.PUBLIC_URL}/assets/images/team2.png`}
						 alt=""
						 class="h-full w-full"/>
				</div>

				<h2 class="mt-4 font-bold text-xl">Anna Bennett</h2>
				<h6 class="mt-2 text-sm font-medium text-green-500">CFO</h6>

				<p class="text-xs text-gray-500 text-center mt-3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
				</p>

				<ul class="flex flex-row mt-4 space-x-2">
					<li>
						<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
							<i class="fab fa-facebook"></i>
						</a>
					</li>
					<li>
						<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
							<i class="fab fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
							<i class="fab fa-instagram"></i>
						</a>
					</li>
				</ul>
			</div>

			<div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
				<div class="inline-flex h-40 w-40">
					<img src={`${process.env.PUBLIC_URL}/assets/images/team3.png`}
						 alt=""
						 class="h-full w-full"/>
				</div>

				<h2 class="mt-4 font-bold text-xl">Mary Taylor</h2>
				<h6 class="mt-2 text-sm font-medium">Marketing</h6>

				<p class="text-xs text-gray-500 text-center mt-3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
				</p>

				<ul class="flex flex-row mt-4 space-x-2">
					<li>
						<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
							<i class="fab fa-facebook"></i>
						</a>
					</li>
					<li>
						<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
							<i class="fab fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
							<i class="fab fa-instagram"></i>
						</a>
					</li>
				</ul>
			</div>

		</div>

    </section>
  )
}

export default About
