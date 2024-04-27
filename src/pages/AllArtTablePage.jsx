import AllArtTableRow from "../components/AllArtTableRow";

const AllArtTablePage = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex items-center justify-center py-10 md:py-24">
          <div className="w-full max-w-screen-lg rounded p-6  shadow-xl md:p-10">
            <h3 className="mb-8 text-center text-4xl font-bold text-[#665DCD] md:text-5xl ">
              All Arts Informations
            </h3>
            <div className="mt-6 overflow-x-auto md:mt-16">
              <table className="table table-xs">
                <thead className="text-[#665DCD]">
                  <tr>
                    <th></th>
                    <th>Art Title</th>
                    <th>Category</th>
                    <th>Price $</th>
                    <th>Rating</th>
                    <th>Stock Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <AllArtTableRow />
                  <AllArtTableRow />
                  <AllArtTableRow />
                  <AllArtTableRow />
                  <AllArtTableRow />
                  <AllArtTableRow />
                  <AllArtTableRow />
                  <AllArtTableRow />
                  <AllArtTableRow />
                  <AllArtTableRow />
                  <AllArtTableRow />
                  <AllArtTableRow />
                  <AllArtTableRow />
                  <AllArtTableRow />
                  <AllArtTableRow />
                </tbody>
                <tfoot className="text-[#665DCD]">
                  <tr>
                    <th></th>
                    <th>Art Title</th>
                    <th>Category</th>
                    <th>Price $</th>
                    <th>Rating</th>
                    <th>Stock Status</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllArtTablePage;
