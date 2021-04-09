import React from 'react'
import Link from "next/link";

export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">NEXT JS APP</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" >
                <div className="nav-link">Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <div className="nav-link">About</div>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
