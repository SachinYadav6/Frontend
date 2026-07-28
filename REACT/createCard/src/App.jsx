import Card from "./Card";

function App() {
    return (
        <div className= "container">
            <Card
                heading='nature'
                link='https://plus.unsplash.com/premium_photo-1784513644042-741f9b1ecfd7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D'
            
                p={'This category showcases nature`s beauty, from vast landscapes to macro details, transporting viewers to the outdoors.'}
                button={'learn more'}
            />
            <Card
    heading="giraffe"
    p="A Giraffe at Calgary Zoo poking his tongue out"
    button="Explore"
    link="https://images.unsplash.com/photo-1574870111867-089730e5a72b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
            />
            <Card
    heading="Travel"
    p="man sitting on gang chair with feet on luggage looking at airplane"
    button="View"
    link="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
/>
        </div>
    )
}
export default App;