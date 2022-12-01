import './Header.css';

function Header() {
  return (
    <div className="Header">
        <header>
            <h1>
                Welcome
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#contact-info">Contact Me</a>
                    </li>
                    <li>
                        <a href="#projects">My Projects</a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  );
}

export default Header;