import componentsImage from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreComponents from "./components/CoreComponents";
import TabButton from "./components/TabButton";

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
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton>Components</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
