import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

    const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  } else if (tours.length === 0) {
    return (
      <div>
        <h3>No tours Left</h3>
        <button onClick={() => fetchTours()}>refresh</button>
      </div>
    );
  }
  return <Tours tours={tours} setTours={setTours}/>;
}

export default App;
