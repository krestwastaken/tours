import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours)
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
