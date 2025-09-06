function Navbar() {
  function scroll(element) {
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="navbar liquid">
      <h1 className="logo">Shitanshu Singh</h1>
      <ul className="menu">
        <li>
          <button
            className="butt1 liquid"
            onClick={() => scroll(document.getElementsByClassName("titlebox")[0])}
          >
            Profiles
          </button>
        </li>
        <li>
          <button
            className="butt1 liquid"
            onClick={() => scroll(document.getElementsByClassName("normal")[0])}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            className="butt1 liquid"
            onClick={() => scroll(document.getElementsByClassName("Aboutdiv")[0])}
          >
            About
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
