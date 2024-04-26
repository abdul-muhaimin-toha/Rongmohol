const Loader = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl p-6">
        <div className="flex min-h-[calc(100vh-350px)] items-center justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      </div>
    </section>
  );
};

export default Loader;
