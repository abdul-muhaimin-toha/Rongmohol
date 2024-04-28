import SectionHeading from "./SectionHeading";

const QAndN = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <SectionHeading
          heading="Explore Your Curiosities"
          subHeading="Discover Insights, Tips, and Personalized Assistance"
        />
        <div className="mx-auto max-w-screen-md">
          <div className="join join-vertical w-full space-y-4 ">
            <div className="collapse join-item collapse-arrow border border-[#b7b4d8] p-2 text-black dark:border-[#515155] dark:text-white">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What types of artwork do you specialize in selling on your
                website?
              </div>
              <div className="collapse-content">
                <p>
                  We specialize in selling a diverse range of original artwork,
                  including paintings, sculptures, photographs, prints, and
                  mixed-media pieces.
                </p>
              </div>
            </div>
            <div className="collapse join-item collapse-arrow border border-[#b7b4d8] p-2 text-black dark:border-[#515155] dark:text-white">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Can I find artwork from a variety of artists on your website?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, our platform features artwork from a curated selection of
                  talented artists, offering a wide range of styles, themes, and
                  mediums to suit every taste.
                </p>
              </div>
            </div>
            <div className="collapse join-item collapse-arrow border border-[#b7b4d8] p-2 text-black dark:border-[#515155] dark:text-white">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                How do I know if the artwork I purchase is authentic?
              </div>
              <div className="collapse-content">
                <p>
                  We guarantee the authenticity of all artwork sold on our
                  website. Each piece is accompanied by a certificate of
                  authenticity signed by the artist or a reputable gallery.
                </p>
              </div>
            </div>
            <div className="collapse join-item collapse-arrow border border-[#b7b4d8] p-2 text-black dark:border-[#515155] dark:text-white">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Do you offer framing services for the artwork purchased on your
                website?
              </div>
              <div className="collapse-content">
                <p>
                  While we do not offer framing services directly, many of our
                  artists provide options for framing or can recommend trusted
                  framing professionals to ensure your artwork is beautifully
                  presented.
                </p>
              </div>
            </div>
            <div className="collapse join-item collapse-arrow border border-[#b7b4d8] p-2 text-black dark:border-[#515155] dark:text-white">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                What is your return policy for artwork purchased on your
                website?
              </div>
              <div className="collapse-content">
                <p>
                  We strive for customer satisfaction and offer a hassle-free
                  return policy. If you are not completely satisfied with your
                  artwork, you may return it within a specified timeframe for a
                  full refund or exchange.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QAndN;
