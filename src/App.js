import { useState, useEffect } from "react";
import Table from "./components/Table";

import "./App.css";
import govAPI from "./api/govAPI";

function App() {
  const [flats, setFlat] = useState([]);
  const [town, setTown] = useState();
  const [isLoading, setIsLoading] = useState(false);
  let initialLoad = true;

  const apiGet = async () => {
    try {
      setIsLoading(true);
      console.log(town);
      const response = await govAPI.get(``, {
        params: {
          resource_id: "d_8b84c4ee58e3cfc0ece0d773c8ca6abc",
          q: town,
        },
      });
      console.log(response.data.result.records);
      setFlat(response.data.result.records);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const newTown = e.target.value;
    console.log(newTown);
    setTown(newTown);
  };

  const handlerSubmit = () => {
    apiGet();
    console.log(town);
  };

  useEffect(() => {
    if (initialLoad) {
      apiGet();
      initialLoad = false;
    }
  }, []);

  return (
    <div className="App">
      <h1>List of sales (flats)</h1>

      <input
        value={town}
        type="text"
        placeholder="Town name"
        onChange={handleInputChange}
      />
      <button onClick={handlerSubmit}>Load Flats</button>
      {isLoading && <p>Loading ...</p>}
      {flats && <Table list={flats} />}
    </div>
  );
}

export default App;
