import React from 'react'
import Card from './Card'

export default function App() {
  const data = [
  {
    h1: "Sachin",
    p: "Frontend Developer",
    img_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500"
  },
  {
    h1: "Rahul",
    p: "Backend Developer",
    img_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
  },
  {
    h1: "Amit",
    p: "Full Stack Developer",
    img_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500"
  },
  {
    h1: "Rohit",
    p: "UI/UX Designer",
    img_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500"
  },
  {
    h1: "Vikas",
    p: "React Developer",
    img_url: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=500"
  },
  {
    h1: "Arjun",
    p: "JavaScript Developer",
    img_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500"
  },
  {
    h1: "Karan",
    p: "Web Designer",
    img_url: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=500"
  },
  {
    h1: "Ankit",
    p: "Software Engineer",
    img_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
  },
  {
    h1: "Varun",
    p: "Frontend Engineer",
    img_url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500"
  },
  {
    h1: "Aditya",
    p: "React Engineer",
    img_url: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500"
  },
  {
    h1: "Nikhil",
    p: "Node.js Developer",
    img_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500"
  },
  {
    h1: "Manish",
    p: "MERN Stack Developer",
    img_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500"
  },
  {
    h1: "Ravi",
    p: "Web Developer",
    img_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500"
  },
  {
    h1: "Suresh",
    p: "Software Developer",
    img_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500"
  },
  {
    h1: "Deepak",
    p: "Full Stack Engineer",
    img_url: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=500"
  }
];
  return (
    <div>
      {
        data.map((elem, index) => <Card
         key={index}
          img_url={elem.img_url}
          heading={elem.h1}
          description={elem.p}
        />)
      }
    </div>
  )
}
