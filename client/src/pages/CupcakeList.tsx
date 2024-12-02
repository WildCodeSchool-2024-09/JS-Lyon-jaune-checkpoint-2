import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

interface CupcakeArray {
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
  id: number;
}

type AccessoryArray = { id: number; name: string; slug: string }[];
/* ************************************************************************* */
const sampleCupcakes = [
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  },
];

// type CupcakeArray = typeof sampleCupcakes;

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 5: create filter state

  const [data, setData] = useState<CupcakeArray[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const [accessories, setAccessories] = useState<AccessoryArray>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories ")
      .then((response) => response.json())
      .then((data) => setAccessories(data as AccessoryArray));
  }, []);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {accessories.map((access) => (
              <option key={access.id} value={access.slug}>
                {access.name}
              </option>
            ))}

            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>

      <ul>
        {data.map((cupcake) => (
          <li key={cupcake.id}>
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>

      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          {/* <Cupcake data={sampleCupcakes[0]} /> */}
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
