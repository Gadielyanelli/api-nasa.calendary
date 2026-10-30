import { useState, useEffect } from "react";  

export default function useFetch() {
  const URLAPI = "https://science.nasa.gov/wp-json/wp/v2/apod-basic/?api_key=hgsgYvOtNZFnaj5MPMWTzByj9ynToVpPMex7tTAr";
  const [carga, setCarga] = useState(true);
  const [data, setData] = useState({}); 

  useEffect(() => {
    fetch(URLAPI)
      .then((res) => res.json()) 
      .then((res) => setData(res)) 
      .catch((error) => console.log("Error en fetch:", error)) 
      .finally(() => setCarga(false)); 
  }, []);

  return {
    data,
    carga: carga,
  };
}