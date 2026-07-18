import Card from "./components/card.jsx";
function App() {
 const collection = [
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    h2: "Chicken Biryani",
    p: "Delicious Hyderabadi chicken biryani with aromatic spices.",
    button: "Order Now"
  },
  {
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    h2: "Cheese Pizza",
    p: "Hot and cheesy pizza topped with fresh mozzarella.",
    button: "Buy Now"
  },
  {
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    h2: "Classic Burger",
    p: "Juicy beef burger with lettuce, tomato, and cheese.",
    button: "Add to Cart"
  },
  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    h2: "French Fries",
    p: "Crispy golden fries served with tomato ketchup.",
    button: "Order"
  },
  {
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    h2: "Pasta",
    p: "Creamy white sauce pasta with herbs and vegetables.",
    button: "Buy"
  },
  {
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    h2: "Veg Salad",
    p: "Healthy fresh vegetable salad with olive oil dressing.",
    button: "Healthy Choice"
  },
  {
    img: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9",
    h2: "Sandwich",
    p: "Grilled sandwich stuffed with fresh veggies and cheese.",
    button: "Add"
  },
  {
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    h2: "Cold Coffee",
    p: "Refreshing cold coffee topped with whipped cream.",
    button: "Drink Now"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?q=80&w=982&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    h2: "Chocolate Cake",
    p: "Soft and rich chocolate cake for dessert lovers.",
    button: "Order Sweet"
  },
  {
    img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
    h2: "Ice Cream",
    p: "Creamy vanilla ice cream with chocolate syrup.",
    button: "Enjoy"
  }
 ];
  
  
  
  return (
    <div className="container">
       {collection.map((elem,index) => (
      <Card
       key={index}
        img={elem.img}
        h2={elem.h2}
        text={elem.p}
        button={elem.button}
      />
    ))}
     
      
     
  

  </div>
  )
}
export default App;