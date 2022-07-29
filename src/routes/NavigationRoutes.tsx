import { Route, Routes, Navigate } from "react-router-dom";
import { Home, ExploreQuiz, Signup, Signin, Rules, Result, QuestionPage, Profile } from "../pages";
import { useAuth } from "../hooks";
import { PrivateRoutes } from "./PrivateRoutes";

const NavigationRoutes = () => {
  const {
    authState: { isAuthenticated },
  } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<PrivateRoutes />}>
      <Route path="/explore-quiz/:quizId" element={<ExploreQuiz />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/result" element={<Result />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/profile-logout" element={<Profile />} />
      </Route>
      {!isAuthenticated ? (
        <>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
        </>
      ) : (
        <>
          <Route path="/sign-up" element={<Navigate replace to="/" />}></Route>
          <Route path="/sign-in" element={<Navigate replace to="/" />}></Route>
        </>
      )}
    </Routes>
  );
};

export { NavigationRoutes };