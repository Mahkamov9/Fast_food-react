import React from 'react'
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="about-box">
            <div className='about-text-box'>
              <h3>INGREDIENTS</h3>
              <p>Baked with Natural <br /> Ingredients</p>
            </div>
            <div className='about-list'>
              <div className="about-item">
                <p>Fresh Buns</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
              </div>
              <div className="about-item">
                <img src="" alt="" />
              </div>
              <div className="about-item"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
