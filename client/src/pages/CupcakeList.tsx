import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */

// type CupcakeArray = typeof sampleCupcakes;

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

interface CupcakeTypes {
  id: number;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}
interface AccessoriesTypes {
  id: number;
  name: string;
  slug: string;
}
function CupcakeList() {
  // Step 1: get all cupcakes (with useEffect)
  const [cupcakes, setCupcakes] = useState<CupcakeTypes[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => setCupcakes(data));
  }, []);

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState<AccessoriesTypes[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data) => setAccessories(data));
  }, []);
  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            {accessories.map((accessorie) => (
              <option value={accessorie.slug} key={accessorie.id}>
                {accessorie.name}
              </option>
            ))}
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          {cupcakes.map((cupcake) => (
            <Cupcake data={cupcake} key={cupcake.id} />
          ))}
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
