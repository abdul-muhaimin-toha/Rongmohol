import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/loading.json";

const Loader = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-6">
        <div className="flex min-h-[calc(100vh-362px)] items-center justify-center">
          <Lottie
            animationData={groovyWalkAnimation}
            loop={true}
            className="mx-auto max-w-72"
          />
        </div>
      </div>
    </section>
  );
};

export default Loader;
