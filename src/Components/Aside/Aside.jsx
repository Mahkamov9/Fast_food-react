import React from 'react'
import "./Aside.css";


export default function Aside() {
  return (
    <>
        <div className="aside">
            <div className="aside-box">
                <div className="aside-right">
                            <div className="aside-sale-box1">
                                <p className="header-sale-box-num">only</p>
                                <p>17%</p>
                            </div>
                </div>

                <div className="aside-left">
                    <div className='aside-left-top'>1</div>
                    <div className='aside-left-bottom'>2</div>
                </div>
            </div>
        </div>
    </>
  )
}
