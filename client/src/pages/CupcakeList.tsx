import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */

// type CupcakeArray = typeof sampleCupcakes;

interface cupcakeArray {
  id: number;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}
interface accessoriesArray {
  id: number;
  name: string;
  slug: string;
}

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes (with useEffect)
  const [list, setList] = useState<cupcakeArray[]>([]);
  const [accessories, setAccessories] = useState<accessoriesArray[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      });
  }, []);

  // Step 3: get all accessories

  useEffect(() => {
    fetch(" http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => {
        setAccessories(data);
      });
  }, []);

  // Step 5: create filter state
  const [search, setSearch] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{/* Step 5: use a controlled component for select */}
          <select id="cupcake-select" onChange={handleChange}>
            {accessories.map((select) => (
              <option key={select.id} value={select.slug}>
                {select.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {list
          .filter((filtre) => {
            return filtre.accessory === search;
          })
          .map((cup) => (
            <li className="cupcake-item" key={cup.id}>
              <Cupcake data={cup} />
            </li>
          ))}
        {/* Step 5: filter cupcakes before repeating */}

        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
