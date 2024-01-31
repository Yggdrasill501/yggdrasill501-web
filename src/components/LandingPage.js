import React, {useState} from "react";
import '../styles/LandingPage.css';

function LandingPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
            <div className="LandingPage">
                <div className="menu-icon" onClick={toggleMenu}>
                    <img src= "/MenuIcon.png" alt="menu-icon" />
                </div>
                {menuOpen&&(
                    <div className="menu-open">
                        <div className="menu-overlay"/>
                        <div className="menu">
                            <h2>You can see my project, portfolio and blog here:</h2>
                            <button onClick={toggleMenu}>Close</button>
                            <button>Download my CV here</button>
                        </div>
                    </div>
                )}
                <div className="content">

                    <div className="image-container">
                        <img src="/header-image.png" alt="header" />
                    </div>
                    <div className="text-container">
                        <h1>Hello there, I'm Filip and this is my Website</h1>
                        <p>
                            I am Software Engineer and enthusiast interested in computer science
                            and quantum computing. I have a wide range of skills
                        </p>
                        <div className="button-container">
                            <a href="https://github.com/Yggdrasill501" target="_blank" rel="noopener noreferrer">
                               <img src="GithubButton.png" alt="GitHub" className="social-button-image"/>
                            </a>
                            <a href="https://www.linkedin.com/in/filip-zitny501/" target="_blank" rel="noopener noreferrer">
                                <img src="LinkedinButton.png" alt="LinkedIn" className="social-button-image"/>
                            </a>
                        </div>
                        </div>
                </div>
            </div>
  );
}

export default LandingPage;