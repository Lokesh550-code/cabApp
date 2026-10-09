// import { useEffect } from "react";
// import { checkHealth } from "../services/api";

import BookingWidget from "./components/bookingWidget/BookingWidget";
import FleetWidget from "./components/fleetWidget/FleetWidget";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ServiceWidget from "./components/servicesWidget/ServiceWidget";
import TrustWidget from "./components/trustWidget/TrustWidget";

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
  return (
    <div className="w-full min-w-0 bg-surface text-text">
      <Navbar />
      <Hero />
      <BookingWidget />
      <TrustWidget />
      <ServiceWidget />
      <FleetWidget />
    </div>
  );
};

export default App;
