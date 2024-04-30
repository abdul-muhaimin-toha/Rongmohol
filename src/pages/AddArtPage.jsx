import axios from "axios";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AddArtPage = () => {
  const { user } = useAuth();

  const handleAddArt = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const customizable = e.target.customizable.value;
    const processing_time = e.target.processing_time.value;
    const stock_status = e.target.stock_status.value;
    const img_URL = e.target.img_URL.value;
    const posted_by_name = e.target.posted_by_name.value;
    const posted_by_email = e.target.posted_by_email.value;

    const newAddedArt = {
      title,
      category,
      description,
      price,
      rating,
      customizable,
      processing_time,
      stock_status,
      img_URL,
      posted_by_name,
      posted_by_email,
    };

    console.log(newAddedArt);

    axios
      .post("https://rongmohol-server.vercel.app/arts", newAddedArt)
      .then(function (response) {
        console.log(response.data);
        if (response.data.insertedId) {
          e.target.reset();
          toast("New art posted successfully", {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: "#D2AB67",
              color: "#000",
            },
          });
        }
      })
      .catch(function (error) {
        console.error(error.message);
        toast("New art post failed, try", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#D2AB67",
            color: "#000",
          },
        });
      });
  };

  return (
    <section>
      <HelmetProvider>
        <Helmet>
          <title>Rongmohol - Add Art</title>
        </Helmet>
      </HelmetProvider>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex items-center justify-center py-10">
          <div className="w-full max-w-screen-md rounded p-6  shadow-xl md:p-10">
            <h2 className="mx-auto mb-12 mt-6 max-w-2xl text-center text-4xl font-semibold uppercase text-black md:text-5xl dark:text-white">
              Add your art now!
            </h2>
            <form
              onSubmit={handleAddArt}
              className="grid grid-cols-1 gap-3 md:grid-cols-2"
            >
              <input
                type="text"
                name="title"
                placeholder="Enter your art title"
                className="border border-[#b7b4d8] p-4  text-black focus:outline-[#665DCD] dark:border-[#2e2d36] "
              />

              {/* <input
                type="text"
                name="category"
                placeholder="Your art category"
                className="col-span-1 border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] dark:border-[#2e2d36] "
              /> */}

              <select
                defaultValue={"landscape painting"}
                name="category"
                className="input-select col-span-1 border border-[#b7b4d8] bg-right p-4 text-black focus:outline-[#665DCD] dark:border-[#2e2d36]"
              >
                <option value="landscape painting" className="input-selected">
                  Choose your category
                </option>
                <option value="portrait drawing">Portrait Drawing</option>
                <option value="watercolor drawing">Watercolor Drawing</option>
                <option value="oilcolor painting">Oilcolor Painting</option>
                <option value="charcoal sketch">Charcoal Sketch</option>
                <option value="cartoon drawing">Cartoon Drawing</option>
                <option value="landscape painting">Landscape Painting</option>
              </select>

              <textarea
                name="description"
                placeholder="Short Description"
                cols="2"
                rows="3"
                className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] md:col-span-2 dark:border-[#2e2d36] "
              ></textarea>

              <input
                type="text"
                name="price"
                placeholder="Price in USD"
                className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] dark:border-[#2e2d36] "
              />
              <input
                type="text"
                name="rating"
                placeholder="Rating out of 5"
                className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] dark:border-[#2e2d36] "
              />

              {/* <input
                type="text"
                name="customizable"
                placeholder="Customizable? (yes / no)"
                className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] dark:border-[#2e2d36] "
              /> */}

              <select
                defaultValue="yes"
                name="customizable"
                className="input-select col-span-1 border border-[#b7b4d8] bg-right p-4 text-black focus:outline-[#665DCD] dark:border-[#2e2d36]"
              >
                <option value="yes" className="input-selected">
                  Customizable
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <input
                type="text"
                name="processing_time"
                placeholder="Processing time in minute"
                className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] dark:border-[#2e2d36] "
              />

              {/* <input
                type="text"
                name="stock_status"
                placeholder="Stock status (in stock / stock out)"
                className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] dark:border-[#2e2d36] "
              /> */}

              <select
                defaultValue="in stock"
                name="stock_status"
                className="input-select col-span-1 border border-[#b7b4d8] bg-right p-4 text-black focus:outline-[#665DCD] dark:border-[#2e2d36]"
              >
                <option value="in stock" className="input-selected">
                  Stock status
                </option>
                <option value="in stock">In stock</option>
                <option value="made to order">Made to order</option>
              </select>

              <input
                type="text"
                name="img_URL"
                placeholder="Image URL"
                className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] dark:border-[#2e2d36] "
              />

              <input
                type="text"
                defaultValue={user.displayName}
                name="posted_by_name"
                placeholder="User name"
                className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] dark:border-[#2e2d36] "
              />
              <input
                type="text"
                defaultValue={user.email}
                name="posted_by_email"
                placeholder="User email"
                className="border border-[#b7b4d8] p-4 text-black  focus:outline-[#665DCD] dark:border-[#2e2d36] "
              />

              <input
                type="submit"
                value="Add Art"
                className="cursor-pointer rounded-md bg-gradient-bg p-3 font-bold text-black   transition-all duration-150 hover:text-white md:col-span-2 dark:bg-gradient-bg-2 "
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddArtPage;
