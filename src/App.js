import React from 'react'
import "./App.css"
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css"


export default function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-bg navbar-dark sticky-top top-0">
        <div class="container text-center">
          <a class="navbar-brand" href="#">Team Snap</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link active" >
                  Products
                  <i class="fa-solid fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu display">
                  <div className="dropdown-items text-start" style={{ minWidth: "250px" }}>
                    <a className='nav-link ms-3' href="#">Clubs & Leagues</a>
                    <li><a href="#" className='nav-links'>For clubs & associations with multiple teams</a></li>
                    <li><a href="#" className='nav-links'>Sports</a></li>
                    <li><a href="#" className='nav-links'>Features</a></li>
                    <li><a href="#" className='nav-links'>Get a demo</a></li>
                  </div>
                  <div className="dropdown-items text-start" style={{ minWidth: "250px" }}>
                    <a className='nav-link ms-3' href="#">Teams</a>
                    <li><a href="#" className='nav-links'>The easiest way to manage a team</a></li>
                    <li><a href="#" className='nav-links'>Sports</a></li>
                  </div>
                  <div className="dropdown-items text-start" style={{ minWidth: "250px" }}>
                    <a className='nav-link ms-3' href="#">Tournaments</a>
                    <li><a href="#" className='nav-links'>Build and manage your events in a snap</a></li>
                    <li><a href="#" className='nav-links'>Scheduling</a></li>
                    <li><a href="#" className='nav-links'>Registration</a></li>
                  </div>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Pricing</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link active" >
                  Company
                  <i class="fa-solid fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <div className="dropdown-items w-100 text-start" style={{ minWidth: "250px" }}>
                    <a className='nav-links' href="#">About</a>
                    <a className='nav-links' href="#">For Brands</a>
                    <a className='nav-links' href="#">Career</a>
                  </div>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link active">
                  Resourses
                  <i class="fa-solid fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <div className="dropdown-items w-100 text-start" style={{ minWidth: "250px" }}>
                    <a className='nav-links' href="#">Blog</a>
                    <a className='nav-links' href="#">Community Impact</a>
                    <a className='nav-links' href="#">Off-Season</a>
                    <a className='nav-links' href="#">Tips for Student Athletes</a>
                    <a className='nav-links' href="#">Coaches Corner</a>
                    <a className='nav-links' href="#">Return to play</a>
                    <a className='nav-links' href="#">Clubs & leagues Resources</a>
                    <a className='nav-links' href="#">Help center</a>
                    <a className='nav-links' href="#">Api Docs</a>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
