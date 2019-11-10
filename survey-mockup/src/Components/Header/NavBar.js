import React from 'react';

const navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
        <a className="navbar-brand" href="test">&#129409; Guerilla SCM</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="test">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="test">Survey</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="test">Analytics</a>
            </li>
          </ul>
          <li className="form-inline my-2 my-lg-0 navbar-nav">
            <a className="nav-link" href="test">Account</a>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default navbar;