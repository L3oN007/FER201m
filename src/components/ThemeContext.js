import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [isEnabled, setIsEnabled] = useState(() => {
        const savedThemeEnabled = localStorage.getItem('themeEnabled');
        return savedThemeEnabled ? JSON.parse(savedThemeEnabled) : false;
    });

    useEffect(() => {
        updateTheme(isEnabled);
        localStorage.setItem('themeEnabled', JSON.stringify(isEnabled));
    }, [isEnabled]);

    const toggleState = () => {
        setIsEnabled((prevState) => !prevState);
    };

    const updateTheme = (isDarkEnabled) => {
        const styles = getComputedStyle(document.body);
        const black = styles.getPropertyValue('--black');
        const white = styles.getPropertyValue('--white');
        const mateBlack = styles.getPropertyValue('--mate_black');
        const docEl = document.documentElement;

        if (isDarkEnabled) {
            docEl.style.setProperty('--background', black);
            docEl.style.setProperty('--foreground', white);
            docEl.style.setProperty('--cardbackground', mateBlack);
            document.querySelector('html').classList.add('darkmode');
        } else {
            docEl.style.setProperty('--background', white);
            docEl.style.setProperty('--foreground', black);
            docEl.style.setProperty('--cardbackground', white);
            document.querySelector('html').classList.remove('darkmode');
        }
    };

    return (
        <ThemeContext.Provider value={{ isEnabled, toggleState }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
