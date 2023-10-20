import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import axios from 'axios';


export default function Navbar() {
//   GET


//     const [data, setData] = useState([])
//     useEffect(() =>{
//         axios.get('https://reqres.in/api/users?page=2')
//         .then(res => setData(res.data.data))
//         .catch(err => console.log(err));
//     }, [])


//     return(
//       <>
//         <h2>Axios Library</h2>
//         {
//             data.map((d, i) =>{
//                 return <p key={i}>{d.last_name}</p>
//             })
//         }
//         {
//             data.map((d, i) =>{
//                 return <h1 key={i}>{d.first_name}</h1>
//             })
//         }
//       </>
//   )




    // POST

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     axios.post('https://reqres.in/api/users', {
    //         "name": "Ahadjon",
    //         "job": "Developer"
    //     })
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    // }, [])


    // return (
    //     <>
    //         <h2>Axios Library</h2>
    //         {
    //             // data.map((d, i) => {
    //             //     return <p key={i}>{d.last_name}</p>
    //             // })
    //         }

    //     </>
    // )








    // UPDATE

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => setData(res.data.data))
            .catch(err => console.log(err));
    }, [])


    return (
        <>
            <h2>Axios Library</h2>
            {
                data.map((d, i) => {
                    return <p key={i}>{d.first_name}</p>

                })
            }
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>
            <h3>Local ctorage</h3>


        </>
    )























}
