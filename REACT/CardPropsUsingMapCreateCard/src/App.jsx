import Card from "./Card";

function App() {
  const collection = [
  {
    img: "https://picsum.photos/200?random=1",
    h1: "Mountain View",
    p: "Enjoy the beautiful mountain scenery.",
    button: "Explore"
  },
  {
    img: "https://picsum.photos/200?random=2",
    h1: "Beach Paradise",
    p: "Relax by the sunny beach with friends.",
    button: "Visit"
  },
  {
    img: "https://picsum.photos/200?random=3",
    h1: "City Lights",
    p: "Experience the vibrant nightlife.",
    button: "Discover"
  },
  {
    img: "https://picsum.photos/200?random=4",
    h1: "Forest Adventure",
    p: "Walk through the peaceful green forest.",
    button: "Start"
  },
  {
    img: "https://picsum.photos/200?random=5",
    h1: "Desert Safari",
    p: "Ride across the golden sand dunes.",
    button: "Book Now"
  },
  {
    img: "https://picsum.photos/200?random=6",
    h1: "Snow Escape",
    p: "Enjoy skiing and snowy landscapes.",
    button: "Join"
  },
  {
    img: "https://picsum.photos/200?random=7",
    h1: "Lake Retreat",
    p: "Spend a peaceful evening by the lake.",
    button: "See More"
  },
  {
    img: "https://picsum.photos/200?random=8",
    h1: "Camping Fun",
    p: "Sleep under the stars with a campfire.",
    button: "Reserve"
  },
  {
    img: "https://picsum.photos/200?random=9",
    h1: "Island Tour",
    p: "Explore tropical islands and blue waters.",
    button: "Travel"
  },
  {
    img: "https://picsum.photos/200?random=10",
    h1: "Nature Walk",
    p: "Reconnect with nature on a relaxing walk.",
    button: "Learn More"
  }
];
  return (
 
    <div className="container">
      
      {
        collection.map((elem, idx) => (
          <Card
            key={idx}
            img={elem.img}
            heading={elem.h1}
            p={elem.p}
            btn={elem.button}
          />
        ))
      }

    </div>
  )
}
export default App;
