import React from 'react'

import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    
    <nav className={`navbar navbar-expand-sm  bg-${props.mode==='light'?'success':'dark'} navbar-${props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to ="/"><h3><b>{props.title}</b></h3></Link> */}
    <a className="navbar-brand" href ="#"><h3><b>{props.title}</b></h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to ="/">Home</Link> */}
          <a className="nav-link active" aria-current="page" herf ="#">Home</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to ="/About">About Us</Link> */}
        </li>
        
      </ul>
      
      
      <div className="form-check form-switch">
  <input onClick={props.toogleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label className= "form-check-label text-light" htmlFor="flexSwitchCheckChecked">Dark-Mode</label>
</div>
    </div>
  </div>
  
</nav>

</>
  );
}
Navbar.PropType = {
  title: "string"
}

Navbar.defaultProps= {
    title: 'Title set here'
}