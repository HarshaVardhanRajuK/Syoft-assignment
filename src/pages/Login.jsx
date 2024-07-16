import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Utils.module.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    user_email: "",
    user_password: "",
  });

  const [errors, setErrors] = useState({
    user_email: {
      state: false,
      message: "",
    },
    user_password: {
      state: false,
      message: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false)

  const [postStatus, setPoststatus] = useState({
    done: false,
    message: "",
  });

  function onchangeInputHandler(e) {
    setErrors({
      user_email: {
        state: false,
        message: "",
      },
      user_password: {
        state: false,
        message: "",
      },
    });
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function validateInputs() {
    try {
      const newErrors = { ...errors };

      // user_email validation

      const user_emailRegex = /^[a-zA-Z0-9]+\@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

      if (!user_emailRegex.test(userData.user_email)) {
        newErrors.user_email = true;
        newErrors.user_email = "Enter Valid user_email";
      } else {
        newErrors.user_email = false;
      }

      // user_password validation
      const user_passwordRegex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

      if (!user_passwordRegex.test(userData.user_password)) {
        newErrors.user_password.state = true;
        newErrors.user_password.message =
          "user_password should contain min 6 chars including caps, small, numbers, special chars";
      } else {
        newErrors.user_password.state = false;
        newErrors.user_password.message = "";
      }

      let result = true;

      Object.keys(newErrors).forEach((key) => {
        if (newErrors[key].state) {
          result = false;
          return;
        }
      });

      setErrors(newErrors);
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  async function submitHandler(e) {
    e.preventDefault();
    setLoading(true);

    try {
      if (!validateInputs()) {
        setLoading(false);
        return;
      }
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };

      // console.log(JSON.stringify(userData));
      let res = await fetch(`https://syoft.dev/Api/userlogin/api/userlogin`, options);

      setLoading(false);

      console.log(res);

      if (!res.ok) {
        setPoststatus({
          done: true,
          message: data.message,
        });
        return;
      }

      setPoststatus({
        done: true,
        message: "Success",
      });

      setTimeout(() => {
        setPoststatus((prev) => ({
          ...prev,
          done: false,
        }));
      }, 2000);

      setTimeout(() => {
        navigate("/user-dashboard");
      }, 2000);
    } catch (err) {
      console.log(err);
      setPoststatus({
        done: true,
        message: "something went wrong! Please Try again",
      });
      setLoading(false);
    }
  }

  return (
    <div className="card w-[360px] md:w-[400px] md:max-w-[90%] p-8 bg-[#F1FAFF] rounded-md">
      <h2 className="text-slate-800 text-3xl font-bold mb-1">Login</h2>

      <p className="text-xs">
        Don't have an account?{" "}
        <Link
          className="underline text-blue-500 underline-offset-3 text-sm"
          to="/Register"
        >
          Register here
        </Link>
      </p>

      <form onSubmit={(e) => submitHandler(e)} className="mt-6">
        <div className="mb-3">
          <label
            className="text-sm font-semibold text-slate-600"
            htmlFor="user_email"
          >
            Email *
          </label>
          <br />
          <input
            onChange={(e) => onchangeInputHandler(e)}
            className={styles.inputField}
            type="email"
            name="user_email"
            id="user_email"
            required
          />
          <p
            className={`text-red-600 text-xs 
                ${errors.user_email.state ? "block" : "hidden"}
              `}
          >
            {`* ${errors.user_email.message}`}
          </p>
        </div>

        <div className="mb-3">
          <label
            className="text-sm font-semibold text-slate-600"
            htmlFor="password"
          >
            Password *
          </label>
          <br />
          <div className={styles.inputField}>
            <input
              onChange={(e) => onchangeInputHandler(e)}
              className="flex-1 outline-none"
              type={showPassword ? "text" : "password"}
              name="user_password"
              id="password"
              required
            />{showPassword ? (
              <span
                className="cursor-pointer"
                onClick={() => setShowPassword(false)}
              >
                {" "}
                <FaEye />
              </span>
            ) : (
              <span
                className="cursor-pointer"
                onClick={() => setShowPassword(true)}
              >
                <FaEyeSlash />
              </span>
            )}
          </div>
          <p
            className={`text-red-600 text-xs 
                ${errors.user_password.state ? "block" : "hidden"}
              `}
          >
            {`* ${errors.user_password.message}`}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <span className={styles.spinner}></span>
          </div>
        ) : (
          <button
            type="submit"
            className="w-full bg-blue-600 py-2 rounded-full text-white mt-6 font-semibold"
          >
            Login
          </button>
        )}
        {postStatus.done && (
          <center className="text-black font-bold">{postStatus.message}</center>
        )}
      </form>
    </div>
  );
};

export default Login;
