import React from 'react'
import { Link } from "react-router-dom";
import PizzaBackground from "../assets/pizzabackground.png";
import "../styles/Home.css";

export const Home = () => {
  return (
    <div className='home' style={{backgroundImage: `url(${PizzaBackground})`}}>
      <div className='headerContainer' >
        <h1> Pizza Miracle</h1>
        <p> PIZZA TO FEED YOUR FAMILY</p>
        <Link to="/menu">
          <button> ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}
