import { Route, Routes } from "react-router-dom";
import { Home, ExploreQuiz, Signup, Signin } from "../pages";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore-quiz" element={<ExploreQuiz />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/sign-in" element={<Signin />} />
    </Routes>
  );
};

export { NavigationRoutes };