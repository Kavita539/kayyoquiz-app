import { InputPropsTypes } from "../../types";
import "./input.css"

const PasswordInput = ({
type,
label,
placeholder,
required,
defaultValue,
showError,
helperText,
disabled,
name,
changeHandler
}: InputPropsTypes) => {

return(
<div className="input-grp"> <label className="form-label form-label-mandatory">{label}</label>
    <input className="form-field" type={type || "text" } placeholder={placeholder} defaultValue={defaultValue}
        required={required} disabled={disabled} onChange={changeHandler} name={name} />

    <div className="text-danger">{showError && helperText}</div>
</div>
);
};

export {
PasswordInput
};