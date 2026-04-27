import { useEffect } from 'react'
import './home.css'
//import Resume from '../components/Resume';

function Home() {
	useEffect(() => {

		const hash = window.location.hash;
		if (hash === '#about') {
			setTimeout(() => {
				const element = document.getElementById('about');
				if (element) {
					element.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}, 100)
		}
	}, []);

	return (
		<div className="container">
			<p id="about">
				I'm a developer currently studying at 42 Málaga. During my time there I've been building projects mainly in C, C++ and Docker, which helped me develop strong problem-solving skills and a solid understanding of how software works.

				At the same time, I worked for six months at Aispoken as a mobile frontend developer using React Native, where I helped build features for mobile applications and gained experience working in a real development environment.

				Before moving into tech, I spent several years working in commercial roles. That experience helped me develop strong communication skills and a practical understanding of users and business needs.

				Today I'm focused on becoming a full-stack developer. I enjoy working across the stack, from backend logic to building clean and intuitive user interfaces, and I'm always learning by building real projects and improving my tools and workflow.
			</p>
			<div className="cv">
				
			</div>
		</div>
	)
}

export default Home