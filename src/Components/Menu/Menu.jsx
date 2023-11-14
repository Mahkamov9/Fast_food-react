import React from 'react'
import "./Menu.css";
import { useState } from 'react';

export default function Menu() {

  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");

  let bot = {
    TOKEN: "6304809622:AAG2E0OCpDxx_AjE-5LeA68C_VaOxHIgRHM",
    chatID: "-1002051945491",
    message: `
      Assalomu alaykum sizga yangi buyurtma xabari!%0A
      %0AIsmi 👤: ${nameValue};
      %0ATelefon raqami ☎: ${numberValue};`,
  };

  function sendMassages(e) {
    e.preventDefault();

    fetch(
      `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
      {
        method: "GET",
      }
    ).then(
      (success) => {
        if (success) {
          console.log("succes");
        }
      },
      (error) => {
        console.log(error);
      }
    );
    setNameValue("");
    setNumberValue("");
  }


  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact_flex">
              <div className="contact_left">
                <h2 className="contact_title">Malumotingizni qoldiring</h2>
                <form className="contact_form" onSubmit={(e) => sendMassages(e)}>
                  <input
                    required
                    value={nameValue}
                    className="contact_input"
                    type="text"
                    placeholder="Ism"
                    onChange={(e) => setNameValue(e.target.value)}
                  />
                  <input
                    required
                    value={numberValue}
                    className="contact_input"
                    type="text"
                    placeholder="+998"
                    onChange={(e) => setNumberValue(e.target.value)}
                  />
                  <button className="contact_send_btn">Yuborish</button>
                </form>
              </div>
            <div className="contact_right">
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              <h1>Ssss</h1>
              {/* <img className="contact_img" src={CImg} alt="pic" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
