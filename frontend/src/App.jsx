// import { useEffect } from "react";
// import { checkHealth } from "../services/api";

import Navbar from "./components/navbar/Navbar";

const App = () => {
  // useEffect(() => {
  //   const runCheckHealth = async () => {
  //     try {
  //       const data = await checkHealth();
  //       console.log(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   runCheckHealth();
  // }, []);
  return <div className="w-screen bg-surface text-text">
    <Navbar />
  </div>;
};

export default App;
