import type React from "react";
import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */

// type CupcakeArray = typeof sampleCupcakes;

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

interface CupcakeData {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

interface Accessory {
  id: string;
  name: string;
}

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeData[]>([]);
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [selectedAccessory, setSelectedAccessory] = useState<string>("");

  useEffect(() => {
    const fetchCupcakes = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/cupcakes");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des cupcakes");
        }
        const data = await response.json();
        setCupcakes(data);
        console.info("Cupcakes récupérés :", data);
      } catch (error) {
        console.error("Erreur lors de la récupération des cupcakes :", error);
      }
    };

    fetchCupcakes();
  }, []);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/accessories");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des accessoires");
        }
        const data = await response.json();
        setAccessories(data);
        console.info("Accessoires récupérés :", data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des accessoires :",
          error,
        );
      }
    };

    fetchAccessories();
  }, []);

  const filteredCupcakes = selectedAccessory
    ? cupcakes.filter((cupcake) => cupcake.accessory_id === selectedAccessory)
    : cupcakes;

  const handleAccessoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedAccessory(event.target.value);
  };

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={handleAccessoryChange}
          >
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
