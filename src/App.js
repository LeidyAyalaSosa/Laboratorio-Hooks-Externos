import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function App() {
  const { data, error } = useSWR(
    "https://api.thedogapi.com/v1/breeds?limit=3",
    "Card",
    fetcher
  );

  if (error) return "A ocurrido un error.";
  if (!data) return "Cargando...";

  return (
    <div>
      <h1>{data[0].name}</h1>
      <p>{data[0].bred_for}</p>
      <p>{data[0].life_span}</p>
      <p>{data[0].temperament}</p>
      <p>{data[0].origin}</p>
      <img src={data[0].image.url} alt={data[0].id} width="300px" />
      <h1>{data[1].name}</h1>
      <p>{data[1].bred_for}</p>
      <p>{data[1].life_span}</p>
      <p>{data[1].temperament}</p>
      <p>{data[1].origin}</p>
      <img src={data[1].image.url} alt={data[1].id} width="300px" />
      <h1>{data[2].name}</h1>
      <p>{data[2].bred_for}</p>
      <p>{data[2].life_span}</p>
      <p>{data[2].temperament}</p>
      <p>{data[2].origin}</p>
      <img src={data[2].image.url} alt={data[2].id} width="300px" />
    </div>
  );
}

export default App;
