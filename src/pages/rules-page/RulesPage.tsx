import "./rules.css";
import { useEffect } from "react";
import { useTheme, useGame } from "../../hooks";
import { Navbar, Footer } from "../../components";
import { Link } from "react-router-dom";

const Rules = () => {
const { currentTheme } = useTheme();
const { gameDispatch } = useGame();

useEffect(() => {
gameDispatch({ type: "RESTART_QUIZ" });
}, [gameDispatch]);

return (
<div className={`rules-container ${currentTheme==="dark" ? "dark" : "light" }`}>
  <Navbar />

  <main className="rules flex-column">
    <h1 className="text-center">The Rules are Simple</h1>
    <ul className="circle-bullet-list">
      <li>There are five questions.</li>
      <li>Each question carry 10 marks.</li>
      <li>Each question has only one correct answer.</li>
    </ul>
    <div className="flex-total-center">
      <Link to="/question" className="btn btn-primary">
      Start Quiz
      </Link>
    </div>
  </main>

  <Footer />
</div>
);
};

export { Rules };