import AllArtTableRow from "../components/AllArtTableRow";
import useAllArt from "../hooks/useAllArt";
import Loader from "../components/Loader";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AllArtTablePage = () => {
  const { data, isPending } = useAllArt();
  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <section>
          <HelmetProvider>
            <Helmet>
              <title>Rongmohol - Art Database</title>
            </Helmet>
          </HelmetProvider>
          <div className="mx-auto max-w-screen-2xl px-4">
            <div className="flex items-center justify-center py-10 md:py-24">
              <div className="w-full max-w-screen-xl rounded p-6  shadow-xl md:p-10">
                <h2 className="mx-auto max-w-xl text-4xl font-semibold uppercase text-black lg:text-5xl dark:text-white">
                  All Arts Dashboard
                </h2>
                <div className="mt-6 overflow-x-auto md:mt-16">
                  <table className="table table-xs">
                    <thead className="text-[#665DCD] dark:text-white">
                      <tr>
                        <th></th>
                        <th>Art Title</th>
                        <th>Category</th>
                        <th>Price $</th>
                        <th>Rating</th>
                        <th>Stock Status</th>
                        <th>Owner&apos;s Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((art, index) => (
                        <AllArtTableRow index={index} key={art._id} art={art} />
                      ))}
                    </tbody>
                    <tfoot className="text-[#665DCD] dark:text-white">
                      <tr>
                        <th></th>
                        <th>Art Title</th>
                        <th>Category</th>
                        <th>Price $</th>
                        <th>Rating</th>
                        <th>Stock Status</th>
                        <th>Owner&apos;s Email</th>
                        <th>Action</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AllArtTablePage;
