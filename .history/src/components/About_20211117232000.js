import React from 'react'

// shadow-lg border border-gray-200 rounded-full overflow-hidden - picture TEAM div className

function About() {
  return (
    <section name="about" className="h-100 container px-5 py-24 mx-auto flex-col">
      <div>
        <p className="flex text-4xl  font-bold mb-8 text-green-500 ">Meet the Team</p>
      </div>
      <div class="flex flex-col sm:flex-row gap-4">

			<div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
				<div class="inline-flex h-40 w-40">
					<img src={`${process.env.PUBLIC_URL}/assets/images/team1.png`}
						 alt=""
						 class="h-full w-full"/>
				</div>

				<h2 class="mt-4 font-bold text-l">John Smith</h2>
				<h6 class="mt-2 text-md font-medium text-green-500 normalText">Founder</h6>

				<p class="text-sm text-gray-500 text-center mt-3 normalText">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
				</p>

				<ul class="flex flex-row mt-4 space-x-2">
					<li>
						<a href="" class="flex items-center justify-center h-8 w-8">
							<img src={`${process.env.PUBLIC_URL}/assets/images/fb.png`}class=""/>
						</a>
					</li>
					<li>
          <a href="" class="flex items-center justify-center h-8 w-8">
							<img src={`${process.env.PUBLIC_URL}/assets/images/twitter.png`}class=""/>
						</a>
					</li>
					<li>
          <a href="" class="flex items-center justify-center h-8 w-8">
							<img src={`${process.env.PUBLIC_URL}/assets/images/linkedin.png`}class=""/>
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

				<h2 class="mt-4 font-bold text-l">Anna Bennett</h2>
				<h6 class="mt-2 text-md font-medium text-green-500 normalText">CFO</h6>

				<p class="text-sm text-gray-500 text-center mt-3 normalText">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
				</p>

				<ul class="flex flex-row mt-4 space-x-2">
					<li>
						<a href="" class="flex items-center justify-center h-8 w-8">
							<img src={`${process.env.PUBLIC_URL}/assets/images/fb.png`}class=""/>
						</a>
					</li>
					<li>
          <a href="" class="flex items-center justify-center h-8 w-8">
							<img src={`${process.env.PUBLIC_URL}/assets/images/twitter.png`}class=""/>
						</a>
					</li>
					<li>
          <a href="" class="flex items-center justify-center h-8 w-8">
							<img src={`${process.env.PUBLIC_URL}/assets/images/linkedin.png`}class=""/>
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

				<h2 class="mt-4 font-bold text-l">Mary Taylor</h2>
				<h6 class="mt-2 text-md font-medium text-green-500 normalText">Marketing</h6>

				<p class="text-sm text-gray-500 text-center mt-3 normalText">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
				</p>

				<ul class="flex flex-row mt-4 space-x-2">
					<li>
						<a href="" class="flex items-center justify-center h-8 w-8">
							<img src={`${process.env.PUBLIC_URL}/assets/images/fb.png`}class=""/>
						</a>
					</li>
					<li>
          <a href="" class="flex items-center justify-center h-8 w-8">
							<img src={`${process.env.PUBLIC_URL}/assets/images/twitter.png`}class=""/>
						</a>
					</li>
					<li>
          <a href="" class="flex items-center justify-center h-8 w-8">
							<img src={`${process.env.PUBLIC_URL}/assets/images/linkedin.png`}class=""/>
						</a>
					</li>
				</ul>
			</div>

		</div>

    </section>
  )
}

export default About
