import './App.css';
// import LinkList from './Components/LinkLists';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage/>
      {/* <LinkList/> */}
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>
      <h1>Salom</h1>


    </div>
  );
}

export default App;


// import React, { useEffect, useState } from 'react';

// const links = [
//   { name: 'google', link: 'https://www.google.com/' },
//   { name: 'yandex', link: 'https://ya.ru/' },
//   { name: 'instagram', link: 'https://www.instagram.com/' },
//   { name: 'vk', link: 'https://www.vk.com/' },
//   { name: 'twitter', link: 'https://twitter.com/' },
//   { name: 'twitter', link: 'https://twitter1.com/' }
// ];

// function App() {
//   const [responses, setResponses] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       const responses = {};

//       for (const link of links) {
//         try {
//           const response = await fetch(`http://localhost:3001/fetchData?url=${link.link}`);
//           if (response.ok) {
//             const data = await response.text();
//             responses[link.name] = data;
//           } else {
//             responses[link.name] = `Failed to fetch: ${response.status}`;
//           }
//         } catch (error) {
//           responses[link.name] = `Error: ${error.message}`;
//         }
//       }

//       setResponses(responses);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Website Responses:</h1>
//       <ul>
//         {Object.keys(responses).map((siteName, index) => (
//           <li key={index}>
//             {siteName}: {responses[siteName]}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
