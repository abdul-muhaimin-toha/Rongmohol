import HomeProductCard from "../components/HomeProductCard";
import useArtsFromCategory from "../hooks/useArtsFromCategory";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ErrorPage from "./ErrorPage";

const ArtsCategory = () => {
  const { category } = useParams();
  const { data, isPending, isError } = useArtsFromCategory(category);

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <section>
          <HelmetProvider>
            <Helmet>
              <title>
                Rongmohol -{" "}
                {category.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                  letter.toUpperCase(),
                )}
              </title>
            </Helmet>
          </HelmetProvider>
          <div className="mx-auto mb-16 max-w-screen-2xl px-4 md:mb-28">
            <div className="py-16 text-center md:pt-20">
              <h2 className="mx-auto max-w-xl text-4xl font-semibold uppercase text-black lg:text-5xl dark:text-white">
                All {category} Arts
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {data?.map((art) => (
                <HomeProductCard key={art._id} art={art} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ArtsCategory;
