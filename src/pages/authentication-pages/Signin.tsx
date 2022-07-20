import { Input, PasswordInput, OverlayContainer, Loading, Footer, Navbar } from "../../components";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FormErrorsTypes, ReactChangeEvent, ReactMouseEvent, LocationState } from "../../types";
import { validLoginFormChecker } from "../../utils";
import { useAuth } from "../../hooks";
import "./authentication.css";

const Signin = () => {

const [userInput, setUserInput] = useState({
email: "",
password: "",
});
const [formErrors, setFormErrors] = useState({} as FormErrorsTypes);
const [submitted, setSubmitted] = useState(false);
const {
    login,
    authState: { isLoading, error },
  } = useAuth();

  const location = useLocation();

  const { from } = (location.state as LocationState) || { from: { pathname: "/" } };


const changeHandler = (e: ReactChangeEvent) => {
const { name, value } = e.target;
setUserInput({ ...userInput, [name]: value });
};

const formSubmitHandler = (e: ReactMouseEvent) => {
e.preventDefault();
setSubmitted(true);
if (!(Object.values(formErrors).length > 0)) {
    login(userInput, from);
    setFormErrors({});
}
};

useEffect(() => {
setFormErrors(() => validLoginFormChecker(userInput));
}, [userInput, submitted]);

const loginWithGuest = (e: ReactMouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setUserInput({
      email: "quizgame@gmail.com",
      password: "Kavita@2000",
    });
    login({ email: "quizgame@gmail.com", password: "Kavita@2000" }, from);
  };

return(
<>
    <div className="form-wrapper">
        <Navbar/>
    <div className="authentication-container">
        <div className="form-div">
            <form className="form-grp">
                <h3 className="text-center text-lg">SIGN IN</h3>
                {error && <p className="text-danger text-center">{error}</p>}
                <OverlayContainer display={isLoading}>
                   <Loading />
                </OverlayContainer>
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
                    <button className="btn outline-btn-primary block-btn submit-btn" onClick={e => loginWithGuest(e)}>Login with Test
                        Credentials</button>
                </div>

                <div className="redirect-link text-center">
                    <button className="btn link-btn">
                        <Link to="/sign-up">Create new
                        account<i className="fas fa-chevron-right"></i></Link></button>
                </div>
            </form>
        </div>

    </div>
    <Footer/>
    </div>
</>
);
};

export { Signin };