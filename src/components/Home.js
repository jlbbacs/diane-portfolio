import React from 'react'
import './css/home.css'
import diane1 from '../images/diane1.jpg'

const Home = () => {
  return (
    <div class="container">
     <div class="card mb-3" id="home-card" style={{maxwidth: 540}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={diane1} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title"> My name</h1>
        <h1 class="card-title">is Diane</h1>
        <p class="card-text">As a psychology graduate, you have developed a strong understanding of the human mind and behavior through rigorous coursework and hands-on experience. You are equipped with skills that allow you to analyze, interpret and communicate complex data and findings related to human behavior.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home
