import React from 'react'
import "./About.css";
import burger01 from "../../Assets/Img/burger01.png";

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
                <div>
                  <p>Fresh Buns</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                </div>
                <div>
                  <p>Lettuce Leaf</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                </div>
                <div>
                  <p>Organic Onions</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                </div>
              </div>
              <div className="about-item">
                <img src={burger01} alt="wer" />
              </div>
              <div className="about-item">
                <div>
                  <p>Fresh Buns</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                </div>
                <div>
                  <p>Lettuce Leaf</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                </div>
                <div>
                  <p>Organic Onions</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
