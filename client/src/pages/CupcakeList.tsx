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
  slug: string;
}

function CupcakeList() {
  const [cupState, setCupState] = useState<CupCakeArray[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => {
        setCupState(data);
      });
  }, []);

  const [cupState2, setCupState2] = useState<CupCakeArray[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((titi) => titi.json())
      .then((tata) => {
        setCupState2(tata);
      });
  }, []);

  const [filterState, setFilterState] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const input = event.target.value;
    setFilterState(input);
  };

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChange}>
            {cupState2.map((tata) => (
              <option key={tata.id} value={tata.slug}>
                {tata.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupState
          .filter((titi) => titi.accessory === filterState)
          .map((toto) => (
            <li className="cupcake-item" key={toto.id}>
              <Cupcake data={toto} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default CupcakeList;
