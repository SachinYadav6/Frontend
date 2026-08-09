import React from 'react'
import Card from './Card'

export default function App() {
    const collection = [
  {
    id: 1,
    title: "Cat",
    description: "A cute and playful cat.",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
  },
  {
    id: 2,
    title: "Dog",
    description: "A friendly and loyal dog.",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d"
  },
  {
    id: 3,
    title: "Rabbit",
    description: "A soft and adorable rabbit.",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308"
  },
  {
    id: 4,
    title: "Lion",
    description: "The powerful king of the jungle.",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d"
  },
  {
    id: 5,
    title: "Tiger",
    description: "A beautiful and strong wild cat.",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5"
  },
  {
    id: 6,
    title: "Elephant",
    description: "A huge and intelligent animal.",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46"
  },
  {
    id: 7,
    title: "Horse",
    description: "A strong and graceful animal.",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a"
  },
  {
    id: 8,
    title: "Panda",
    description: "A cute black and white bear.",
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7"
  },
  {
    id: 9,
    title: "Fox",
    description: "A clever and beautiful wild animal.",
    image: "https://images.unsplash.com/photo-1516939884455-1445c8652f83"
  },
  {
    id: 10,
    title: "Deer",
    description: "A calm and elegant forest animal.",
    image: "https://images.unsplash.com/photo-1484406566174-9da000fda645"
  },
  {
    id: 11,
    title: "Wolf",
    description: "A powerful and intelligent wild animal.",
    image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352"
  },
  {
    id: 12,
    title: "Bear",
    description: "A large and powerful forest animal.",
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819"
  },
  {
    id: 13,
    title: "Penguin",
    description: "A cute bird that loves cold places.",
    image: "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7"
  },
  {
    id: 14,
    title: "Giraffe",
    description: "The tallest animal in the world.",
    image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50"
  },
  {
    id: 15,
    title: "Zebra",
    description: "A unique animal with black and white stripes.",
    image: "https://images.unsplash.com/photo-1526095179574-86e545346ae6"
  }
];
  return (
    <div className="container">
      {
        collection.map((elem) => (
          <Card
            key={elem.id}
            img={elem.image}
            p={elem.description}
            header={elem.title}
          
          
          />
        ))
      }
   </div>
  )
}
