import "./navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar-body">
      <nav className="NavbarItems">
        <div>
          <h1>OnlineStore</h1>
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>ABOUTUS</a>
            </li>
            <li>
              <a>CONTACTUS</a>
            </li>

            <button className="btn">SIGNUP</button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
