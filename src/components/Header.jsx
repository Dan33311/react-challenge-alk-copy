import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="mw-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid d-flex flex-row">
          <p className="navbar-nav nav-link text-light text-uppercase">alk</p>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item pe-4"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item pe-4"><Link className="nav-link" to="/">Login</Link></li>
            <li className="nav-item pe-4"><Link to="/List" className="nav-link">List</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;