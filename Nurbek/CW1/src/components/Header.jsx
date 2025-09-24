import "./Header.css";

export default function Header() {
  return (
    <header className="navbar">
      <div className="navbar__brand">MySite</div>
      <nav className="navbar__menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact" className="btn">
          Contact
        </a>
      </nav>
    </header>
  );
}
