import Image from 'next/image'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/instagram'

export default function Footer() {
	return (
		// Create a React based TailwindCSS footer component
		<footer className="bg-white dark:bg-gray-800 border-t px-5">
			<div className="container mx-auto px-8">
				<div className="w-full flex flex-col md:flex-row py-6">
					<div className="flex-1 text-black dark:text-white">
						&copy; 2024 Schoolconvoy, Inc. All rights reserved.
					</div>
					<div className="flex-1 text-black dark:text-white">
						<ul className="list-none gap-x-6 justify-end flex flex-row footer-links">
							<li className="mb-2">
								<SocialIcon url="https://www.instagram.com/schoolconvoy" style={{ height: '30px', width: '30px' }} />
							</li>
							<li className="mb-2">
								<SocialIcon url="https://www.github.com/schoolconvoy" style={{ height: '30px', width: '30px' }} />
							</li>
							<li className="mb-2">
								<SocialIcon url="https://www.linkedin.com/in/schoolconvoy" style={{ height: '30px', width: '30px' }} />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}