import SectionHeading from "./SectionHeading";

const ContactUs = () => {
  return (
    <section className="mb-10 md:mb-20">
      <div className="mx-auto max-w-screen-2xl px-4">
        <SectionHeading
          heading="Get in Touch with Us"
          subHeading="Reach Out for Inquiries, Assistance, or Collaborations"
        />
        <form className="mx-auto flex max-w-screen-md flex-col text-black dark:text-white">
          <input
            type="text"
            placeholder="Enter your name"
            className="mb-4 border border-[#b7b4d8] p-4 focus:outline-[#665DCD] dark:border-[#515155]"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="mb-4 border border-[#b7b4d8] p-4 focus:outline-[#665DCD] dark:border-[#515155]"
          />
          <textarea
            placeholder="Your message"
            cols="30"
            rows="10"
            className="border border-[#b7b4d8] p-4 focus:outline-[#665DCD] dark:border-[#515155]"
          ></textarea>

          <input
            disabled
            type="submit"
            value="Send Message"
            className="dark:bg-gradient-bg-2 mt-4 cursor-pointer rounded-md bg-gradient-bg  p-3 font-bold transition-all duration-150 hover:text-white md:mt-6 "
          />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
