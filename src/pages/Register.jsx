import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Utils.module.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    user_firstname: "",
    user_password: "",
    user_email: "",
    company: "Syoft",

    user_phone: "9876543210",
    user_lastname: "Sree",
    user_city: "Hyderabad",
    user_zipcode: "500072",
  });

  const [isChecked, setIsChecked] = useState({
    value: false,
    error: false,
  });

  const [errors, setErrors] = useState({
    user_firstname: {
      state: false,
      message: "",
    },
    user_email: {
      state: false,
      message: "",
    },
    user_password: {
      state: false,
      message: "",
    },
  });

  const [postStatus, setPoststatus] = useState({
    done: false,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false)

  function onchangeInputHandler(e) {
    setErrors({
      user_firstname: {
        state: false,
        message: "",
      },
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
    const newErrors = { ...errors };

    // user_firstname validation

    if (userData.user_firstname.length < 3) {
      newErrors.user_firstname.state = true;
      newErrors.user_firstname.message = "Enter Valid user_firstname";
    } else {
      newErrors.user_firstname.state = false;
    }

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

    if (!isChecked.value) {
      setIsChecked((prev) => ({ ...prev, error: true }));
      result = false;
    }

    setErrors(newErrors);

    return result;
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

      let res = await fetch(`https://syoft.dev/Api/user_registeration/api/user_registeration`, options);
      let data = await res.json();
      setLoading(false);

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
        navigate("/login");
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
        <h2 className="text-slate-800 text-3xl font-bold mb-1">Register</h2>

        <p className="text-xs">
          Already have an account?{" "}
          <Link
            className="underline text-blue-500 underline-offset-3 ml-2 text-sm"
            to="/login"
          >
            Sign in
          </Link>
        </p>

        <form onSubmit={(e) => submitHandler(e)} className="mt-6">
          <div className="mb-3">
            <label
              className="text-sm font-semibold text-slate-600"
              htmlFor="user_firstname"
            >
              Full name *
            </label>
            <br />
            <input
              onChange={(e) => onchangeInputHandler(e)}
              className={styles.inputField}
              type="text"
              name="user_firstname"
              id="user_firstname"
              required
            />
            <p
              className={`text-red-600 text-xs 
                ${errors.user_firstname.state ? "block" : "hidden"}
              `}
            >
              {`* ${errors.user_firstname.message}`}
            </p>
          </div>

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
              htmlFor="user_password"
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
              id="user_password"
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

          <div className="mb-3">
            <label
              className="text-sm font-semibold text-slate-600"
              htmlFor="company"
            >
              Company *
            </label>
            <br />
            <input
              onChange={(e) => onchangeInputHandler(e)}
              className={styles.inputField}
              type="text"
              name="company"
              id="company"
            />
          </div>

          <div>
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="mr-1 relative top-[2px]"
              checked={isChecked.value}
              onChange={() => {
                setIsChecked((prev) => ({
                  ...prev,
                  value: !isChecked.value,
                  error: false,
                }));
              }}
            />
            <label className="text-xs font-semibold" htmlFor="terms">
              I agree to the <span>Terms of Service</span> and{" "}
              <span>Privacy Policy</span>
            </label>

            {isChecked.error && (
              <center className={`text-red-600 text-xs`}>
                {" "}
                Please Read & Accept terms and conditions
              </center>
            )}
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
              Create your free account
            </button>
          )}

          {postStatus.done && (
            <center className="text-black font-bold">
              {postStatus.message}
            </center>
          )}
        </form>
      </div>
  );
};

export default Register;
