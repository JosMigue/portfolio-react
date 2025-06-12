import { useState } from 'react';
import { MainSection } from './layout/MainSection';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import SocialNetworks from './networking/SocialNetworks';

export default function Contact() {
	const [parent] = useAutoAnimate(/* optional config */)
	const [showContactOptions, setShowContactOptions] = useState(false);
	const handleToggleContactOptions = () => {
		setShowContactOptions(!showContactOptions);
	}
	const ContactOptions = () => {
		return (
      <div className='flex flex-col items-center lg:justify-start justify-center lg:gap-0 gap-2'>
        <SocialNetworks requiredOnes={['whatsapp', 'telegram', 'email']}/>
      </div>
		)
	};
	return (
			<div ref={parent}>
				<h1 className="text-5xl font-bold text-white text-center my-2">Get In Touch</h1>
				<p className="text-gray-300 text-center my-2 text-xl">I’m currently looking for new opportunities, my inbox is always open. You can send me an email and I will response back ASAP!</p>
				<div className="flex justify-center">
					<button onClick={handleToggleContactOptions} className="my-4 py-4 px-4 bg-transparent border border-green-400 rounded-md text-green-400 font-bold hover:animate-pulse">{showContactOptions ? 'Hide' : 'Say Hi 👋🏻'}</button>
				</div>
				<div>
					{showContactOptions && <ContactOptions />}
				</div>
			</div>
	)
}