import ContactForm from "./ContactForm";
import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaNodeJs,
	FaDatabase,
	FaGit,
	FaGithub,
	FaBootstrap,
} from "react-icons/fa";

function App() {
	return (
		<div className="app">
			{/* navigation */}
			<nav>
				<ul className="nav">
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
			{/* home section */}
			<section id="home">
				<h1 style={{ fontSize: "6em" }}>Hey, I'm IRINA</h1>
				<p style={{ fontSize: "4em" }}>I'm a Junior Full-stack Developer</p>
				<p style={{ fontSize: "1.5em" }}>
					Front-End: REACT HTML CSS JAVASCRIPT BOOTSTRAP{" "}
				</p>
				<p style={{ fontSize: "1.5em" }}>Back-End: NODEJS EXPRES POSTGRESQL</p>
			</section>
			{/* about section */}
			<section id="about">
				<div>
					<h2 style={{ textAlign: "center", fontSize: "3em" }}>ABOUT ME</h2>
					<p className="about-description">
						Hello, my name is IRINA MIHAI, and I am a graduate of a software
						bootcamp. I am excited to begin my journey as a software developer
						and apply the skills and knowledge I have gained from my intensive
						training. Through the bootcamp, I have learned how to code using
						various programming languages, such as Javascript. I have also
						gained experience in front-end and back-end web development. One of
						the most valuable aspects of the bootcamp was the opportunity to
						work on real projects,both individually and in a team setting.This
						allowed me to develop collaboration skills, which are crucial in the
						software development industry. I am eager to contribute to the tech
						industry. I am continually learning and exploring new technologies
						to enhance my skills ans stay current with industry trends. Thank
						you for taking the time to read my introduction, and I look forward
						to discussing potential opportunities further.
					</p>
				</div>
				<div>
					<img
						className="jumbo-image"
						src="https://images.unsplash.com/photo-1600818797017-d6e5027210bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
						alt=""
					/>
				</div>
			</section>
			{/* Projects section */}
			<section id="projects">
				<h2 style={{ textAlign: "center", fontSize: "3em" }}>MY PROJECTS</h2>
				<div className="projects">
					<div className="project">
						<h3>Knowledge Checklist</h3>
						<p className="project-description">
							As part of our graduation requirements at Code your Future, our
							team of 4 followed Agile development principles to create an
							application that allows students to track their progress in a
							knowledge checklist throughout the course. Our project involved
							using a variety of skills.
						</p>
						<span className="tech-stack">
							Technology stack:
							<p>
								<FaReact />
								<FaHtml5 />
								<FaCss3Alt />
								<FaJs />
								<FaReact />
								<FaNodeJs />
								<FaDatabase />
								<FaGit />
								<FaGithub />
								<FaBootstrap />
							</p>
						</span>
						<button className="project-button">
							<a href="https://starter-kit-v4nu.onrender.com/">View Project</a>
						</button>
					</div>
					<div className="project">
						<h3>City Mini Guide</h3>
						<p className="project-description">
							A city mini guide project involving creating a concise and
							informative guide to a specific city. The guide provides essential
							information about the city, such as its Colleges, Pharmacies,
							Hospitals,Doctors.
						</p>
						<span className="tech-stack">
							Technology stack:
							<p>
								<FaReact />
								<FaHtml5 />
								<FaCss3Alt />
								<FaJs />
								<FaReact />
								<FaNodeJs />
								<FaGit />
								<FaGithub />
								<FaBootstrap />
							</p>
						</span>
						<button className="project-button">
							<a
								href="https://london-guide-react.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Project
							</a>
						</button>
					</div>
					<div className="project">
						<h3>Hotel App</h3>
						<p className="project-description">
							This is an individually project made as a coursework for the boot
							camp.
						</p>
						<span className="tech-stack">
							Technology stack:
							<p>
								<FaReact />
								<FaHtml5 />
								<FaCss3Alt />
								<FaJs />
								<FaReact />
								<FaGithub />
								<FaBootstrap />
							</p>
						</span>
						<button className="project-button">
							<a
								href="https://hotel-react-m.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Project
							</a>
						</button>
					</div>
					<div className="project">
						<h3>Quotes App</h3>
						<p className="project-description">
							This project was created as a coursework and it displays random
							quotes. An API was utilized in the implementation of this project.
						</p>
						<span className="tech-stack">
							Technology stack:
							<p>
								<FaReact />
								<FaHtml5 />
								<FaCss3Alt />
								<FaJs />
								<FaReact />
								<FaNodeJs />
								<FaGithub />
								<FaBootstrap />
							</p>
						</span>
						<button className="project-button">
							<a
								href="https://hotel-react-m.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Project
							</a>
						</button>
					</div>
					<div className="project">
						<h3>Css challenge</h3>
						<p className="project-description">
							This is a project that I completed to improve my CSS skills as
							part of an additional coursework.
						</p>
						<span className="tech-stack">
							Technology stack:
							<p>
								<FaReact />
								<FaHtml5 />
								<FaCss3Alt />
								<FaGithub />
								<FaBootstrap />
							</p>
						</span>
						<button className="project-button">
							<a
								href="https://job-listing-i-m.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Project
							</a>
						</button>
					</div>
					<div className="project">
						<h3>Front end Mentor Challenge</h3>
						<p className="project-description">
							I undertook this individual challenge with the aim of improving my
							HTML and CSS skills.
						</p>
						<span className="tech-stack">
							Technology stack:
							<p>
								<FaHtml5 />
								<FaCss3Alt />
								<FaGithub />
							</p>
						</span>
						<button className="project-button">
							<a
								href="https://frontendchalenge.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Project
							</a>
						</button>
					</div>
				</div>
			</section>
			<section id="#contact">
				<h2 style={{textAlign:"center"}}>CONTACT ME</h2>
				<ContactForm />
				
			</section>
		</div>
	);
}

export default App;
