const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="pb-10 pt-20 text-center">
      <h2 className="mx-auto max-w-2xl text-4xl font-semibold uppercase lg:text-5xl">
        {heading}
      </h2>
      <p className="mx-auto mt-2 max-w-sm  text-lg md:mt-5">{subHeading}</p>
    </div>
  );
};

export default SectionHeading;
