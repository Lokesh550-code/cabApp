import Hero from "../../components/hero/Hero";
import BookingWidget from "../../components/bookingWidget/BookingWidget";
import TrustWidget from "../../components/trustWidget/TrustWidget";
import ServiceWidget from "../../components/servicesWidget/ServiceWidget";
import FleetWidget from "../../components/fleetWidget/FleetWidget";

const Home = () => {
  return (
    <div className="w-full min-w-0 bg-surface text-text">
      <Hero />
      <BookingWidget />
      <TrustWidget />
      <ServiceWidget />
      <FleetWidget />
    </div>
  );
};

export default Home;
