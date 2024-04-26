const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="py-20 text-center md:pt-32">
      <h2 className="mx-auto max-w-xl text-4xl font-semibold uppercase lg:text-5xl">
        {heading}
      </h2>
      <p className="mx-auto mt-2 max-w-sm  text-lg md:mt-5">{subHeading}</p>
    </div>
  );
};

export default SectionHeading;
