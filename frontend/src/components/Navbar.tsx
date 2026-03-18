import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const toggleMenu = () => {
		setIsOpen(prev => !prev)
	}

	const scrollToAbout = (e: React.MouseEvent) => {
		e.preventDefault();
		navigate('/');
		setTimeout(() => {
			const element = document.getElementById('about');
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}, 150);
	}

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
				<li><Link to="/" onClick={scrollToAbout}>About</Link></li>
				<li onClick={toggleMenu} id="proj">Projects</li>
				{
					isOpen && (
						<ul className={isOpen ? "open" : ""}>
							<li><Link to="/projects/minishell">Minishell</Link></li>
							<li><Link to="/projects/philosophers">Philosophers</Link></li>
							<li><Link to="/projects/push-swap">Push_swap</Link></li>
						</ul>
					)
				}
			</ul>
		</header>
	)
}

export default Navbar