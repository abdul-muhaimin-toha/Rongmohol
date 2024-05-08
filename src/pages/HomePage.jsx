import Categories from "../components/Categories";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import HomeProducts from "../components/HomeProducts";
import QAndN from "../components/QAndN";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Rongmohol</title>
        </Helmet>
      </HelmetProvider>
      <Hero />
      <Categories />
      <HomeProducts />
      <QAndN />
      <ContactUs />
    </>
  );
};

export default HomePage;
