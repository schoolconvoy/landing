import Image from "next/image"

export default function Customers() {
	return (
	  <div className="bg-white py-24 sm:py-32">
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
		  <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
			Trusted by leading schools
		  </h2>
		  <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
			<Image
			  className="col-span-6 max-h-12 w-full object-contain lg:col-span-6"
			  src="/interguide-badge.jpeg"
			  alt="Transistor"
			  width={158}
			  height={50}
			/>
		  </div>
		</div>
	  </div>
	)
  }
