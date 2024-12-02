import { useParams } from "react-router-dom";

function CupcakeDetail() {
	const { id } = useParams();
	return (
		<>
			<h2>Cupcake details</h2>
			<p>{id}</p>
		</>
	);
}

export default CupcakeDetail;
