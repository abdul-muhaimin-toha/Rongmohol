import axios from "axios";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

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

    axios
      .post("http://localhost:3000/arts", newAddedArt)
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
        toast("New art post failed, try again!", {
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
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex items-center justify-center py-10 md:py-24">
          <div className="w-full max-w-screen-md rounded p-6  shadow-xl md:p-10">
            <h3 className="mb-8 text-center text-4xl font-bold text-[#665DCD] md:text-5xl ">
              Add Your Art Now!
            </h3>
            <form
              onSubmit={handleAddArt}
              className="grid grid-cols-1 gap-3 md:grid-cols-2"
            >
              <input
                type="text"
                name="title"
                placeholder="Enter your art title"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />

              <input
                type="text"
                name="category"
                placeholder="Your art category"
                className="col-span-1 border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />

              <textarea
                name="description"
                placeholder="Short Description"
                cols="2"
                rows="3"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD] md:col-span-2"
              ></textarea>

              <input
                type="text"
                name="price"
                placeholder="Price in USD"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />
              <input
                type="text"
                name="rating"
                placeholder="Rating out of 5"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />
              <input
                type="text"
                name="customizable"
                placeholder="Customizable? (yes / no)"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />
              <input
                type="text"
                name="processing_time"
                placeholder="Processing time in minute"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />
              <input
                type="text"
                name="stock_status"
                placeholder="Stock status (in stock / stock out)"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />
              <input
                type="text"
                name="img_URL"
                placeholder="Image URL"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />

              <input
                type="text"
                defaultValue={user.displayName}
                name="posted_by_name"
                placeholder="User name"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />
              <input
                type="text"
                defaultValue={user.email}
                name="posted_by_email"
                placeholder="User email"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />

              <input
                type="submit"
                value="Add Art"
                className="cursor-pointer rounded-md bg-gradient-bg p-3 font-bold  transition-all duration-150 hover:text-white md:col-span-2 "
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddArtPage;
