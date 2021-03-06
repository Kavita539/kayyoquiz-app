import {
    useContext
} from "react";
import {
    ThemeContext
} from "../context";

const useTheme = () => {
    const {
        currentTheme,
        setCurrentTheme
    } = useContext(ThemeContext);

    const handleCurrentTheme = () => {
        setCurrentTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
        localStorage.setItem(
            "kayy-O-quiz-theme",
            JSON.stringify(currentTheme !== "light" ? "light" : "dark")
        );
    };
    return {
        currentTheme,
        handleCurrentTheme
    };
};

export {
    useTheme
};