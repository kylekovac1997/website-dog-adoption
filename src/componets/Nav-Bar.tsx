function NavBar() {
  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h1 id="NavBarH1">PETS R US</h1>
          </a>
          <div className="navbar-nav" id="ahrefLinks">
            <a className="nav-link" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/Donations">
              Donations
            </a>
            <a className="nav-link" href="/Adoptions">
              Adoptions
            </a>
          </div>
        </div>
      </nav>
    </nav>
  );
}

export default NavBar;
