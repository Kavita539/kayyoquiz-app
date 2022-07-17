import {
Link
}
from "react-router-dom";
import {
CategoryCardPropsTypes
} from "../../types";
import "./categoryCard.css";

const CategoryCard = ({
category
}: CategoryCardPropsTypes) => {
const {
categoryName,
categoryDescription,
categoryStatus,
categoryImage
} = category;

return(
<div className="card vertical-card card-shadow">
    <div className="card-image-container">
        <img className="responsive-img rounded-top-corner-img" src={categoryImage} alt={categoryName} />
    </div>
    <div className="card-info-container">
        <div className="card-info">
            <div className="card-title">
                <div>
                    <h3 className="card-title-header">{categoryName}</h3>
                    <p className="card-description">{categoryDescription}</p>
                </div>
            </div>
        </div>
        {categoryStatus === "available" ? (<div className="card-call-to-action">
            <Link to="explore-quiz" className="btn block-btn btn-primary">
            Explore Quizzes
            </Link>
        </div>) : null}
    </div>
</div>
);
};

export {
CategoryCard
};