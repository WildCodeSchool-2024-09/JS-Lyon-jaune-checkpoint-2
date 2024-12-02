import { useEffect, useState } from "react";

import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
// type CupcakeArray = typeof sampleCupcakes;

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

interface CupCakeArray {
  id: number;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

type AccessoryArray = { id: number; name: string; slug: string }[];

function CupcakeList() {
  const [cupState, setCupState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => {
        setCupState(data);
      });
  }, []);

  console.info(cupState);

  const [cupState2, setCupState2] = useState<CupCakeArray[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((titi) => titi.json())
      .then((tata) => {
        setCupState2(tata);
      });
  }, []);

  console.info(cupState2);

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            {cupState2.map((tata) => (
              <option key={tata.id} value={tata.id}>
                {tata.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupState.map((toto) => (
          <li className="cupcake-item" key={toto.id}>
            <Cupcake data={toto} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
