let collectiondata = [
    {
        img: "https://loremflickr.com/600/400/laptop",
        title: "Laptop",
        price: 50000,
        category: "Electronics",
        description: "High performance laptop for work and gaming"
    },
    {
        img: "https://loremflickr.com/600/400/smartphone",
        title: "Smartphone",
        price: 20000,
        category: "Electronics",
        description: "Latest smartphone with great camera"
    },
    {
        img: "https://loremflickr.com/600/400/running-shoes",
        title: "Running Shoes",
        price: 3000,
        category: "Fashion",
        description: "Comfortable shoes for daily wear"
    },
    {
        img: "https://loremflickr.com/600/400/smartwatch",
        title: "Smart Watch",
        price: 7000,
        category: "Electronics",
        description: "Track fitness and notifications"
    },
    {
        img: "https://loremflickr.com/600/400/tshirt",
        title: "T-Shirt",
        price: 800,
        category: "Fashion",
        description: "Cotton casual wear"
    },
    {
        img: "https://loremflickr.com/600/400/jeans",
        title: "Jeans",
        price: 1500,
        category: "Fashion",
        description: "Denim jeans for men"
    },
    {
        img: "https://loremflickr.com/600/400/novel,book",
        title: "Novel",
        price: 500,
        category: "Books",
        description: "Best-selling fiction novel"
    },
    {
        img: "https://loremflickr.com/600/400/backpack",
        title: "Backpack",
        price: 1200,
        category: "Accessories",
        description: "Durable travel backpack"
    },
    {
        img: "https://loremflickr.com/600/400/headphones",
        title: "Headphones",
        price: 2500,
        category: "Electronics",
        description: "Noise cancelling headphones"
    },
    {
        img: "https://loremflickr.com/600/400/tablet",
        title: "Tablet",
        price: 15000,
        category: "Electronics",
        description: "Portable tablet for study and work"
    },
    {
        img: "https://loremflickr.com/600/400/dslr-camera",
        title: "Camera",
        price: 35000,
        category: "Electronics",
        description: "DSLR camera for photography"
    },
    {
        img: "https://loremflickr.com/600/400/refrigerator",
        title: "Refrigerator",
        price: 40000,
        category: "Home Appliances",
        description: "Double door fridge"
    },
    {
        img: "https://loremflickr.com/600/400/microwave",
        title: "Microwave",
        price: 10000,
        category: "Home Appliances",
        description: "Convection microwave oven"
    },
    {
        img: "https://loremflickr.com/600/400/led-tv,television",
        title: "LED TV",
        price: 45000,
        category: "Electronics",
        description: "Smart LED television"
    },
    {
        img: "https://loremflickr.com/600/400/ceiling-fan",
        title: "Ceiling Fan",
        price: 2500,
        category: "Home Appliances",
        description: "Energy efficient ceiling fan"
    },
    {
        img: "https://loremflickr.com/600/400/table-lamp",
        title: "Table Lamp",
        price: 600,
        category: "Home Decor",
        description: "Stylish study lamp"
    },
    {
        img: "https://loremflickr.com/600/400/sofa",
        title: "Sofa",
        price: 30000,
        category: "Furniture",
        description: "Comfortable 3-seater sofa"
    },
    {
        img: "https://loremflickr.com/600/400/bed",
        title: "Bed",
        price: 25000,
        category: "Furniture",
        description: "King size wooden bed"
    },
    {
        img: "https://loremflickr.com/600/400/office-chair",
        title: "Chair",
        price: 1500,
        category: "Furniture",
        description: "Office chair with cushion"
    },
    {
        img: "https://loremflickr.com/600/400/dining-table",
        title: "Dining Table",
        price: 20000,
        category: "Furniture",
        description: "6-seater dining table"
    },
    {
        img: "https://loremflickr.com/600/400/toy-car",
        title: "Toy Car",
        price: 400,
        category: "Toys",
        description: "Remote control toy car"
    },
    {
        img: "https://loremflickr.com/600/400/doll",
        title: "Doll",
        price: 300,
        category: "Toys",
        description: "Cute Barbie doll"
    },
    {
        img: "https://loremflickr.com/600/400/lego",
        title: "Lego Set",
        price: 1500,
        category: "Toys",
        description: "Creative building blocks"
    },
    {
        img: "https://loremflickr.com/600/400/football",
        title: "Football",
        price: 600,
        category: "Sports",
        description: "Standard size football"
    },
    {
        img: "https://loremflickr.com/600/400/cricket-bat",
        title: "Cricket Bat",
        price: 2000,
        category: "Sports",
        description: "Wooden cricket bat"
    },
    {
        img: "https://loremflickr.com/600/400/gym-gloves",
        title: "Gym Gloves",
        price: 500,
        category: "Sports",
        description: "Comfortable workout gloves"
    },
    {
        img: "https://loremflickr.com/600/400/mountain-bike,bicycle",
        title: "Bicycle",
        price: 12000,
        category: "Sports",
        description: "Mountain bike cycle"
    },
    {
        img: "https://loremflickr.com/600/400/perfume",
        title: "Perfume",
        price: 1500,
        category: "Fashion",
        description: "Long lasting fragrance"
    },
    {
        img: "https://loremflickr.com/600/400/ring,jewelry",
        title: "Ring",
        price: 5000,
        category: "Jewelry",
        description: "Gold plated ring"
    },
    {
        img: "https://loremflickr.com/600/400/necklace,jewelry",
        title: "Necklace",
        price: 8000,
        category: "Jewelry",
        description: "Silver necklace"
    },
    {
        img: "https://loremflickr.com/600/400/earphones",
        title: "Earphones",
        price: 1000,
        category: "Electronics",
        description: "Wireless Bluetooth earphones"
    },
    {
        img: "https://loremflickr.com/600/400/power-bank",
        title: "Power Bank",
        price: 2000,
        category: "Electronics",
        description: "10000mAh portable charger"
    },
    {
        img: "https://loremflickr.com/600/400/printer",
        title: "Printer",
        price: 12000,
        category: "Electronics",
        description: "All-in-one inkjet printer"
    },
    {
        img: "https://loremflickr.com/600/400/washing-machine",
        title: "Washing Machine",
        price: 35000,
        category: "Home Appliances",
        description: "Automatic front load washing machine"
    },
    {
        img: "https://loremflickr.com/600/400/electric-oven",
        title: "Oven",
        price: 8000,
        category: "Home Appliances",
        description: "Electric baking oven"
    }
];

export default collectiondata;