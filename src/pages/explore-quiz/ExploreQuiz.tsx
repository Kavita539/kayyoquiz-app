import "./exploreQuiz.css";
import { Footer, Navbar, QuizCard } from "../../components";
import { useTheme } from "../../hooks";

const ExploreQuiz = () => {
const { currentTheme } = useTheme();
const quizData = [
{
quizName: "Know Your Nutrients",
quizDescription: "Test your knowledge of nutrition.",
quizImage:
"/assets/nutrition.jpeg",
quizStatus: "available",
},
{
quizName: "fitness Quiz",
quizDescription: "Coming Soon...",
quizImage:
"/assets/nutrition.jpeg",
quizStatus: "not-available",
},
];
return (
<div className={`explore-quiz-container ${currentTheme==="dark" ? "dark" : "light" }`}>
    <Navbar />
    <main className="quiz-display-container">
        {
            quizData.map((quiz, index) => {
                return <QuizCard key = {
                    index
                }
                quiz = {
                    quiz
                }
                />; 
            })
        } 
        </main>
    <Footer />
</div>
);
};

export { ExploreQuiz }; 
