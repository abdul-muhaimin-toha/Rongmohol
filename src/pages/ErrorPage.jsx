import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/error-animation.json";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-2">
        <div className="mx-auto flex items-center justify-center">
          <div className="w-3/12">
            <Lottie
              animationData={groovyWalkAnimation}
              loop={true}
              className=""
            />
            <p className=" mx-auto w-6/12 bg-gradient-bg p-1 text-center text-xl font-black capitalize italic text-white dark:bg-gradient-bg-2">
              Page Not Found!
            </p>
            <Link
              to={"/"}
              className="mb-6 mt-6 flex items-center justify-center gap-2 rounded-md  font-black uppercase text-[#D2AB67] transition duration-150 hover:text-[#5FA4E6] md:self-end"
            >
              <FaRegArrowAltCircleLeft />
              <p>Go Back Home</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
