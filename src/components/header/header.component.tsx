import React from 'react';

function Header() {
  return (
    <header id="fh5co-header" role="banner">
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <a
              href="#"
              className="js-fh5co-nav-toggle fh5co-nav-toggle"
              data-toggle="collapse"
              data-target="#fh5co-navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <i />
            </a>
            <a className="navbar-brand" href="index.html">HenriTec</a>
          </div>
          <div id="fh5co-navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="index.html">
                    <span>
                      Início
                      <span className="border" />
                    </span>
                </a>
              </li>
              <li>
                <a href="#fh5co-features">
                    <span>
                      A Empresa
                      <span className="border" />
                    </span>
                </a>
              </li>
              <li>
                <a href="#fh5co-products">
                    <span>
                      Serviços
                      <span className="border" />
                    </span>
                </a>
              </li>
              <li>
                <a href="#fh5co-footer">
                    <span>
                      Contato
                      <span className="border" />
                    </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
