import { useParams } from "react-router-dom";

function CupcakeDetails() {
  const { id } = useParams();
  return (
    <>
      <h1>{id}</h1>
    </>
  );
}

export default CupcakeDetails;
