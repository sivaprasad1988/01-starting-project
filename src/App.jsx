import reactImg from "./assets/react-core-concepts.png";
import componentsImage from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
const reactDescriptions = ["Fundamental", "Crucial", "Core", "Crux"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const randomWord = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomWord} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
function CoreComponents(props) {
  return (
    <li>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
function App() {
  console.log(CORE_CONCEPTS);
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreComponents {...CORE_CONCEPTS[0]} />
            <CoreComponents {...CORE_CONCEPTS[1]} />
            <CoreComponents {...CORE_CONCEPTS[2]} />
            <CoreComponents {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
