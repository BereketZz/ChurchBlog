import React from 'react'
import * as mdb from 'mdb-ui-kit';
import 'mdb-ui-kit/css/mdb.min.css';
import './comp.css'
import Landing from './Landing';
import Middle from './Middle';
import Footer from './Footer';
import{Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='head-div'>
<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div class="container-fluid">

    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarCenteredExample"
      aria-controls="navbarCenteredExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

 
    <div
      class="collapse navbar-collapse justify-content-center"
      id="navbarCenteredExample"
    >

      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">ዋናዉ ገጽ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">አድራሻ ገጽ</a>
        </li>
 
        <li class="nav-item dropdown">
          <a
            class="nav-link active dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
           የጦማር መደብ
          </a>
       
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
          <Link class="dropdown-item"   to="/?cat=art">ሥዕል</Link>
            
          </li>
          <li>
          <Link class="dropdown-item"   to="/?cat=text">ሥነ ጽሑፍ</Link>
           
          </li>
          <li>
          <Link class="dropdown-item"   to="/?cat=spritual">መንፈሳዊ ትምህርት</Link>

          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
          <Link class="dropdown-item"   to="/?cat=church">ቤተ ክርስቲያን</Link>
          </li>
          <li>
          <Link class="dropdown-item"   to="/?cat=bible">መጽሐፍ ቅዱስ</Link>

            
          </li>
          </ul>
        </li>
       
      </ul>

    </div>
    <li class="nav-item" style={{listStyle:"none" , marginRight:"50px"}}>
          <a class="nav-link "><button type="button" style={{backgroundColor:"goldenrod",color:'white'}} class="btn  btn-rounded">የመግቢያ ገጽ</button></a>
        </li>
  </div>
  
</nav>
 
 <br/>

 {/* <Landing/> 
 <br/>
 <Middle/>
 <br/>
 <Footer/> */}

    </div>
  )
}

export default Header

