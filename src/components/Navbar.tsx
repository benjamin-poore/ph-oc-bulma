import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHamburger = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <nav
        className="navbar is-black has-background-black is-relative"
        role="navigation"
        aria-label="main navigation"
      >
        <div className=" ">
          <div
            id="hamburger-icon"
            onClick={onClickHamburger}
            title="Menu"
            className={`navbar-burger mb-4 ml-auto ${isOpen ? "active" : ""}`}
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </div>
          <Link className="navbar-item has-background-black" href="/">
            <Image src="/logo.png" alt="logo" height={"106"} width={"339"} />
          </Link>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isOpen ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <Link className="navbar-item" href="/">
              Home
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link" href="#">
                About
              </Link>

              <div className="navbar-dropdown is-dark" style={{ top: "70%" }}>
                <Link className="navbar-item" href="/beliefs">
                  What We Believe
                </Link>
                <Link className="navbar-item" href="vision">
                  Vision
                </Link>
                <Link className="navbar-item" href="staff">
                  Staff
                </Link>
                <Link className="navbar-item" href="/#location">
                  Location &amp; Time
                </Link>
                <hr className="navbar-divider"></hr>
                <Link className="navbar-item" href="contact">
                  Contact Us
                </Link>
              </div>
            </div>
            <Link className="navbar-item" href="events">
              Events
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
