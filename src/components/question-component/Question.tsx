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
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg"
            alt="responsive-image" />
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