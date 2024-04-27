import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SignInPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { emailPassLogin, googleLogin, githubLogin } = useAuth();

  const handleFormSubmit = (data) => {
    const { email, password } = data;
    emailPassLogin(email, password)
      .then(() => {
        reset();
        navigate(location?.state ? location.state : "/");

        toast("successfully logged in", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#D2AB67",
            color: "#000",
          },
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        toast("Email and password doesn't matched", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#D2AB67",
            color: "#000",
          },
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast("successfully signed in", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#D2AB67",
            color: "#000",
          },
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        toast("Google sign in failed", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#D2AB67",
            color: "#000",
          },
        });
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast("successfully signed in", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#D2AB67",
            color: "#000",
          },
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        toast("Github sign in failed", {
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
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex items-center justify-center py-10 md:py-24">
          <div className="w-full max-w-screen-md rounded p-6  shadow-xl md:p-10">
            <h3 className="mb-8 text-center text-4xl font-bold text-[#665DCD] md:text-5xl ">
              Sign In!
            </h3>
            <p></p>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="flex  flex-col"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className=" border p-4 focus:outline-[#665DCD]"
                {...register("email", {
                  required: {
                    value: true,
                    message: "You must fill email field",
                  },
                })}
              />
              {errors.email && (
                <p className="px-1 pt-2 text-sm text-red-900 ">
                  {errors.email.message}
                </p>
              )}
              <div className="relative">
                <input
                  type={isPassVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  className="mt-4 w-full border p-4 focus:outline-[#665DCD]"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "You must fill password field",
                    },
                  })}
                />
                <p
                  className="cursor-pointer"
                  onClick={() => setIsPassVisible(!isPassVisible)}
                >
                  {isPassVisible ? (
                    <FaEyeSlash className="absolute right-5 top-2/3 -translate-y-1/2  text-2xl text-[#665DCD]" />
                  ) : (
                    <FaEye className="absolute right-5 top-2/3 -translate-y-1/2  text-2xl text-[#665DCD]" />
                  )}
                </p>
              </div>
              {errors.password && (
                <p className="px-1 pt-2 text-sm text-red-900">
                  {errors.password.message}
                </p>
              )}
              <input
                type="submit"
                value="Sign In"
                className="mt-8 cursor-pointer rounded-md bg-gradient-bg p-3 font-semibold transition-all duration-150 hover:text-white "
              />
            </form>
            <div className="mt-3 flex flex-col gap-3 md:mt-4 md:flex-row">
              <button
                onClick={handleGoogleLogin}
                className="w-full rounded-md bg-[#D2AB67] p-3 text-sm font-semibold text-white transition-all duration-150 hover:text-black md:w-1/2"
              >
                Join With Google
              </button>
              <button
                onClick={handleGithubLogin}
                className="w-full rounded-md bg-[#5FA4E6] p-3 text-sm font-semibold text-white transition-all duration-150 hover:text-black md:w-1/2"
              >
                Join With Github
              </button>
            </div>
            <p className="mt-6 text-center font-medium">
              Dont have an account?
              <Link
                to="/registration"
                className="ml-2 text-[#5FA4E6] hover:underline "
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
