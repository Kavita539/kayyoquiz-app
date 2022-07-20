import {
useNavigate
} from "react-router-dom";
import {
QuizCardPropsTypes
} from "../../types";
import "../category-card/categoryCard.css";
import { useGame } from "../../hooks";

const QuizCard = ({
quiz
}: QuizCardPropsTypes) => {
const { id, quizName, quizDescription, quizStatus, quizImage } = quiz;
const { getQuestions } = useGame();
const navigate = useNavigate();

const playNowHandler = async () => {
try {
await getQuestions(id, quizName);
navigate("/rules");
} catch (err) {
console.log(err);
}
};

return(
<div className="card vertical-card card-shadow">
    <div className="card-image-container">
        <img width="300" height="168" className="responsive-img rounded-top-corner-img" src={quizImage}
            alt={quizName} />
    </div>
    <div className="card-info-container">
        <div className="card-info">
            <div className="card-title">
                <div>
                    <h3 className="card-title-header">{quizName}</h3>
                    <p className="card-description">{quizDescription}</p>
                </div>
            </div>
        </div>
        {quizStatus === "available" ? (<div className="card-call-to-action">
            <button onClick={playNowHandler} className="btn block-btn btn-primary">
            Play Now
            </button>
        </div>) : null}
    </div>
</div>
);
};

export {
QuizCard
};