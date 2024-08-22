// eslint-disable-next-line react/prop-types
const Navbar = ({ home, features, cards, test, contact }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand logo-heading" href={`#${home}`}>
          Jillion Technologies
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-auto" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active text-primary"
                aria-current="page"
                href={`#${home}`}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href={`#${features}`}>
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href={`#${cards}`}>
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href={`#${test}`}>
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href={`#${contact}`}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
