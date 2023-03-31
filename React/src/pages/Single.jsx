import React from 'react'
import{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Book from '../imgs/books.png'
import './pages.css'


const Single = () => {

  return (
    <div className='single'>
      <br/><br/>
      <div className='Contents'>
        <img src={Book} /> <br/>
        <div className='media-wrapr'>
        <p className='details'>Beki posted 2 days ago</p>
        <div className='icons'>
        <i class="fab fa-facebook-f fa-2x" style={{color: "#3b5998"}}></i>
        <i class="fab fa-twitter fa-2x" style={{color: "#55acee"}}></i>
        <i class="fab fa-instagram fa-2x" style={{color: "#ac2bac"}}></i>
        
        <i class="fab fa-youtube fa-2x" style={{color: "#ed302f"}}></i>
        
        </div>
        </div>
        
       <br/><br/>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, deserunt, provident ex culpa error quasi ea at fuga quisquam enim ducimus qui nulla expedita dignissimos minus atque quo dolores, beatae aliquam voluptas veniam unde iusto nostrum voluptatem? Quas consequatur, quibusdam doloribus aut earum deserunt reiciendis quasi! Ea quam, placeat iure nulla ipsa, aspernatur ullam quia voluptatem doloremque rerum vitae adipisci, culpa impedit. Molestiae eius earum velit soluta alias reiciendis hic qui quaerat ipsam illum, doloremque cumque corrupti consectetur quod maiores eum ex eos ut est facere debitis dolorem, necessitatibus ratione? Nostrum earum dolores maxime laboriosam quisquam voluptates et! Possimus, inventore.
            <br/><br/><br/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem tenetur aut sapiente ratione alias, magni maxime, qui voluptate veniam aliquid culpa. Perspiciatis commodi doloremque sed adipisci. Voluptatem suscipit tempora, magni animi porro corrupti qui, ratione perferendis error eum sint. Vero optio amet in nostrum dignissimos? Quod, ex. Quas, harum accusantium. Ea soluta deserunt cum itaque, possimus in fugiat ad quibusdam iste quasi ducimus porro totam et, recusandae sint qui enim. Quod ut distinctio vitae architecto, inventore qui labore. Eveniet voluptas accusantium alias consectetur at? Nam dolor, culpa saepe facilis itaque qui asperiores fugit quis quos pariatur architecto, quibusdam veniam odit!
           </p>
      

      </div>

  
    </div>
  )
}

export default Single
