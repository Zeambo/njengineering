/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container, NavItem, NavLink } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer section-dark footer-black ">
      <Container>
        <Row>
          <NavItem>
            <NavLink
              data-placement="bottom"
              href="#pablo"
              target="_blank"
              title="Follow us on Twitter"
            >
              <i className="fa fa-twitter" />
              <p className="d-lg-none">Twitter</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              data-placement="bottom"
              href="#pablo"
              target="_blank"
              title="Like us on Facebook"
            >
              <i className="fa fa-facebook-square" />
              <p className="d-lg-none">Facebook</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              data-placement="bottom"
              href="#pablo"
              target="_blank"
              title="Follow us on Instagram"
            >
              <i className="fa fa-instagram" />
              <p className="d-lg-none">Instagram</p>
            </NavLink>
          </NavItem>

          {/* <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                >
                  Zeam Bo
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com/?ref=pkr-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav> */}
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by zeam bo
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
