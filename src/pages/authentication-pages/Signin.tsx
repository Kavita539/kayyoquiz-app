import { Input, PasswordInput } from "../../components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormErrorsTypes, ReactChangeEvent, ReactMouseEvent } from "../../types";
import { validLoginFormChecker } from "../../utils";
import "./authentication.css";

const Signin = () => {
const [userInput, setUserInput] = useState({
email: "",
password: "",
});
const [formErrors, setFormErrors] = useState({} as FormErrorsTypes);
const [submitted, setSubmitted] = useState(false);

const changeHandler = (e: ReactChangeEvent) => {
const { name, value } = e.target;
setUserInput({ ...userInput, [name]: value });
};

const formSubmitHandler = (e: ReactMouseEvent) => {
e.preventDefault();
setSubmitted(true);
};

useEffect(() => {
setFormErrors(() => validLoginFormChecker(userInput));
}, [userInput, submitted]);
return(
<>
    <div className="authentication-container">
        <div className="form-div">
            <form className="form-grp">
                <h3 className="text-center text-lg">SIGN IN</h3>
                <Input type="Email" required={true} label="Email" name="email" defaultValue={userInput.email}
                    changeHandler={changeHandler} showError={submitted} helperText={formErrors.email} />

                <PasswordInput required={true} label="Password" name="password" defaultValue={userInput.password}
                    changeHandler={changeHandler} showError={submitted} helperText={formErrors.password} />



                <div className="agreement-options">
                    <label className="form-label-agreement"><input type="checkbox" name="agreement" />
                        Remember me</label>
                </div>

                <div className="authentication-btn-cta">
                    <button className="btn btn-primary block-btn submit-btn" onClick={e=>
                        formSubmitHandler(e)}>Login</button>
                </div>

                <div className="authentication-btn-cta">
                    <button className="btn outline-btn-primary block-btn submit-btn">Login with Test
                        Credentials</button>
                </div>

                <div className="redirect-link text-center">
                    <button className="btn link-btn">
                        <Link to="/signup">Create new
                        account<i className="fas fa-chevron-right"></i></Link></button>
                </div>
            </form>
        </div>

    </div>
</>
);
};

export { Signin };