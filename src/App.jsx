import "./App.css";
import NavBar from "./components/home/Share/NavBar";

function App() {
  return (
    <section>
      <NavBar />
      <div className="app-container mt-10">
        <div className="hero-section">
          <h1 className="title">Welcome to KFC King Food Cafe</h1>
        </div>

        <div className="cta-section">
          <button className="cta-button">Order Now</button>
        </div>
      </div>
    </section>
  );
}

export default App;
