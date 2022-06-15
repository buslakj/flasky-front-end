import "./App.css";
import DogList from "./components/DogList";

const dogData = [
  {
    name: "Wishbone",
    favoriteToy: "Squeaker",
    chipNumber: "82373",
  },
  {
    name: "Appa",
    favoriteToy: "Ball",
    chipNumber: "29238",
  },
  {
    name: "Jimminy",
    favoriteToy: "Bone",
    chipNumber: "72902",
  },
];

function App() {
  return (
    <main>
      <h1>The Dog House</h1>
      <DogList>dogs={dogData}</DogList>
    </main>
  );
}

export default App;
