import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../photos/logo/favicon.ico";
import "./Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase_init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth)
    navigate('/login')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light nav-container position-fixed top-0 bg-transparent">
      <div className="container-fluid">
        <Link className="navbar-brand nav-logo-link nav-logo" to="/">
          <img style={{ height: "70px" }} src={logo} alt="" />
        </Link>
        <div
          className="collapse navbar-collapse d-block"
          id="navbarSupportedContent"
        >
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
            <li className="nav-item">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn btn-danger"
                >
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
