import "../sass/Navbar.scss";
import CartWidget from "./CartWidget";

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand">Second hand</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <CartWidget/>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
