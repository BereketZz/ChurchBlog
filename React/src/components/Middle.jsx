import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './comp.css'
import Henok from '../imgs/temket.png'
import Aba from '../imgs/church3.webp'
import Daniel from '../imgs/daniel.jfif'
import Books from '../imgs/books.png'
import Mk from '../imgs/back.png'
const Middle = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
        <div className='R'>
    <h6 className='recent' >የ ሰሞኑን <span >ጦማሮች</span> </h6>
    <div></div>
    </div>
   
    <div class="container">
  <div class="row">
   
    <Slider {...settings}>
    <div class="card" >
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img src={Mk} class="img-fluid"/>
    <a href="#!">
      <div class="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.15)"}}></div>
    </a>
  </div>
  <div class="card-body">
    <h6 class="card-title">ክርስቶስ እና ኒቆዲሞስ</h6>
    <p class="card-text">.</p>
    <a href="#!" class="btn btn-primary">ተጨማሪ ያንብቡ</a>
  </div>
</div>
<div class="card" >
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img src={Daniel} class="img-fluid"/>
    <a href="#!">
      <div class="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.15)"}}></div>
    </a>
  </div>
  <div class="card-body">
    <h6 class="card-title">ክርስቶስ እና ኒቆዲሞስ</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#!" class="btn btn-primary">ተጨማሪ ያንብቡ</a>
  </div>
</div>
<div class="card" >
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img src={Books} class="img-fluid"/>
    <a href="#!">
      <div class="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.15)"}}></div>
    </a>
  </div>
  <div class="card-body">
    <h6 class="card-title">ክርስቶስ እና ኒቆዲሞስ</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#!" class="btn btn-primary">ተጨማሪ ያንብቡ</a>
  </div>
</div>
<div class="card" >
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img src={Daniel} class="img-fluid"/>
    <a href="#!">
      <div class="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.15)"}}></div>
    </a>
  </div>
  <div class="card-body">
    <h6 class="card-title">ክርስቶስ እና ኒቆዲሞስ</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#!" class="btn btn-primary">ተጨማሪ ያንብቡ</a>
  </div>
</div>
 
    
    <div class="card  " >
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img src={Henok} class="img-fluid"/>
    <a href="#!">
      <div class="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.15)"}}></div>
    </a>
  </div>
  <div class="card-body">
    <h6 class="card-title">ወደ አባቴ ቤት</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#!" class="btn btn-primary">ተጨማሪ ያንብቡ</a>
  </div>
</div>

<div class="card " >
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img src={Aba} class="img-fluid"/>
    <a href="#!">
      <div class="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.15)"}}></div>
    </a>
  </div>
  <div class="card-body">
    <h6 class="card-title">ክርስቶስ እና ኒቆዲሞስ</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#!" class="btn btn-primary">ተጨማሪ ያንብቡ</a>
  </div>
</div>
   </Slider>
    </div>

    </div>
      
    </div>
  )
}

export default Middle
