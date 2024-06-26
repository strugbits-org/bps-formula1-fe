import { confirmEmail } from "@/services/scApiCalls";
import { useState } from "react";

const ConfirmEmail = (props) => {
  const {
    confirmEmailPageData,
    setSuccessMessageVisible,
    setErrorMessageVisible,
    setMessage,
    setRedirection,
  } = props;

  const [isDisabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    setDisabled(true);
    try {
      e.preventDefault();
      setMessage("");
      const response = await confirmEmail({ email: formData?.email });
      if (response?.error) {
        setMessage(response.message);
        setErrorMessageVisible(true);
        return;
      }
      
      setMessage("Reset password link has been sent to your email");
      setSuccessMessageVisible(true);
      setRedirection("/");
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log("Error during confirm email:", error);
      setErrorMessageVisible(true);
      setMessage(error?.message);
    } finally {
      setDisabled(false);
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
          {confirmEmailPageData && confirmEmailPageData.description}
        </p>
        <form className="form-sign-in form-base" onSubmit={handleSubmit}>
          {/* <input type="hidden" name="login" value="[Login]" /> */}
          <div className="container-input col-12">
            <label htmlFor="confirm-email">
              {" "}
              {confirmEmailPageData && confirmEmailPageData.emailInputLabel}
            </label>
            <input
              id="confirm-email"
              name="email"
              type="email"
              placeholder="example@myemail.com"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="container-submit col-12 mt-mobile-10">
            <button
              disabled={isDisabled}
              type="submit"
              className="bt-submit btn-small-wide btn-red btn-hover-white w-100"
            >
              <i className="icon-profile"></i>
              <span className="submit-text split-chars">
                <span>
                  {confirmEmailPageData &&
                    confirmEmailPageData.confirmEmailButtonLabel}
                </span>
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
