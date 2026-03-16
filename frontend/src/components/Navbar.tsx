import { useState } from "react"
import './navbar.css'


function Navbar() {
	const[isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(prev => !prev)
	  }
	
  return (
	<header className="contain">
		<ul className="list">
			<li>Home</li>
			<li onClick={toggleMenu} id="proj">Projects</li>
			{
				isOpen && (
					<ul className={isOpen ? "open" : ""}>
						<li>Minishell</li>
						<li>Phylosopher</li>
						<li>Push_swap</li>
					</ul>
				)
			}
		</ul>
	</header>
  )
}

export default Navbar