import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const toggleMenu = () => {
		setIsOpen(prev => !prev)
	}

	const scrollTo = (id: string) => {
  navigate('/');
  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, 150);
};

	return (
		<header className="contain">
			<div className="container-port">
				<div className="triple-circle e1 c1"></div>
				<div className="triple-circle e1 c2"></div>
				<div className="triple-circle e1 c3"></div>
				<div className="triple-circle e2 c1"></div>
				<div className="triple-circle e2 c2"></div>
				<div className="triple-circle e2 c3"></div>
				<div className="triple-circle e3 c1"></div>
				<div className="triple-circle e3 c2"></div>
				<div className="triple-circle e3 c3"></div>

				<h1>Cyril Salamite</h1>
			</div>
			<ul className="list">
				<li><Link to="/" onClick={() => scrollTo("about")}>About</Link></li>
				<li onClick={toggleMenu} id="proj">Projects</li>
				{
					isOpen && (
						<ul className={isOpen ? "open" : ""}>
							<li><Link to="/projects/minishell" state={{scrollTo:"mins"}}>Minishell</Link></li>
							<li><Link to="/projects/ft_irc" state={{scrollTo:"irc"}}>ft_irc</Link></li>
							<li><Link to="/projects/Tokenizers" state={{scrollTo:"sf2"}}>tokenizers</Link></li>
						</ul>
					)
				}
			</ul>
		</header>
	)
}

export default Navbar