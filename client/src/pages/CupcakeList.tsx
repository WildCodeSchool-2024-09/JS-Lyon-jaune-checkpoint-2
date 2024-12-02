import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
// const sampleCupcakes = [
//   {
//     id: 10,
//     accessory_id: "4",
//     accessory: "wcs",
//     color1: "blue",
//     color2: "white",
//     color3: "red",
//     name: "France",
//   },
//   {
//     id: 11,
//     accessory_id: "4",
//     accessory: "wcs",
//     color1: "yellow",
//     color2: "red",
//     color3: "black",
//     name: "Germany",
//   },
//   {
//     id: 27,
//     accessory_id: "5",
//     accessory: "christmas-candy",
//     color1: "yellow",
//     color2: "blue",
//     color3: "blue",
//     name: "Sweden",
//   },
// ];

// type CupcakeArray = typeof sampleCupcakes;

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

export default function CupcakeList() {
  // Step 1: get all cupcakes (with useEffect)

  interface CupCakeType {
    accessory: string;
    accessory_id: string;
    color1: string;
    color2: string;
    color3: string;
    id: 10;
    name: string;
  }

  interface AccessorieType {
    id: number;
    name: string;
    slug: string;
  }
  const [cupCakes, setCupCakes] = useState<CupCakeType[]>([]);
  const [accessories, setAccessories] = useState<AccessorieType[]>([]);
  const [cupCakesFiltered, setCupeCakesFiltered] = useState<CupCakeType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((cupCakesDatas) => setCupCakes(cupCakesDatas));
  }, []);

  // Step 3: get all accessories

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((accessoriesDatas) => setAccessories(accessoriesDatas));
  }, []);

  // Step 5: create filter state

  const [accessorieFilter, setAccessorieFilter] = useState<string | null>();

  const handleChangeAccessorie = (selectedFilter: string) => {
    if (selectedFilter !== "All") {
      setAccessorieFilter(selectedFilter);
      setCupeCakesFiltered(
        cupCakes.filter(
          (cupCake) => cupCake.accessory === accessorieFilter?.toLowerCase(),
        ),
      );
    } else {
      setCupeCakesFiltered(cupCakes);
    }
  };

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(e) => handleChangeAccessorie(e.target.value)}
          >
            <option value="All">All</option>
            {accessories.map((accessorie) => {
              return (
                <>
                  <option
                    key={accessorie.id}
                    value={accessorie.name.toLowerCase()}
                  >
                    {accessorie.name}
                  </option>
                </>
              );
            })}
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {(accessorieFilter ? cupCakesFiltered : cupCakes).map((cupCake) => (
          <li key={cupCake.id} className="cupcake-item">
            <Cupcake data={cupCake} />
          </li>
        ))}
        {/* end of block */}
      </ul>
    </>
  );
}
