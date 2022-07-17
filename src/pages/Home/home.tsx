import "./home.css";
import { Footer, Navbar, CategoryCard } from "../../components";
import { useTheme } from "../../hooks";

const Home = () => {
const { currentTheme } = useTheme();
const categoryData = [
{
categoryName: "The Nutrition quiz",
categoryDescription: "The ultimate space quiz for space geeks.",
categoryImage:
"/assets/nutition.jpeg",
categoryStatus: "available",
},
{
categoryName: "The Fitness Quiz",
categoryDescription: "Coming Soon...",
categoryImage:
"/assets/nutition.jpeg",
categoryStatus: "not-available",
},
{
categoryName: "Yoga Quiz",
categoryDescription: "Coming Soon...",
categoryImage:
"/assets/nutition.jpeg",
categoryStatus: "not-available",
},
];

return (
<div className={`home-container ${currentTheme==="dark" ? "dark" : "light" }`}>
    <Navbar />

    <main className="main-container">
        <section className="grid-50-50">
            <div className="banner-details text-center">
                <h1 className="text-primary-color text-xl banner-heading">Kayy-O-Quiz</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, sunt!</p>
                <div className="section-cta">
                    <a className="btn btn-primary" href="#categories">
                        Explore Categories
                    </a>
                </div>
            </div>
            <div className="banner-image">
                <img className="responsive-img" src="/assets/heroBanner.svg"
                    alt="the-banner-svg-of-boy-holding-phone-in-hand" />
            </div>
        </section>

        <section className="category-section">
            <h1 className="text-center text-xl">Categories</h1>
            <div className="category-grid" id="categories">
                {
                    categoryData.map((category, index) => {
                        return <CategoryCard key = {
                            index
                        }
                        category = {
                            category
                        }
                        />; 
                    })
                }
            </div>
        </section>
    </main>

    <Footer />
</div>
);
};

export {
    Home
}; 