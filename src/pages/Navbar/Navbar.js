import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../photos/logo/favicon.ico";
import "./Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase_init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg position-fixed top-0 bg-transparent nav-container">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img style={{ height: "70px" }} src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {user && (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active fw-bold"
                      aria-current="page"
                      to="/manageInventories"
                    >
                      Manage Items
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link active fw-bold"
                      aria-current="page"
                      to="/addNewItem"
                    >
                      Add Items
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active fw-bold"
                      aria-current="page"
                      to="/myItem"
                    >
                      My items
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link
                  className="nav-link active fw-bold"
                  aria-current="page"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
            <div className="d-flex" role="search">
              {user ? (
                <button onClick={handleSignOut} className="btn btn-danger">
                  Log Out
                </button>
              ) : (
                <Link
                  className="nav-link active fw-bold"
                  aria-current="page"
                  to="/login"
                >
                  <button className="btn btn-primary">Log In</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
