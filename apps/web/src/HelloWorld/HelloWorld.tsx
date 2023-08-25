import React, { useEffect, useState } from 'react';
import { HelloWorldType } from '@org/commons';

interface ApiResponse {
  data?: HelloWorldType;
}

export const HelloWorld = () => {
  const [apiData, setApiData] = useState<HelloWorldType>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { name, welcome } = apiData || {};
  useEffect(() => {
    async function fetchApiData() {
      const apiUrl = 'http://localhost:8085/helloWorld';

      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Request error: ${response.status} - ${response.statusText}`);
        }

        const data: ApiResponse = await response.json();
        setApiData(data.data);
        setLoading(false);
      } catch (error) {
        setError(`API request error: ${error?.toString()}`);
        setLoading(false);
      }
    }

    fetchApiData();
  }, []);

  return (
    <div>
      <h1>API Call Example with React</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {apiData && (
        <div>
          <h1>
            {welcome} {name}
          </h1>
          <h2>API Data:</h2>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
