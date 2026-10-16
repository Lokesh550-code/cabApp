import AboutHero from "../../components/hero/AboutHero.jsx";
import OurCommitment from "../../components/ourCommitment/OurCommitment.jsx";
import OurStoryWidget from "../../components/ourStoryWidget/OurStoryWidget.jsx";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs.jsx";

const About = () => {
  return (
    <div>
      <AboutHero />
      <OurStoryWidget />
      <WhyChooseUs />
      <OurCommitment />
    </div>
  );
};

export default About;
