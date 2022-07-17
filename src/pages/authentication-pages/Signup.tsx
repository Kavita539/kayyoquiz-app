import { Input, PasswordInput } from "../../components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormErrorsTypes, ReactChangeEvent, ReactMouseEvent } from "../../types";
import { validFormChecker } from "../../utils";
import "./authentication.css";

const Signup = () => {
const [formErrors, setFormErrors] = useState({} as FormErrorsTypes);
const [submitted, setSubmitted] = useState(false);
const [userInput, setUserInput] = useState({
firstName: "",
lastName: "",
email: "",
password: "",
confirmPassword: "",
agreement: "not agree",
});

const changeHandler = (e: ReactChangeEvent) => {
const { name, value } = e.target;
setUserInput({ ...userInput, [name]: value });
};

const formSubmitHandler = (e: ReactMouseEvent) => {
e.preventDefault();
setSubmitted(true);
};

useEffect(() => {
setFormErrors(() => validFormChecker(userInput));
}, [userInput, submitted]);
return(
<>
    <div className="authentication-container">
        <div className="form-div">
            <form className="form-grp">
                <h3 className="text-center text-lg">SIGN UP</h3>
                <Input type="text" defaultValue={userInput.firstName} name="firstName" label="Name"
                    helperText={formErrors.firstName} showError={submitted} required={true}
                    changeHandler={changeHandler} />

                <Input type="text" defaultValue={userInput.lastName} name="lastName" label="Lastname"
                    helperText={formErrors.lastName} showError={submitted} required={true}
                    changeHandler={changeHandler} />

                <Input type="email" defaultValue={userInput.email} name="email" label="Email"
                    helperText={formErrors.email} showError={submitted} required={true} changeHandler={changeHandler} />

                <PasswordInput defaultValue={userInput.password} name="password" label="Password"
                    helperText={formErrors.password} showError={userInput.password.length> 2 || submitted}
                    required={true}
                    changeHandler={changeHandler}
                    />

                    <Input type="password" defaultValue={userInput.confirmPassword} name="confirmPassword"
                        label="Confirm Password" helperText={formErrors.confirmPassword}
                        showError={userInput.confirmPassword.length> 2 || submitted}
                    required={true}
                    changeHandler={changeHandler}
                    />


                    <div className="agreement-options">
                        <label className="form-label"><input type="checkbox" name="agreement" onChange={changeHandler}
                                value={userInput.agreement==="agree" ? "not agree" : "agree" }
                                checked={userInput.agreement==="agree" } id="agreement" /> I agree to
                            all Terms and Conditions</label>

                        {submitted && (
                        <p className="text-danger text-xs text-center option-helper-txt">
                            {formErrors.agreement}
                        </p>
                        )}
                    </div>

                    <div className="authentication-btn-cta">
                        <button className="btn btn-primary block-btn submit-btn" onClick={e=>
                            formSubmitHandler(e)}>Create new account</button>
                    </div>

                    <div className="redirect-link text-center">
                        <button className="btn link-btn">
                            <Link to="/signin">Already have
                            an account?<i className="fas fa-chevron-right"></i></Link></button>
                    </div>
            </form>
        </div>

    </div>
</>
);
};

export { Signup };