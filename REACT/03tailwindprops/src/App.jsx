import './App.css'
import Card from './components/cards'

function App() {

  return (
    <>
      Hero Section

      <div className="h-screen bg-black flex justify-center items-center">
        <h1 className="text-5xl text-white font-bold">
          Tailwind CSS Working 🚀
        </h1>
      </div>

      <Card username="chaiwithcode" btntext="Read More" />

      <Card username="sachinkumar" btntext="Click me" />

      <Card />

    </>
  )
}

export default App