import { InputPropsTypes } from "../../types";
import "./input.css"

const Input = ({
type,
label,
placeholder,
mandatory,
defaultValue,
errorText,
helperText,
disabled,
name,
changeHandler
}: InputPropsTypes) => {
return(
<div className="input-grp"> <label className="form-label form-label-mandatory">{label}</label>
    <input className="form-field" type={type || "text" } placeholder={placeholder} defaultValue={defaultValue}
        required={mandatory} disabled={disabled} onChange={changeHandler} name={name} />
    <div className="text-danger">{errorText && helperText}</div>
</div>
);
};

export {
Input
};