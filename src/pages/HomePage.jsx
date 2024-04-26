import Categories from "../components/Categories";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import HomeProducts from "../components/HomeProducts";
import QAndN from "../components/QAndN";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <HomeProducts />
      <QAndN />
      <ContactUs />
    </>
  );
};

export default HomePage;
