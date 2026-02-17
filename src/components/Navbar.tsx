import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="navbar-logo">Volodymyr Mandziuk</div>
        <div className="navbar-links">
          <a href="#projects" className="navbar-link">
            Projects
          </a>
          <a href="#contact" className="navbar-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
