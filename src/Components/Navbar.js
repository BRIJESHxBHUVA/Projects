import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {

        constructor(){
            super();
            this.state = {
                bgcolor: 'white'
            }
            
        }
        changeColor = (e)=> {
            this.setState({bgcolor: e.target.value});
            document.body.style.backgroundColor = this.state.bgcolor;
            console.log(e.target.value)
        }
        
  render() {
  
    return (
      <div className='hdr'>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">TENET <span>News</span></a>
    <button className="navbar-toggler" style={{background: 'lightgreen'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <span style={{marginLeft: '50px'}}></span>


        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/" title='Go to Home Page'>Home</Link>
        </li>

        <li className="nav-item"><Link className="nav-link text-light" to="/business" title='Business Top News'>Business</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to="/entertainment" title='Entertainment Top News'>Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to="/general" title='General Top News'>General</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to="/health" title='Health Top News'>Health</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to="/science" title='Science Top News'>Science</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to="/sports" title='Sports Top News'>Sports</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to="/technology" title='Technology Top News'>Technology</Link></li>



        <li className="nav-item dropdown" title='Select Country'>
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Country
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/USA">USA</Link></li>
            <li><Link className="dropdown-item" to="/JAPAN">Japan</Link></li>
            <li><Link className="dropdown-item" to="/AUSTRALIA">Australia</Link></li>
            <li><Link className="dropdown-item" to="/CANADA">Canada</Link></li>
            <li><Link className="dropdown-item" to="/RUSSIA">Russia</Link></li>
            <li><hr className="dropdown-divider"/></li>
    
          </ul>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        
        <input type="color" className='mx-3 mt-1' value={this.state.bgcolor} onChange={this.changeColor} title='Change Background-Color'/>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success text-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
