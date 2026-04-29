
export default function Footer() {
	return (
	  <footer>
		<div className="flex w-full justify-center font-extrabold my-8 mx-0 md:m-8">
		  <ul className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 border border-white/20 rounded-xl backdrop-blur-sm bg-white/5">
			<li className="p-4 md:p-8 md:py-4"><a href="https://www.linkedin.com/in/cyril-salamite-270270197/" target="blank">Linkedin</a></li>
			<li className="p-4 md:p-8 md:py-4"><a href="mailto:cyril.r.a.salamite@gmail.com" target="blank">cyril.r.a.salamite@gmail.com</a></li>
			<li className="  p-4 md:p-8 md:py-4"><a href="https://github.com/Cyrilange" target="blank" className="!text-white">Github</a></li>
		  </ul>
		</div>
	  </footer>
	)
  }