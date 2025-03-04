import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  console.log("Loaded Details:", details);

  return (
    <div>
      <h2>{details?.name}</h2>
      <p>{details?.description}</p>
    </div>
  );
};

export default Details;
