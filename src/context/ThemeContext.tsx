import {
    createContext,
    useState
}
from "react";
import {
    ReactChildren,
    ThemeContextTypes
} from "../types";

const ThemeContext = createContext({}as ThemeContextTypes);

const ThemeProvider = ({
    children
}: ReactChildren) => {
    const [currentTheme, setCurrentTheme] = useState(
        JSON.parse(localStorage.getItem("kayy-O-quiz-theme") || "") || "dark"
    );
    return ( 
        <ThemeContext.Provider value = {
            {
                currentTheme,
                setCurrentTheme
            }
        } > {
            children
        } 
        </ThemeContext.Provider>
    );
};

export {
    ThemeContext,
    ThemeProvider
}; 
