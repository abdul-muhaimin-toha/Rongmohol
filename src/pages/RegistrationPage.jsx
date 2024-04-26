import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const RegistrationPage = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { logout, createNewUser, googleLogin, githubLogin } = useAuth();

  const handleFormSubmit = (data) => {
    const { name, email, photoURL, password } = data;
    createNewUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {})
          .catch((error) => {
            console.error(error.message);
          });
        logout();
        navigate(location?.state ? location.state : "/login");
        reset();
        toast("Profile Created successfully", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        toast("Create new acount failed! try again!", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast("successfully logged in", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        toast("Login with google failed! try again!", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast("successfully logged in", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        toast("Login with github failed! try again!", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex items-center justify-center py-10 md:py-24">
          <div className="w-full rounded p-6 shadow-xl md:w-3/4 md:p-10 lg:w-3/6">
            <h3 className="mb-10 text-3xl font-bold text-[#665DCD] md:text-5xl ">
              Create New Account!
            </h3>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="flex flex-col"
            >
              <input
                type="name"
                placeholder="Enter your Name"
                className=" border p-4"
                {...register("name", {
                  required: {
                    value: true,
                    message: "You must fill name field",
                  },
                })}
              />
              {errors.name && (
                <p className="px-1 pt-2 text-sm text-red-900">
                  {errors.name.message}
                </p>
              )}
              <input
                type="email"
                placeholder="Enter your email"
                className=" mt-4 border p-4"
                {...register("email", {
                  required: {
                    value: true,
                    message: "You must fill email field",
                  },
                })}
              />
              {errors.email && (
                <p className="px-1 pt-2 text-sm text-red-900">
                  {errors.email.message}
                </p>
              )}
              <input
                type="text"
                placeholder="Enter your photo url"
                className=" mt-4 border p-4"
                {...register("photoURL")}
              />
              <div className="relative">
                <input
                  type={isPassVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  className="mt-4 w-full border p-4"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "You must fill password field",
                    },
                    minLength: {
                      value: 6,
                      message:
                        "Your password should be atleast 6 characters long",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                      message:
                        "Your password should contain both uppercase and lowercase character",
                    },
                  })}
                />
                <p
                  className="cursor-pointer"
                  onClick={() => setIsPassVisible(!isPassVisible)}
                >
                  {isPassVisible ? (
                    <FaEyeSlash className="absolute right-5 top-2/3 -translate-y-1/2  text-2xl text-primary" />
                  ) : (
                    <FaEye className="absolute right-5 top-2/3 -translate-y-1/2  text-2xl text-primary" />
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
                value="Sign Up"
                className="mt-8 rounded-md bg-gradient-bg p-3 font-semibold transition-all duration-150 hover:text-white "
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
              Already have an account?
              <Link
                to="/sign-in"
                className="ml-2 text-primary hover:underline "
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
