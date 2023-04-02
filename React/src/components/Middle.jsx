import React from 'react'
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import{useLocation} from 'react-router-dom'
import axios from 'axios'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './comp.css'
import Henok from '../imgs/temket.png'
import Aba from '../imgs/church3.webp'
import Daniel from '../imgs/daniel.jfif'
import Books from '../imgs/books.png'
import Mk from '../imgs/back.png'
const Middle = () => {
  const[posts,setPosts]=useState([])
  const[tomar, setTomar]= useState('')
  const cat = useLocation().search

  useEffect(()=>{
    const fetchData= async()=>{
      if(cat=='')setTomar('የ ሰሞኑን')
      if(cat=='?cat=art') setTomar('የ ሥዕል')
      if(cat=='?cat=text') setTomar('የ ሥነ ጽሑፍ')
      if(cat=='?cat=spritual') setTomar('የ መንፈሳዊ ትምህርት')
      if(cat=='?cat=church') setTomar('የ ቤተ ክርስቲያን')
      if(cat=='?cat=bible') setTomar('የ መጽሐፍ ቅዱስ')
      try{
        const res= await axios.get(`http://localhost:3000/church/api/posts${cat}`)
        console.log(res)
        setPosts(res.data)
    
       
      }catch(error){
        console.log(error)
      }
    }
    
    fetchData()
  },[cat])
 
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
    <h6 className='recent' >{tomar} <span >ጦማሮች</span> </h6>
    <div></div>
    </div>
   
    <div class="container">
  <div class="row">
   
    <Slider {...settings}>
      {posts.map(post=>{
        return <div class="card"  key={post.id}>
        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src={post.img} class="img-fluid"/>
          <a href="#!">
            <div class="mask" style={{backgroundColor:"rgba(251, 251, 251, 0.15)"}}></div>
          </a>
        </div>
        <div class="card-body">
          <h6 class="card-title">{post.title}</h6>
          <p class="card-text">{post.desc.split(' ').slice(0,10).join(' ')}. . .</p>
          <a href="#!" class="btn btn-primary">ተጨማሪ ያንብቡ</a>
        </div>
      </div>
      })}
    

   </Slider>
    </div>

    </div>
      
    </div>
  )
}

export default Middle
