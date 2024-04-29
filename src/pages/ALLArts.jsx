import HomeProductCard from "../components/HomeProductCard";
import useAllArt from "../hooks/useAllArt";
import Loader from "../components/Loader";

const AllArts = () => {
  const { data, isLoading } = useAllArt();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <div className="mx-auto mb-16 max-w-screen-2xl px-4 md:mb-28">
            <div className="py-16 text-center md:pt-20">
              <h2 className="mx-auto max-w-xl text-4xl font-semibold uppercase text-black lg:text-5xl dark:text-white">
                All Arts
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

export default AllArts;
