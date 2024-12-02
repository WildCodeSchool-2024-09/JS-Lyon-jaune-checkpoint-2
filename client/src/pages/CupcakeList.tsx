import { useEffect, useState } from "react";
import "./CupcakeList.css";
import Cupcake from "../components/Cupcake";

interface CupcakeData {
  id: number;
  name: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
}

interface Accessory {
  id: number;
  name: string;
  slug: string;
}

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeData[]>([]);
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [selectedAccessory, setSelectedAccessory] = useState("");

  // Fetch cupcakes from the API
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((responseCupcake) => responseCupcake.json())
      .then((cupcakesJson) => {
        setCupcakes(cupcakesJson);
      })
      .catch((error) => {
        console.error("Error fetching cupcakes:", error);
      });
  }, []);

  // Fetch accessories from the API
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((accessoriesJson) => {
        setAccessories(accessoriesJson);
      })
      .catch((error) => {
        console.error("Error fetching accessories:", error);
      });
  }, []);

  // menu déroulantavec handleAccesoryChange - dom
  function handleAccessoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedAccessory(event.target.value);
  }

  // Filtrer les accesoires
  const filteredCupcakes = cupcakes.filter((cupcake) => {
    if (selectedAccessory === "") {
      return true;
    }
    return cupcake.accessory === selectedAccessory;
  });

  return (
    <div className="cupcake-list-container">
      <h1>Cupcake List</h1>
      <div className="filter-container">
        <label htmlFor="cupcake-select">Filter by accessory:</label>
        <select
          id="cupcake-select"
          value={selectedAccessory}
          onChange={handleAccessoryChange}
        >
          <option value="">---</option>
          {accessories.map((accessory) => (
            <option key={accessory.id} value={accessory.slug}>
              {accessory.name}
            </option>
          ))}
        </select>
      </div>
      <div className="cupcake-grid">
        {filteredCupcakes.map((cupcake) => (
          <Cupcake key={cupcake.id} data={cupcake} />
        ))}
      </div>
    </div>
  );
}

export default CupcakeList;
