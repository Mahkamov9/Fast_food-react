import React, { useEffect } from 'react'
import "./Navbar.css";
import axios from 'axios';


export default function Navbar() {

    useEffect(() =>{
        axios.get('https://reqres.in/api/users?page=2')
        .then(res => console.log(res))
        // .catch(err => console.log(err));
    }, [])


    return(
      <>
        <h2>Axios Library</h2>

      </>
  )
}
