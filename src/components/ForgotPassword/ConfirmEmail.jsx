import { useEffect, useState } from "react";
import { pageLoadStart } from "@/utils/AnimationFunctions";
// import Disclaimer from "./Disclaimer";
import { useRouter } from "next/navigation";

const ConfirmEmail = (props) => {
  const { setSuccessMessageVisible, setErrorMessageVisible, setMessage } =
    props;
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  // const [isError, setError] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      // setError(true);
      const input = { email: formData?.email };
      // console.log("input", input);

      const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;
      const response = await fetch(`${base_url}formula1/auth/forgotPassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      if (!response.ok) {
        const data = await response.json();

        // console.log("!data", data);
        setMessage(data.message);
        setErrorMessageVisible(true);
        return;
      }
      const data = await response.json();
      // console.log("data", data);
      setMessage("Reset password link has been sent to your email");
      setSuccessMessageVisible(true);
    } catch (error) {
      console.log("Error during confirm email:", error);
      setErrorMessageVisible(true);
      // setMessage("Invalid Credentials!");
      setMessage(error?.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container-confirm-email d-none">
      <div>
        <p
          className="text-agree mt-lg-25 mt-mobile-30"
          style={{
            marginBottom: "24px",
          }}
        >
          Enter your login email and we'll send you a link to reset your
          password
        </p>
        <form className="form-sign-in form-base" onSubmit={handleSubmit}>
          {/* <input type="hidden" name="login" value="[Login]" /> */}
          <div className="container-input col-12">
            <label htmlFor="confirm-email">Email *</label>
            <input
              id="confirm-email"
              name="email"
              type="email"
              placeholder="example@myemail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="container-submit col-12 mt-mobile-10">
            <button
              type="submit"
              className="bt-submit btn-small-wide btn-red btn-hover-white w-100"
            >
              <i className="icon-profile"></i>
              <span className="submit-text split-chars">
                <span>Confirm Email</span>
              </span>
            </button>
          </div>
        </form>
        {/* {isError && (
          <h3
            // data-aos="fadeIn"
            // data-form-error
            style={{
              marginTop: "12px",
              color: "#fff",
              fontSize: "14px",
              display: "block",
              width: "100%",
              textAlign: "center",
              visibility: "visible",
            }}
          >
            Invalid Email
          </h3>
        )} */}
      </div>
    </div>
  );
};

export default ConfirmEmail;
