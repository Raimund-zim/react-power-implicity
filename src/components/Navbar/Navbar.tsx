import logo_apple from "../../assets/logo_apple.svg";
import "./navbar_styles.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo_apple} className="navbar__logo" alt="apple logo" />
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="" className="navbar__link">
            Features
          </a>
        </li>
        <li className="navbar__item">
          <a href="" className="navbar__link">
            Partners
          </a>
        </li>
        <li className="navbar__item">
          <a href="" className="navbar__link">
            Stories
          </a>
        </li>
      </ul>
      <button className="navbar__btn-download">Download for free</button>
    </nav>
  );
};
