import React from "react";

const UpdateArtPage = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex items-center justify-center py-10 md:py-24">
          <div className="w-full max-w-screen-md rounded p-6  shadow-xl md:p-10">
            <h3 className="mb-8 text-center text-4xl font-bold text-[#665DCD] md:text-5xl ">
              Update Your Art!
            </h3>
            <form className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <input
                type="text"
                placeholder="Enter your art title"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />

              <input
                type="text"
                placeholder="Your art category"
                className="col-span-1 border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />

              <textarea
                placeholder="Short Description"
                cols="2"
                rows="3"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD] md:col-span-2"
              ></textarea>

              <input
                type="text"
                placeholder="Price in USD"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />
              <input
                type="text"
                placeholder="Rating out of 5"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />
              <input
                type="text"
                placeholder="Customizeable? (yes / no)"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />
              <input
                type="text"
                placeholder="Processing time in minute"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />
              <input
                type="text"
                placeholder="Stock status (in stock / stock out)"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />
              <input
                type="text"
                placeholder="Image URL"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />

              <input
                type="text"
                placeholder="User name"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />
              <input
                type="text"
                placeholder="User email"
                className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD]"
              />

              <input
                type="submit"
                value="Add Art"
                className=" mt-4 rounded-md bg-gradient-bg p-3 font-bold  transition-all duration-150 hover:text-white md:col-span-2 "
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateArtPage;
