import { useEffect } from "react";
import { checkHealth } from "../services/api";

const App = () => {
  useEffect(() => {
    const runCheckHealth = async () => {
      try {
        const data = await checkHealth();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    runCheckHealth();
  }, []);
  return <div className="">App</div>;
};

export default App;
