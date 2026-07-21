import Card from "./card.jsx";
import "./main2.css";
function Main2() {
  const collectionItem = [
  {
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    heading: "Burger",
    paragraph: "Delicious cheese burger with fresh vegetables.",
    button: "View Recipe",
  },
  {
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    heading: "Pizza",
    paragraph: "Hot and crispy pizza loaded with cheese.",
    button: "Order Now",
  },
  {
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    heading: "Salad",
    paragraph: "Healthy green salad full of vitamins.",
    button: "Read More",
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    heading: "Pasta",
    paragraph: "Creamy white sauce pasta with herbs.",
    button: "Explore",
  },
  {
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
    heading: "Coffee",
    paragraph: "Freshly brewed hot coffee for your day.",
    button: "Buy Now",
  },
  {
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    heading: "Sandwich",
    paragraph: "Grilled sandwich with fresh fillings.",
    button: "View Details",
  },
  {
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    heading: "Juice",
    paragraph: "Natural fruit juice without preservatives.",
    button: "Drink Now",
  },
  {
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
    heading: "Breakfast",
    paragraph: "Healthy breakfast to start your morning.",
    button: "See Menu",
  },
  {
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    heading: "Pancakes",
    paragraph: "Soft pancakes served with maple syrup.",
    button: "Try Now",
  },
  {
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    heading: "French Fries",
    paragraph: "Golden crispy fries with tomato ketchup.",
    button: "Order",
  },
  {
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
    heading: "Ice Cream",
    paragraph: "Cold and creamy chocolate ice cream.",
    button: "Enjoy",
  },
  {
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    heading: "Sushi",
    paragraph: "Authentic Japanese sushi with fresh ingredients.",
    button: "Learn More",
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    heading: "Noodles",
    paragraph: "Spicy noodles tossed with vegetables.",
    button: "View Dish",
  },
  {
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
    heading: "Cake",
    paragraph: "Soft chocolate cake with cream topping.",
    button: "Celebrate",
  },
  {
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    heading: "Fruits",
    paragraph: "Fresh seasonal fruits rich in nutrition.",
    button: "Shop Now",
  },
  ];
  return (
    <div className="main2">
      {collectionItem.map((ele, index) => {
  return (
    <Card
      key={index}
      heading={ele.heading}
      img={ele.image}
      p={ele.paragraph}
      button={ele.button}
    />
  );
})}
    </div>
    
     
    
  )



}
export default Main2;