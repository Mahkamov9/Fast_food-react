import React from 'react';

const links = [
  { name: 'google', link: 'https://www.google.com/' },
  { name: 'yandex', link: 'https://ya.ru/' },
  { name: 'instagram', link: 'https://www.instagram.com/' },
  { name: 'vk', link: 'https://www.vk.com/' },
  { name: 'twitter', link: 'https://twitter.com/' },
  { name: 'twitter1', link: 'https://twitter1.com/' },
];

function LinkList() {
  const renderLinks = links.map((link, index) => (
    <div key={index}>
      <a href={link.link} target="_blank" rel="noopener noreferrer">
        {link.name}
      </a>
    </div>
  ));

  return (
    <div>
      {renderLinks}
    </div>
  );
}

export default LinkList;
