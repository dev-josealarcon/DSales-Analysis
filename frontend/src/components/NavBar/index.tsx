import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center px-md-4 mb-3 bg-light border-bottom shadow-sm">
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">
          <Link to="https://dev-josealarcon.github.io/site/#projects/4" className="mark1">
            <div className="mark" >
              <div className="logo">
                <div></div>
                <div></div>
                <div></div>
              </div>

              <span>José Alarcón</span> <span className="lead">| Main page</span>
            </div>
          </Link>
        </nav>
      </div>
    </div>

  );
}

export default NavBar;
