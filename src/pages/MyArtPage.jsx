import MyArtCard from "../components/MyArtCard";
import useAuth from "../hooks/useAuth";
import useMyArt from "../hooks/useMyArt";

const MyArtPage = () => {
  const { user } = useAuth();
  const { data } = useMyArt(user);

  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className=" py-8 md:py-24">
          <h3 className="mb-2 text-center text-3xl font-semibold text-[#665DCD] md:mb-6 md:text-5xl">
            Celestial Symphony Details
          </h3>
          <div className="mt-12 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {data?.map((art) => (
              <MyArtCard key={art._id} art={art} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyArtPage;
