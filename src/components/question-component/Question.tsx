import {
Link,
useLocation
} from "react-router-dom";

const Question =() => {
const { pathname } = useLocation();
return(
<div className="grid-50-50">
    <div className="question-image">
        <img className="responsive-img rounded-top-corner-img"
            src="/assets/nutrition.jpeg" alt="nutrition"/>
    </div>
    <div className="styled-text-container">
        <div className="question">
            <h3>Question 1</h3>
            <p className="question-statement text-lg">
                What fitness is all about?
            </p>
            <div className="options grid-50-50">
                <div className="option shadow">qqqqqqqqqqqqqqq</div>
                <div className="option shadow">qqqqqqqqqqqqqq</div>
                <div className={`option shadow ${pathname==="/result" ? "correct-answer" : "" }`}>
                    qqqqqq
                </div>
                <div className="option shadow">qqqqqqq</div>
            </div>
            {pathname !== "/result" ? (
            <div className="question-cta">
                <Link to="/result" className="btn btn-primary">
                Next <i className="fal fa-chevron-right"></i>
                </Link>
            </div>
            ) : null}
        </div>
    </div>
</div>
);
};

export {
Question
};