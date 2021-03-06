import { useEffect, useState } from "react";

function useFetch(service, id = null, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service(id, options.data);
        setData(response);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return [data, loading, error];
}

export default useFetch;
