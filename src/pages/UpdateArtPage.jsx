import React from "react";
import { useParams } from "react-router-dom";
import useSingleArt from "../hooks/useSingleArt";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const UpdateArtPage = () => {
  const { id } = useParams();
  const { data, isLoading, refetch } = useSingleArt(id);

  const handleUpdateInformation = (e) => {
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

    const newInformation = {
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
      .put(`https://rongmohol-server.vercel.app/arts/${id}`, newInformation)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          e.target.reset();
          refetch();
          toast("Art updated successfully", {
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
        toast("Update failed, try again!", {
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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <div className="mx-auto max-w-screen-2xl px-4">
            <div className="flex items-center justify-center py-10">
              <div className="w-full max-w-screen-md rounded p-6  shadow-xl md:p-10">
                <h2 className="mx-auto mb-8 max-w-xl text-center text-2xl font-semibold uppercase text-black  lg:text-3xl dark:text-white">
                  Update {data?.title} Information!
                </h2>
                <form
                  onSubmit={handleUpdateInformation}
                  className="grid grid-cols-1 gap-3 md:grid-cols-2"
                >
                  <input
                    type="text"
                    name="title"
                    defaultValue={data?.title}
                    placeholder="Enter your art title"
                    className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] dark:border-[#525155] "
                  />

                  <input
                    type="text"
                    name="category"
                    defaultValue={data?.category}
                    placeholder="Your art category"
                    className="col-span-1 border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] dark:border-[#525155] "
                  />

                  <textarea
                    name="description"
                    placeholder="Short Description"
                    defaultValue={data?.description}
                    cols="2"
                    rows="3"
                    className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] md:col-span-2 dark:border-[#525155] "
                  ></textarea>

                  <input
                    name="price"
                    type="text"
                    defaultValue={data?.price}
                    placeholder="Price in USD"
                    className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] dark:border-[#525155] "
                  />
                  <input
                    type="text"
                    name="rating"
                    defaultValue={data?.rating}
                    placeholder="Rating out of 5"
                    className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] dark:border-[#525155] "
                  />
                  <input
                    type="text"
                    name="customizable"
                    defaultValue={data?.customizable}
                    placeholder="Customizeable? (yes / no)"
                    className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] dark:border-[#525155] "
                  />
                  <input
                    type="text"
                    name="processing_time"
                    defaultValue={data?.processing_time}
                    placeholder="Processing time in minute"
                    className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] dark:border-[#525155] "
                  />
                  <input
                    type="text"
                    name="stock_status"
                    defaultValue={data?.stock_status}
                    placeholder="Stock status (in stock / stock out)"
                    className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] dark:border-[#525155] "
                  />
                  <input
                    type="text"
                    name="img_URL"
                    defaultValue={data?.img_URL}
                    placeholder="Image URL"
                    className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] dark:border-[#525155] "
                  />

                  <input
                    disabled
                    type="text"
                    name="posted_by_name"
                    defaultValue={data?.posted_by_name}
                    placeholder="User name"
                    className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] disabled:bg-white dark:border-[#525155] "
                  />
                  <input
                    disabled
                    type="text"
                    name="posted_by_email"
                    defaultValue={data?.posted_by_email}
                    placeholder="User email"
                    className="border border-[#b7b4d8] p-4 text-black focus:outline-[#665DCD] disabled:bg-white dark:border-[#525155] "
                  />

                  <input
                    type="submit"
                    value="Update Information"
                    className="mt-4 cursor-pointer rounded-md bg-gradient-bg p-3 font-bold  text-black transition-all duration-150 hover:text-white md:col-span-2 dark:bg-gradient-bg-2 "
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UpdateArtPage;
