import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tourss from "./Tourss";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tourData, setTourData] = useState([]);

  const removeTour = (id) => {
    const newTours = tourData.filter((tour) => tour.id !== id);
    setTourData(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTourData(tours);
      console.log(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (tourData.length === 0) {
    return (
      <div>
        <h2>No tours Available</h2>
        <button type="button" className="btn" onClick={() => fetchTours()}>
          Click to load
        </button>
      </div>
    );
  }

  return (
    <main>
      <Tourss tourData={tourData} removeTour={removeTour} />
    </main>
  );
};
export default App;
