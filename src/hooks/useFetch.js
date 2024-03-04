import { useEffect, useState } from "react";

import { pets } from "../api/pets-api";
import { team } from "../api/team-api";

const useFetch = (url, id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getDataByUrl = () => {
    switch (url) {
      case "/team/data/list":
        return team;
      case "/pets/data/list":
        return pets;
      case "/pets/data/item/btId":
        return pets.find((item) => item.id === id);
      default:
        return null;
    }
  };

  useEffect(() => {
    try {
      const data = getDataByUrl();

      setLoading(true);
      setTimeout(() => {
        setData(data);
        setLoading(false);
      }, 1);
    } catch {
      setError("Something is wrong!");
      setLoading(false);
    }
  }, []);

  return { data, error, loading };
};

export default useFetch;
