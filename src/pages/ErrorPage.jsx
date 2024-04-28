import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/error-animation.json";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-2">
        <div className="flex flex-col items-center justify-center">
          <Lottie
            animationData={groovyWalkAnimation}
            loop={true}
            className="mx-auto max-w-screen-sm"
          />
          <p className="rounded-sm bg-gradient-bg px-4 py-2 text-2xl font-black italic text-white dark:bg-gradient-bg-2">
            Page Not Found!
          </p>
          <Link
            to={"/"}
            className="mb-12 mt-6 flex items-center justify-center gap-2 rounded-md  font-black uppercase text-[#D2AB67] transition duration-150 hover:text-[#5FA4E6] "
          >
            <FaRegArrowAltCircleLeft />
            <p>Go Back Home</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
