import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
	return (
	  <footer>
		<div className="flex w-full justify-center font-extrabold my-8 mx-0 md:m-8">
		  <ul className="flex justify-center items-center gap-2 md:gap-4 border border-white/20 rounded-xl backdrop-blur-sm bg-white/5">
			<li className="p-4 md:p-8 md:py-4">
			  <a href="https://www.linkedin.com/in/cyril-salamite-270270197/" target="_blank" rel="noopener noreferrer">
			    <FaLinkedin size={24} className="!text-white" />
			  </a>
			</li>
			<li className="p-4 md:p-8 md:py-4">
			  <a href="mailto:cyril.r.a.salamite@gmail.com" target="_blank" rel="noopener noreferrer">
			    <MdEmail size={24} className="!text-white" />
			  </a>
			</li>
			<li className="p-4 md:p-8 md:py-4">
			  <a href="https://github.com/Cyrilange" target="_blank" rel="noopener noreferrer">
			    <FaGithub size={24} className="!text-white" />
			  </a>
			</li>
		  </ul>
		</div>
	  </footer>
	)
}