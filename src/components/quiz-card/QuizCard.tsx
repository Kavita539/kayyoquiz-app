import {
Link
} from "react-router-dom";
import {
QuizCardPropsTypes
} from "../../types";
import "../category-card/categoryCard.css";

const QuizCard = ({
quiz
}: QuizCardPropsTypes) => {
const {
quizName,
quizDescription,
quizStatus,
quizImage
} = quiz;
return(
<div className="card vertical-card card-shadow">
    <div className="card-image-container">
        <img className="responsive-img rounded-top-corner-img" src={quizImage} alt={quizName} />
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
            <Link to="/rules" className="btn block-btn btn-primary">
            Play Now
            </Link>
        </div>) : null}
    </div>
</div>
);
};

export {
QuizCard
};