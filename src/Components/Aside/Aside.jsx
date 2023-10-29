import React from 'react'
import "./Aside.css";


export default function Aside() {
  return (
    <>
        <div className="aside">
            <div className="aside-box">
                <div className="aside-right">
                            <div className="aside-sale-box1">
                                <p className="aside-sale-box-num">only</p>
                                <p className="aside-sale-box-text">17%</p>
                            </div>
                    <div className='aside-right-title-box'>
                        <h3 className='aside-right-subtitle'>Deal Of The Day</h3>
                        <p className='aside-right-title'>Quinoa & Black Bean Burger</p>
                        <a className='aside-box-link' href="#">ORDER NOW</a>
                    </div>
                </div>

                <div className="aside-left">
                    <div className='aside-left-top'>
                            <div className="aside-sale-box1 aside-sale-box2">
                                <p className="aside-sale-box-num">only</p>
                                <p className="aside-sale-box-text aside-sale-box-text2">17%</p>
                            </div>
                        <div className='aside-right-title-box aside-right-title-box2'>
                            <h3 className='aside-right-subtitle'>Deal Of The Day</h3>
                            <p className='aside-right-title aside-right-title2'>Quinoa & Black Bean Burger</p>
                            <a className='aside-box-link' href="#">ORDER NOW</a>
                        </div>
                    </div>
                    <div className='aside-left-bottom'>
                            <div className="aside-sale-box1 aside-sale-box2 aside-sale-box3">
                                <p className="aside-sale-box-num">only</p>
                                <p className="aside-sale-box-text aside-sale-box-text2">17%</p>
                            </div>
                        <div className='aside-right-title-box aside-right-title-box2'>
                            <h3 className='aside-right-subtitle'>Deal Of The Day</h3>
                            <p className='aside-right-title aside-right-title2'>Quinoa & Black Bean Burger</p>
                            <a className='aside-box-link' href="#">ORDER NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
