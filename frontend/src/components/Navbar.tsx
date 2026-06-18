import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'

function Navbar() {
	const navigate = useNavigate();

	const scrollTo = (id: string) => {
		navigate('/');
		setTimeout(() => {
			document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
		}, 150);
	};

	return (
		<header className="contain">
			<div className="container-port hidden sm:flex">
				<div>
					<h1>Cyril Salamite</h1>
					<h2>Full stack Developer</h2>
					<h2 className="gitLink"><a href="https://github.com/Cyrilange" target="_blank" rel="noopener noreferrer">Github Link</a></h2>
				</div>
			</div>
			<ul className="list">
				<li><Link to="/" onClick={() => scrollTo("about")}>About</Link></li>
				<li><Link to="/" onClick={() => scrollTo("projects")}>Projects</Link></li>
				<li><Link to="/" onClick={() => scrollTo("experience")}>Work Experience</Link></li>
			</ul>
		</header>
	)
}

export default Navbar