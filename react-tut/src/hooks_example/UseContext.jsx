import React from "react";

// 3️⃣ useContext – Sharing Data Between Components

// Create Theme Context
const ThemeContext = React.createContext();

// ThemeProvider Component
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState("dark");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Theme Toggle Button Component
const ThemeToggleButton = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            style={{
                backgroundColor: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#333" : "#fff",
                padding: "10px",
                border: "none",
                cursor: "pointer",
                marginTop: "20px"
            }}
        >
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
};

export { ThemeProvider, ThemeToggleButton, ThemeContext };


/*
    What does it do?
        Lets you pass data to multiple components without passing
        props manually.

        Example: Sharing theme settings across different parts of the app.

    ✅ Where to use it?
        Sharing theme settings, language preferences,
        or user authentication state.
*/