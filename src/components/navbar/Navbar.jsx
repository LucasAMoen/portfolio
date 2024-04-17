import "./Navbar.css";
import { NavbarLink } from "./NavbarLink";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <h1 className="site-title">Lucas Moen</h1>
        <ul>
          <NavbarLink to="/portfolio/">Home</NavbarLink>
          <NavbarLink to="/portfolio/about/">About</NavbarLink>
        </ul>
      </nav>
      <hr></hr>
    </div>
  );
}
