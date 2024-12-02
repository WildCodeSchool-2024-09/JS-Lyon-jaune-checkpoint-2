import { Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";
import "./Home.css";

const cupcakeInfo = {
  accessory: "donut",
  color1: "var(--default-cream-color)",
  color2: "var(--default-cream-color)",
  color3: "var(--default-cream-color)",
  name: "",
};

function Home() {
  return (
    <>
      <h1>Cupcake Union</h1>
      <div className="home-cupcake">
        <Cupcake data={cupcakeInfo} />
      </div>
      <div className="home-content">
        <p>
          Welcome to the Cupcake Union 🧁 <br />
          On this application, you will:
        </p>
        <p>✔️ Display cupcakes from an API</p>
        <p>✔️ Filter them by accessory</p>
        <p>
          Click on <Link to="/instructions">Instructions</Link> to start!
        </p>
      </div>
    </>
  );
}

export default Home;
