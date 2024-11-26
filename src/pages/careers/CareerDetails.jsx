import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career details for {data.title}</h2>

      <p>id: {id}</p>

      <p>salary: {data.salary}</p>
      <p>location: {data.location}</p>
      <div className="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum
        provident asperiores expedita voluptate nisi quis voluptas, ratione
        deleniti sed!
      </div>
    </div>
  );
};

export default CareerDetails;

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/careers/${id}`);

  if (!res.ok) {
    throw new Error("Could not find that career");
  }

  return res.json();
};
